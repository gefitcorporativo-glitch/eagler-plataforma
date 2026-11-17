-- Eagler Gym · Prazo da lista (Meu dia)
-- Rodar no Supabase das plataformas (projeto irwvagffrguiljaxrzmd), SQL Editor, "Run without RLS".
-- Pode rodar mais de uma vez (if not exists).

alter table eagler_campanhas add column if not exists prazo_primeiras_dias int;
alter table eagler_campanhas add column if not exists prazo_primeiras_data text;

-- avisa a API para reconhecer as colunas novas agora
notify pgrst, 'reload schema';
