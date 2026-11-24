-- Eagler Gym · Projeto de marketing (cronograma, mínimo e recomendado)
-- Rodar no Supabase das plataformas (projeto irwvagffrguiljaxrzmd), SQL Editor, "Run without RLS".
-- Pode rodar mais de uma vez (if not exists). Mesmo padrão das demais tabelas eagler_.

create table if not exists eagler_marketing_projeto (academia_id text primary key);
alter table eagler_marketing_projeto add column if not exists dados jsonb default '{}';
alter table eagler_marketing_projeto add column if not exists updated_at bigint;

alter table eagler_marketing_projeto disable row level security;

-- avisa a API para reconhecer a tabela agora
notify pgrst, 'reload schema';
