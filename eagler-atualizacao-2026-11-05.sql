-- ============================================================
-- EAGLER GYM · ATUALIZAÇÃO 05/11/2026
-- Central de Leads (formulários extras, histórico de contatos, enviar para campanha),
-- Hub de Pessoas por academia e NPS do aluno.
-- Rodar no SQL Editor do Supabase (projeto irwvagffrguiljaxrzmd).
-- Seguro rodar mais de uma vez: só cria o que falta, não apaga dados.
-- ============================================================

-- Central de Leads
alter table eagler_leads add column if not exists cargo text;
alter table eagler_leads add column if not exists academia_nome text;
alter table eagler_leads add column if not exists cidade text;
alter table eagler_leads add column if not exists origem_primeira text;
alter table eagler_leads add column if not exists historico jsonb default '[]'::jsonb;
alter table eagler_leads add column if not exists card_id uuid;
alter table eagler_leads add column if not exists demo boolean default false;
alter table eagler_leads add column if not exists oculto boolean default false;
alter table eagler_lead_campanhas add column if not exists publico text default 'aluno';
alter table eagler_lead_campanhas add column if not exists campos_extra jsonb default '[]'::jsonb;
alter table eagler_lead_campanhas add column if not exists capa_convidado text;
alter table eagler_academias add column if not exists jornada_leads jsonb;

-- Hub de Pessoas: testes passam a ficar ligados à academia
create table if not exists eagler_pessoas_testes (
  id uuid primary key default gen_random_uuid(),
  nome text, cargo text, sc jsonb, cons numeric, respostas jsonb,
  created_at timestamptz default now()
);
alter table eagler_pessoas_testes add column if not exists academia_id uuid;
alter table eagler_pessoas_testes add column if not exists created_at timestamptz default now();
update eagler_pessoas_testes set academia_id = 'e4a91c26-5b7d-4e08-9f13-6c2d8a4b7e51' where academia_id is null;
create index if not exists eagler_pessoas_testes_academia_idx on eagler_pessoas_testes (academia_id, created_at desc);

-- NPS do aluno
create table if not exists eagler_nps_respostas (
  id uuid primary key default gen_random_uuid(),
  academia_id uuid,
  tipo text, contexto text, nota int, aluno_nome text,
  created_at timestamptz not null default now()
);
alter table eagler_nps_respostas add column if not exists academia_id uuid;
alter table eagler_nps_respostas add column if not exists nota int;
alter table eagler_nps_respostas add column if not exists created_at timestamptz not null default now();
alter table eagler_nps_respostas add column if not exists tipo text;
alter table eagler_nps_respostas add column if not exists contexto text;
alter table eagler_nps_respostas add column if not exists aluno_nome text;
-- respostas antigas gravadas com o id errado da academia passam para a Eagler
update eagler_nps_respostas set academia_id = 'e4a91c26-5b7d-4e08-9f13-6c2d8a4b7e51' where academia_id::text = 'b8ae52d9-ac2d-4785-bd9b-e5ebc9828f9e';
create index if not exists eagler_nps_academia_idx on eagler_nps_respostas (academia_id, created_at desc);

-- Mesmo padrão de acesso das demais tabelas eagler_ (login atual não usa Supabase Auth)
alter table eagler_leads disable row level security;
alter table eagler_lead_campanhas disable row level security;
alter table eagler_pessoas_testes disable row level security;
alter table eagler_nps_respostas disable row level security;

-- Conferência (deve retornar 1 linha com a Eagler)
select id, nome from eagler_academias where id = 'e4a91c26-5b7d-4e08-9f13-6c2d8a4b7e51';
