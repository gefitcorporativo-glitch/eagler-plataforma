-- ============================================================
-- EAGLER GYM · CENTRAL DE LEADS (módulo M3)
-- Rodar UMA vez no SQL Editor do Supabase. Seguro rodar de novo (não apaga dados).
-- Tabelas: eagler_lead_campanhas (links de captação) e eagler_leads (todos os leads).
-- ============================================================

create table if not exists eagler_lead_campanhas (
  id uuid primary key default gen_random_uuid(),
  academia_id text references eagler_academias(id),
  slug text unique not null,              -- vai no link: captura.html?c=slug
  nome text not null,                     -- nome interno da campanha
  origem text default 'evento',           -- trafego_pago | whatsapp_organico | instagram_organico | evento | parceria | indicacao | site | outro
  titulo text,                            -- título da página de captura
  subtitulo text,
  info text,                              -- linha de data/local/horário
  capa_url text,                          -- imagem de capa (arquivo no repositório ou URL)
  cor text,                               -- cor de destaque da página (hex)
  sorteio boolean default false,          -- mostra o texto do sorteio e libera a lista para imprimir
  perguntas jsonb default '{"idade":true,"treina":true,"parado":true}'::jsonb,
  ativo boolean default true,
  created_at timestamptz default now()
);

create table if not exists eagler_leads (
  id uuid primary key default gen_random_uuid(),
  academia_id text references eagler_academias(id),
  campanha_id uuid references eagler_lead_campanhas(id) on delete set null,
  campanha_slug text,
  nome text not null,
  whatsapp text,
  whatsapp_norm text,                     -- só dígitos, para achar duplicados
  idade int,
  treina text,                            -- academia | aluno | por_conta | nao_treina
  tempo_parado text,                      -- menos_6m | 6_12m | mais_1a | nunca
  respostas jsonb default '{}'::jsonb,    -- perguntas extras de cada campanha
  origem text default 'outro',
  utm_source text, utm_medium text, utm_campaign text, utm_content text,
  pagina text,
  consultora_id text,
  status text default 'novo',             -- novo | contatado | agendado | experiencia | convertido | perdido
  observacoes text,
  consentimento boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists eagler_leads_acad_idx on eagler_leads (academia_id, created_at desc);
create index if not exists eagler_leads_camp_idx on eagler_leads (campanha_id);
create index if not exists eagler_leads_wpp_idx on eagler_leads (whatsapp_norm);

-- Mesmo padrão das demais tabelas da plataforma (segurança por usuário ainda pendente: ver ROADMAP).

-- ---------- Indicação digital (v2, 30/10/2026) ----------
alter table eagler_leads add column if not exists codigo text;               -- código do lead para convidar amigos: NOME[SIGLA]1234
alter table eagler_leads add column if not exists indicado_por_codigo text;  -- código de quem indicou
alter table eagler_leads add column if not exists indicado_por_lead uuid;    -- lead de quem indicou
alter table eagler_leads add column if not exists indicado_por_nome text;
create unique index if not exists eagler_leads_codigo_uidx on eagler_leads (codigo) where codigo is not null;
create index if not exists eagler_leads_indicador_idx on eagler_leads (indicado_por_codigo);

alter table eagler_lead_campanhas add column if not exists indicacao boolean default false;      -- liga o "convide até 5 amigos"
alter table eagler_lead_campanhas add column if not exists codigo_sigla text;                    -- vai entre colchetes no código
alter table eagler_lead_campanhas add column if not exists indicacao_limite timestamptz;         -- até quando a indicação vale chance extra no sorteio
alter table eagler_lead_campanhas add column if not exists presentes jsonb;                      -- lista de presentes para o convidado
alter table eagler_lead_campanhas add column if not exists convite_img text;                     -- arte usada no compartilhar
alter table eagler_lead_campanhas add column if not exists evento_titulo text;
alter table eagler_lead_campanhas add column if not exists evento_texto text;
alter table eagler_lead_campanhas add column if not exists evento_mapa text;
alter table eagler_lead_campanhas add column if not exists evento_fim timestamptz;               -- depois disso some a faixa "acontecendo agora"
alter table eagler_lead_campanhas add column if not exists oferta_ativa boolean default false;
alter table eagler_lead_campanhas add column if not exists oferta_titulo text;
alter table eagler_lead_campanhas add column if not exists oferta_texto text;
alter table eagler_lead_campanhas add column if not exists oferta_mensagem text;                 -- mensagem pronta do WhatsApp ({evento} vira o nome)
alter table eagler_lead_campanhas add column if not exists whatsapp_academia text;

-- ---------- Artes da campanha (v3, 30/10/2026) ----------
alter table eagler_lead_campanhas add column if not exists capa_convidado text;   -- capa da página de quem chega por indicação

-- Pasta pública de imagens das campanhas (Supabase Storage), até 2 MB por imagem
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('campanhas', 'campanhas', true, 2097152, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public = true, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;
do $$ begin
  if not exists (select 1 from pg_policies where schemaname='storage' and tablename='objects' and policyname='campanhas_envio') then
    create policy campanhas_envio on storage.objects for insert to anon, authenticated with check (bucket_id = 'campanhas');
  end if;
end $$;

-- ---------- Formulários, enriquecimento e envio para campanha (v4, 31/10/2026) ----------
alter table eagler_leads add column if not exists cargo text;                       -- formulário de gestor
alter table eagler_leads add column if not exists academia_nome text;
alter table eagler_leads add column if not exists cidade text;
alter table eagler_leads add column if not exists origem_primeira text;             -- canal do primeiro contato
alter table eagler_leads add column if not exists historico jsonb default '[]'::jsonb; -- pontos de contato (cada formulário preenchido)
alter table eagler_leads add column if not exists card_id uuid;                      -- card criado no Kanban de Campanhas
alter table eagler_leads add column if not exists demo boolean default false;        -- lead fictício de demonstração
alter table eagler_lead_campanhas add column if not exists publico text default 'aluno';      -- aluno | gestor
alter table eagler_lead_campanhas add column if not exists campos_extra jsonb default '[]'::jsonb; -- perguntas extras do formulário

-- ---------- Ocultar leads (v5, 31/10/2026): testes e repetidos saem da lista e do sorteio, sem apagar ----------
alter table eagler_leads add column if not exists oculto boolean default false;

alter table eagler_lead_campanhas disable row level security;
alter table eagler_leads disable row level security;


-- ---------- Hub de Pessoas: teste de perfil do candidato (pessoas.html e teste-candidato.html) ----------
create table if not exists eagler_pessoas_testes (
  id uuid primary key default gen_random_uuid(),
  nome text, cargo text, sc jsonb, cons numeric, respostas jsonb,
  created_at timestamptz default now()
);
alter table eagler_pessoas_testes disable row level security;

-- ---------- Conferência: a academia da Eagler precisa existir (deve retornar 1 linha) ----------
select id, nome from eagler_academias where id = 'e4a91c26-5b7d-4e08-9f13-6c2d8a4b7e51';
