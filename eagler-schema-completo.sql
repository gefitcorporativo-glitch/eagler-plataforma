-- ============================================================
-- EAGLER GYM · SCHEMA COMPLETO DA PLATAFORMA (Metodologia GeFit)
-- Supabase da plataforma GeFit (projeto irwvagffrguiljaxrzmd), prefixo eagler_
-- Academia: Eagler Gym · id e4a91c26-5b7d-4e08-9f13-6c2d8a4b7e51
--
-- Como rodar: SQL Editor do Supabase > colar tudo > Run (sem RLS, como nos demais).
-- Pode rodar de novo quantas vezes precisar: só cria o que ainda não existe e
-- nunca apaga dados (não tem drop table).
-- Não toca em nenhuma tabela da matriz nem das outras academias.
-- ============================================================

create extension if not exists pgcrypto;

-- ============================================================
-- 1. Plataforma (Hub, Desafio ROI 21 Dias, Campanhas, Experiências, Perfis)
-- ============================================================

-- A academia (uma só nesta instalação)
create table if not exists eagler_academias (id text primary key);
alter table eagler_academias add column if not exists nome text;
alter table eagler_academias add column if not exists cidade text;
alter table eagler_academias add column if not exists ativo boolean default true;
alter table eagler_academias add column if not exists desafio_inicio date;
alter table eagler_academias add column if not exists metas_padrao jsonb;
alter table eagler_academias add column if not exists modo_lancamento jsonb;
alter table eagler_academias add column if not exists jornada_leads jsonb;
alter table eagler_academias add column if not exists jornada_rematricula jsonb;
alter table eagler_academias add column if not exists jornada_renovacao jsonb;
alter table eagler_academias add column if not exists jornada_sucesso jsonb;
alter table eagler_academias add column if not exists contrato jsonb;
alter table eagler_academias add column if not exists created_at timestamptz default now();

-- Logins da plataforma (gestor, consultor, treinador)
create table if not exists eagler_gestores (id text primary key);
alter table eagler_gestores add column if not exists nome text;
alter table eagler_gestores add column if not exists email text;
alter table eagler_gestores add column if not exists senha_hash text;
alter table eagler_gestores add column if not exists academia_id text;
alter table eagler_gestores add column if not exists role text default 'gestor';
alter table eagler_gestores add column if not exists ativo boolean default true;
alter table eagler_gestores add column if not exists modulos_ativos text[] default '{}';
alter table eagler_gestores add column if not exists consultora_id text;
alter table eagler_gestores add column if not exists treinador_id text;
alter table eagler_gestores add column if not exists created_at timestamptz default now();

-- Equipe comercial
create table if not exists eagler_consultoras (id text primary key);
alter table eagler_consultoras add column if not exists academia_id text;
alter table eagler_consultoras add column if not exists nome text;
alter table eagler_consultoras add column if not exists meta numeric;
alter table eagler_consultoras add column if not exists meta_tipo text default 'planos';
alter table eagler_consultoras add column if not exists horas numeric;
alter table eagler_consultoras add column if not exists funis text[] default '{}';
alter table eagler_consultoras add column if not exists lista jsonb default '{}';
alter table eagler_consultoras add column if not exists metas jsonb;
alter table eagler_consultoras add column if not exists ativo boolean default true;
alter table eagler_consultoras add column if not exists created_at timestamptz default now();

-- Equipe técnica
create table if not exists eagler_treinadores (id text primary key);
alter table eagler_treinadores add column if not exists academia_id text;
alter table eagler_treinadores add column if not exists nome text;
alter table eagler_treinadores add column if not exists ativo boolean default true;
alter table eagler_treinadores add column if not exists telefone text;
alter table eagler_treinadores add column if not exists cref text;
alter table eagler_treinadores add column if not exists grau_academico text;
alter table eagler_treinadores add column if not exists nivel_carreira text;
alter table eagler_treinadores add column if not exists horario_inicio text;
alter table eagler_treinadores add column if not exists horario_fim text;
alter table eagler_treinadores add column if not exists carga_musculacao numeric default 0;
alter table eagler_treinadores add column if not exists carga_aulas_coletivas numeric default 0;
alter table eagler_treinadores add column if not exists carga_piscina numeric default 0;
alter table eagler_treinadores add column if not exists carga_artes_marciais numeric default 0;
alter table eagler_treinadores add column if not exists carga_avaliacoes numeric default 0;
alter table eagler_treinadores add column if not exists carga_lideranca numeric default 0;
alter table eagler_treinadores add column if not exists created_at bigint default (extract(epoch from now())*1000)::bigint;

-- Lançamentos diários do Desafio ROI 21 Dias
create table if not exists eagler_registros (id text primary key);
alter table eagler_registros add column if not exists academia_id text;
alter table eagler_registros add column if not exists consultora_id text;
alter table eagler_registros add column if not exists dia int;
alter table eagler_registros add column if not exists data date;
alter table eagler_registros add column if not exists obs text;
alter table eagler_registros add column if not exists ciclos int default 0;
alter table eagler_registros add column if not exists modo text default 'exclusivo';
alter table eagler_registros add column if not exists funis jsonb default '{}';
alter table eagler_registros add column if not exists ts bigint;
alter table eagler_registros add column if not exists created_at timestamptz default now();

-- Histórico de desafios encerrados
create table if not exists eagler_desafios (id text primary key);
alter table eagler_desafios add column if not exists academia_id text;
alter table eagler_desafios add column if not exists numero int;
alter table eagler_desafios add column if not exists nome text;
alter table eagler_desafios add column if not exists data_inicio text;
alter table eagler_desafios add column if not exists data_fim text;
alter table eagler_desafios add column if not exists dias_ativos int;
alter table eagler_desafios add column if not exists resumo jsonb;
alter table eagler_desafios add column if not exists created_at timestamptz default now();

-- Alunos (aba Alunos)
create table if not exists eagler_alunos (id text primary key default gen_random_uuid()::text);
alter table eagler_alunos add column if not exists academia_id text;
alter table eagler_alunos add column if not exists nome text;
alter table eagler_alunos add column if not exists telefone text;
alter table eagler_alunos add column if not exists plano_tipo text;
alter table eagler_alunos add column if not exists grupo_receita text;
alter table eagler_alunos add column if not exists valor_plano numeric;
alter table eagler_alunos add column if not exists data_matricula text;
alter table eagler_alunos add column if not exists status text default 'ativo';
alter table eagler_alunos add column if not exists treinador_id text;
alter table eagler_alunos add column if not exists mes_referencia text;
alter table eagler_alunos add column if not exists criado_em timestamptz default now();

-- Aba Planejamento
create table if not exists eagler_planejamento_mensal (academia_id text not null, mes_referencia date not null, primary key (academia_id, mes_referencia));
alter table eagler_planejamento_mensal add column if not exists id uuid default gen_random_uuid();
alter table eagler_planejamento_mensal add column if not exists meta1_faturamento numeric;
alter table eagler_planejamento_mensal add column if not exists meta1_planos int;
alter table eagler_planejamento_mensal add column if not exists meta1_ativos int;
alter table eagler_planejamento_mensal add column if not exists meta2_faturamento numeric;
alter table eagler_planejamento_mensal add column if not exists meta2_planos int;
alter table eagler_planejamento_mensal add column if not exists meta2_ativos int;
alter table eagler_planejamento_mensal add column if not exists supermeta_faturamento numeric;
alter table eagler_planejamento_mensal add column if not exists supermeta_planos int;
alter table eagler_planejamento_mensal add column if not exists supermeta_ativos int;
alter table eagler_planejamento_mensal add column if not exists fc_atual numeric;
alter table eagler_planejamento_mensal add column if not exists fc_anterior numeric;
alter table eagler_planejamento_mensal add column if not exists fc_ano_anterior numeric;
alter table eagler_planejamento_mensal add column if not exists custo_fixo numeric;
alter table eagler_planejamento_mensal add column if not exists inadimplencia numeric;
alter table eagler_planejamento_mensal add column if not exists fat_ano_anterior numeric;
alter table eagler_planejamento_mensal add column if not exists encarteiramento_meta numeric;
alter table eagler_planejamento_mensal add column if not exists encarteirados_atual int;
alter table eagler_planejamento_mensal add column if not exists ciclo_renovacao_dias int default 90;
alter table eagler_planejamento_mensal add column if not exists a_renovar int;
alter table eagler_planejamento_mensal add column if not exists renovados_encarteirados int;
alter table eagler_planejamento_mensal add column if not exists renovados_nao_encarteirados int;
alter table eagler_planejamento_mensal add column if not exists cancelamentos int;
alter table eagler_planejamento_mensal add column if not exists carteiras_meta jsonb default '{}';
alter table eagler_planejamento_mensal add column if not exists recebiveis_futuros_12m numeric;
alter table eagler_planejamento_mensal add column if not exists reserva_estrategica_meses_min int;
alter table eagler_planejamento_mensal add column if not exists reserva_estrategica_meses_max int;
alter table eagler_planejamento_mensal add column if not exists updated_at bigint;

-- Centros de custo do Planejamento
create table if not exists eagler_centros_custo (academia_id text not null, mes_referencia date not null, categoria text not null, primary key (academia_id, mes_referencia, categoria));
alter table eagler_centros_custo add column if not exists meta_mensal numeric;
alter table eagler_centros_custo add column if not exists realizado_mensal numeric;

-- Aba Diagnóstico
create table if not exists eagler_diagnostico_avaliacao (academia_id text primary key);
alter table eagler_diagnostico_avaliacao add column if not exists indicadores jsonb default '{}';
alter table eagler_diagnostico_avaliacao add column if not exists updated_at bigint;

-- Aba Briefing
create table if not exists eagler_briefing_negocio (academia_id text primary key);
alter table eagler_briefing_negocio add column if not exists dados jsonb default '{}';
alter table eagler_briefing_negocio add column if not exists espaco_m2 numeric;
alter table eagler_briefing_negocio add column if not exists ticket_atual numeric;
alter table eagler_briefing_negocio add column if not exists modalidade_principal text;
alter table eagler_briefing_negocio add column if not exists modelo_negocio text;
alter table eagler_briefing_negocio add column if not exists usa_bot_qualificacao boolean default false;
alter table eagler_briefing_negocio add column if not exists diferenciais_tecnicos text;
alter table eagler_briefing_negocio add column if not exists publico_alvo text;
alter table eagler_briefing_negocio add column if not exists modalidades jsonb default '[]';
alter table eagler_briefing_negocio add column if not exists updated_at bigint;

-- Transcrições do Briefing
create table if not exists eagler_briefing_transcricoes (id text primary key default gen_random_uuid()::text);
alter table eagler_briefing_transcricoes add column if not exists academia_id text;
alter table eagler_briefing_transcricoes add column if not exists data text;
alter table eagler_briefing_transcricoes add column if not exists titulo text;
alter table eagler_briefing_transcricoes add column if not exists conteudo text;
alter table eagler_briefing_transcricoes add column if not exists criado_em bigint;

-- Briefing respondido pelo gestor (briefing-gestora.html)
create table if not exists eagler_briefing_gestora (academia_id text primary key);
alter table eagler_briefing_gestora add column if not exists respostas jsonb default '{}';
alter table eagler_briefing_gestora add column if not exists status text default 'rascunho';
alter table eagler_briefing_gestora add column if not exists updated_at bigint;

-- Campanhas (Kanban)
create table if not exists eagler_campanhas (id uuid primary key default gen_random_uuid());
alter table eagler_campanhas add column if not exists academia_id text;
alter table eagler_campanhas add column if not exists nome text;
alter table eagler_campanhas add column if not exists mes_referencia text;
alter table eagler_campanhas add column if not exists status text default 'planejamento';
alter table eagler_campanhas add column if not exists status_anterior_arquivamento text;
alter table eagler_campanhas add column if not exists perfis jsonb;
alter table eagler_campanhas add column if not exists config_renovacao jsonb;
alter table eagler_campanhas add column if not exists config_sucesso jsonb;
alter table eagler_campanhas add column if not exists investimento_trafego numeric;
alter table eagler_campanhas add column if not exists created_at bigint;
alter table eagler_campanhas add column if not exists updated_at bigint;

-- Ondas de uma campanha
create table if not exists eagler_campanha_ondas (id text primary key default gen_random_uuid()::text);
alter table eagler_campanha_ondas add column if not exists campanha_id text;
alter table eagler_campanha_ondas add column if not exists numero_onda int;
alter table eagler_campanha_ondas add column if not exists nome text;
alter table eagler_campanha_ondas add column if not exists data_inicio text;
alter table eagler_campanha_ondas add column if not exists status text default 'planejada';
alter table eagler_campanha_ondas add column if not exists departamento text;

-- Cards do Kanban (a chave para campanhas permite a consulta embutida da Visão Executiva)
create table if not exists eagler_campanha_cards (id text primary key default gen_random_uuid()::text);
alter table eagler_campanha_cards add column if not exists campanha_id uuid references eagler_campanhas(id) on delete cascade;
alter table eagler_campanha_cards add column if not exists onda_id text;
alter table eagler_campanha_cards add column if not exists academia_id text;
alter table eagler_campanha_cards add column if not exists perfil text;
alter table eagler_campanha_cards add column if not exists nome text;
alter table eagler_campanha_cards add column if not exists codigo_matricula text;
alter table eagler_campanha_cards add column if not exists telefone text;
alter table eagler_campanha_cards add column if not exists idade int;
alter table eagler_campanha_cards add column if not exists plano_atual text;
alter table eagler_campanha_cards add column if not exists plano_inicio text;
alter table eagler_campanha_cards add column if not exists plano_termino text;
alter table eagler_campanha_cards add column if not exists ticket_medio numeric;
alter table eagler_campanha_cards add column if not exists observacoes text;
alter table eagler_campanha_cards add column if not exists data_lead text;
alter table eagler_campanha_cards add column if not exists origem_lead text;
alter table eagler_campanha_cards add column if not exists etapa_atual text;
alter table eagler_campanha_cards add column if not exists etapa_maxima text;
alter table eagler_campanha_cards add column if not exists consultora_id text;
alter table eagler_campanha_cards add column if not exists treinador_id text;
alter table eagler_campanha_cards add column if not exists departamento text;
alter table eagler_campanha_cards add column if not exists lideranca_id text;
alter table eagler_campanha_cards add column if not exists lideranca_tipo text;
alter table eagler_campanha_cards add column if not exists cadencia_atual int default 0;
alter table eagler_campanha_cards add column if not exists cadencia_total int default 5;
alter table eagler_campanha_cards add column if not exists status text default 'ativo';
alter table eagler_campanha_cards add column if not exists experiencia_id text;
alter table eagler_campanha_cards add column if not exists data_agendamento text;
alter table eagler_campanha_cards add column if not exists hora_agendamento text;
alter table eagler_campanha_cards add column if not exists proxima_acao_data text;
alter table eagler_campanha_cards add column if not exists qualificacao text;
alter table eagler_campanha_cards add column if not exists qualificacao_por text;
alter table eagler_campanha_cards add column if not exists qualificacao_em bigint;
alter table eagler_campanha_cards add column if not exists perfil_qualificacao text;
alter table eagler_campanha_cards add column if not exists programa_pilar text;
alter table eagler_campanha_cards add column if not exists compareceu boolean;
alter table eagler_campanha_cards add column if not exists compareceu_em bigint;
alter table eagler_campanha_cards add column if not exists tags jsonb default '{}';
alter table eagler_campanha_cards add column if not exists created_at bigint;
alter table eagler_campanha_cards add column if not exists updated_at bigint;

-- Tentativas de contato da cadência
create table if not exists eagler_campanha_interacoes (id text primary key default gen_random_uuid()::text);
alter table eagler_campanha_interacoes add column if not exists card_id text;
alter table eagler_campanha_interacoes add column if not exists data date;
alter table eagler_campanha_interacoes add column if not exists canal text;
alter table eagler_campanha_interacoes add column if not exists tentativa_numero int;
alter table eagler_campanha_interacoes add column if not exists resultado text;
alter table eagler_campanha_interacoes add column if not exists nota text;
alter table eagler_campanha_interacoes add column if not exists consultora_id text;
alter table eagler_campanha_interacoes add column if not exists treinador_id text;
alter table eagler_campanha_interacoes add column if not exists created_at bigint;

-- Motivos de perda
create table if not exists eagler_campanha_perdas (id text primary key default gen_random_uuid()::text);
alter table eagler_campanha_perdas add column if not exists campanha_id text;
alter table eagler_campanha_perdas add column if not exists card_id text;
alter table eagler_campanha_perdas add column if not exists academia_id text;
alter table eagler_campanha_perdas add column if not exists nome text;
alter table eagler_campanha_perdas add column if not exists telefone text;
alter table eagler_campanha_perdas add column if not exists motivo text;
alter table eagler_campanha_perdas add column if not exists nota text;
alter table eagler_campanha_perdas add column if not exists consultora_id text;
alter table eagler_campanha_perdas add column if not exists created_at bigint;

-- Vendas lançadas nas campanhas
create table if not exists eagler_vendas (id text primary key default gen_random_uuid()::text);
alter table eagler_vendas add column if not exists campanha_id text;
alter table eagler_vendas add column if not exists card_id text;
alter table eagler_vendas add column if not exists academia_id text;
alter table eagler_vendas add column if not exists consultora_id text;
alter table eagler_vendas add column if not exists lancado_por_id text;
alter table eagler_vendas add column if not exists data date;
alter table eagler_vendas add column if not exists nome_cliente text;
alter table eagler_vendas add column if not exists codigo_matricula text;
alter table eagler_vendas add column if not exists perfil_venda text;
alter table eagler_vendas add column if not exists valor numeric;
alter table eagler_vendas add column if not exists forma_pagamento text;
alter table eagler_vendas add column if not exists saldo_devedor numeric;
alter table eagler_vendas add column if not exists tipo_venda text;
alter table eagler_vendas add column if not exists conferido_lider boolean default false;
alter table eagler_vendas add column if not exists created_at bigint;

-- Agenda unificada
create table if not exists eagler_agenda_tarefas (id text primary key default gen_random_uuid()::text);
alter table eagler_agenda_tarefas add column if not exists academia_id text;
alter table eagler_agenda_tarefas add column if not exists campanha_card_id text;
alter table eagler_agenda_tarefas add column if not exists campanha_id text;
alter table eagler_agenda_tarefas add column if not exists experiencia_id text;
alter table eagler_agenda_tarefas add column if not exists categoria text;
alter table eagler_agenda_tarefas add column if not exists tipo text;
alter table eagler_agenda_tarefas add column if not exists titulo text;
alter table eagler_agenda_tarefas add column if not exists responsavel_id text;
alter table eagler_agenda_tarefas add column if not exists responsavel_nome text;
alter table eagler_agenda_tarefas add column if not exists papel text;
alter table eagler_agenda_tarefas add column if not exists data_prevista text;
alter table eagler_agenda_tarefas add column if not exists feita boolean default false;
alter table eagler_agenda_tarefas add column if not exists feita_em timestamptz;
alter table eagler_agenda_tarefas add column if not exists created_at bigint default (extract(epoch from now())*1000)::bigint;

-- Controle de Experiências
create table if not exists eagler_experiencias (id text primary key default gen_random_uuid()::text);
alter table eagler_experiencias add column if not exists academia_id text;
alter table eagler_experiencias add column if not exists nome_lead text;
alter table eagler_experiencias add column if not exists numero_cadastro text;
alter table eagler_experiencias add column if not exists contato text;
alter table eagler_experiencias add column if not exists data_inicio text;
alter table eagler_experiencias add column if not exists consultor_id text;
alter table eagler_experiencias add column if not exists consultor_responsavel text;
alter table eagler_experiencias add column if not exists perfil text;
alter table eagler_experiencias add column if not exists programa text;
alter table eagler_experiencias add column if not exists duracao_dias int;
alter table eagler_experiencias add column if not exists objetivo_especifico text;
alter table eagler_experiencias add column if not exists status text default 'agendada';
alter table eagler_experiencias add column if not exists campanha_card_id text;
alter table eagler_experiencias add column if not exists campanha_id text;
alter table eagler_experiencias add column if not exists treinador_id text;
alter table eagler_experiencias add column if not exists treinador_responsavel text;
alter table eagler_experiencias add column if not exists consultoria_treinador_id text;
alter table eagler_experiencias add column if not exists consultoria_treinador text;
alter table eagler_experiencias add column if not exists consultoria_realizada boolean default false;
alter table eagler_experiencias add column if not exists mapeamento_sintomas_feito boolean default false;
alter table eagler_experiencias add column if not exists checklist_dia1 jsonb default '{}';
alter table eagler_experiencias add column if not exists presencas jsonb default '[]';
alter table eagler_experiencias add column if not exists data_dia1 text;
alter table eagler_experiencias add column if not exists tarefa_feedback_d1 jsonb default '{}';
alter table eagler_experiencias add column if not exists tarefa_acompanhamento jsonb default '{}';
alter table eagler_experiencias add column if not exists tarefa_agendamento_final jsonb default '{}';
alter table eagler_experiencias add column if not exists tarefa_audio_cuidado jsonb default '{}';
alter table eagler_experiencias add column if not exists tarefa_audio_consultoria jsonb default '{}';
alter table eagler_experiencias add column if not exists tarefas_sexta jsonb default '[]';
alter table eagler_experiencias add column if not exists data_conversao text;
alter table eagler_experiencias add column if not exists motivo_perda text;
alter table eagler_experiencias add column if not exists mes_referencia text;
alter table eagler_experiencias add column if not exists data_agendada text;
alter table eagler_experiencias add column if not exists criado_em timestamptz default now();
alter table eagler_experiencias add column if not exists created_at bigint default (extract(epoch from now())*1000)::bigint;
alter table eagler_experiencias add column if not exists updated_at timestamptz;

-- Metas por período (perfil do consultor)
create table if not exists eagler_consultora_metas_periodo (id text primary key default gen_random_uuid()::text);
alter table eagler_consultora_metas_periodo add column if not exists academia_id text;
alter table eagler_consultora_metas_periodo add column if not exists consultora_id text;
alter table eagler_consultora_metas_periodo add column if not exists meta_tipo text;
alter table eagler_consultora_metas_periodo add column if not exists meta_valor numeric;
alter table eagler_consultora_metas_periodo add column if not exists periodo_inicio text;
alter table eagler_consultora_metas_periodo add column if not exists periodo_fim text;
alter table eagler_consultora_metas_periodo add column if not exists criado_em bigint;

-- KPIs mensais do consultor
create table if not exists eagler_consultor_kpis_mensais (consultora_id text not null, mes_referencia date not null, primary key (consultora_id, mes_referencia));
alter table eagler_consultor_kpis_mensais add column if not exists academia_id text;
alter table eagler_consultor_kpis_mensais add column if not exists observacao text;
alter table eagler_consultor_kpis_mensais add column if not exists updated_at bigint;

-- Dossiê do consultor (1 a 1, feedbacks)
create table if not exists eagler_consultor_registros (id text primary key default gen_random_uuid()::text);
alter table eagler_consultor_registros add column if not exists academia_id text;
alter table eagler_consultor_registros add column if not exists consultora_id text;
alter table eagler_consultor_registros add column if not exists tipo text;
alter table eagler_consultor_registros add column if not exists data text;
alter table eagler_consultor_registros add column if not exists descricao text;
alter table eagler_consultor_registros add column if not exists status text;
alter table eagler_consultor_registros add column if not exists trimestre text;
alter table eagler_consultor_registros add column if not exists criado_por text;
alter table eagler_consultor_registros add column if not exists criado_em bigint;

-- KPIs mensais do treinador
create table if not exists eagler_treinador_kpis_mensais (treinador_id text not null, mes_referencia date not null, primary key (treinador_id, mes_referencia));
alter table eagler_treinador_kpis_mensais add column if not exists academia_id text;
alter table eagler_treinador_kpis_mensais add column if not exists observacao text;
alter table eagler_treinador_kpis_mensais add column if not exists updated_at bigint;

-- Dossiê do treinador
create table if not exists eagler_treinador_registros (id text primary key default gen_random_uuid()::text);
alter table eagler_treinador_registros add column if not exists academia_id text;
alter table eagler_treinador_registros add column if not exists treinador_id text;
alter table eagler_treinador_registros add column if not exists tipo text;
alter table eagler_treinador_registros add column if not exists data text;
alter table eagler_treinador_registros add column if not exists descricao text;
alter table eagler_treinador_registros add column if not exists status text;
alter table eagler_treinador_registros add column if not exists trimestre text;
alter table eagler_treinador_registros add column if not exists criado_por text;
alter table eagler_treinador_registros add column if not exists criado_em bigint;

-- Central de Scripts v2 (beta)
create table if not exists eagler_scripts_metodologia (id text primary key default gen_random_uuid()::text);
alter table eagler_scripts_metodologia add column if not exists academia_id text;
alter table eagler_scripts_metodologia add column if not exists ordem int default 0;
alter table eagler_scripts_metodologia add column if not exists titulo text;
alter table eagler_scripts_metodologia add column if not exists conteudo text;

-- Central de Scripts v2 (beta)
create table if not exists eagler_scripts_atendimento (id text primary key default gen_random_uuid()::text);
alter table eagler_scripts_atendimento add column if not exists academia_id text;
alter table eagler_scripts_atendimento add column if not exists ordem int default 0;
alter table eagler_scripts_atendimento add column if not exists titulo text;
alter table eagler_scripts_atendimento add column if not exists conteudo text;

-- Central de Scripts v2 (beta)
create table if not exists eagler_scripts_objecoes (id text primary key default gen_random_uuid()::text);
alter table eagler_scripts_objecoes add column if not exists academia_id text;
alter table eagler_scripts_objecoes add column if not exists ordem int default 0;
alter table eagler_scripts_objecoes add column if not exists titulo text;
alter table eagler_scripts_objecoes add column if not exists synth boolean default false;
alter table eagler_scripts_objecoes add column if not exists meaning text;
alter table eagler_scripts_objecoes add column if not exists acolher text;
alter table eagler_scripts_objecoes add column if not exists qualificar text;
alter table eagler_scripts_objecoes add column if not exists unica_coisa text;
alter table eagler_scripts_objecoes add column if not exists incentivar text;

-- Central de Scripts v2 (beta)
create table if not exists eagler_scripts_cadencia (id text primary key default gen_random_uuid()::text);
alter table eagler_scripts_cadencia add column if not exists academia_id text;
alter table eagler_scripts_cadencia add column if not exists funil text;
alter table eagler_scripts_cadencia add column if not exists dia int;
alter table eagler_scripts_cadencia add column if not exists ordem int default 0;
alter table eagler_scripts_cadencia add column if not exists perfil text;
alter table eagler_scripts_cadencia add column if not exists titulo text;
alter table eagler_scripts_cadencia add column if not exists canal_objetivo text;
alter table eagler_scripts_cadencia add column if not exists gatilho text;
alter table eagler_scripts_cadencia add column if not exists texto_wpp text;
alter table eagler_scripts_cadencia add column if not exists texto_audio text;
alter table eagler_scripts_cadencia add column if not exists observacao_operacional text;

create unique index if not exists eagler_gestores_email_uidx on eagler_gestores (lower(email));
create index if not exists eagler_registros_acad_idx on eagler_registros (academia_id, data);
create index if not exists eagler_cards_camp_idx on eagler_campanha_cards (campanha_id);
create index if not exists eagler_interacoes_card_idx on eagler_campanha_interacoes (card_id);
create index if not exists eagler_experiencias_acad_idx on eagler_experiencias (academia_id);
create index if not exists eagler_agenda_acad_idx on eagler_agenda_tarefas (academia_id, data_prevista);

-- ============================================================
-- 2. Central de Leads (links de captação, indicação digital, convite, ranking, sorteio, artes, ocultar)
-- ============================================================
create table if not exists eagler_lead_campanhas (
  id uuid primary key default gen_random_uuid(),
  academia_id text,
  slug text unique not null,
  nome text not null,
  origem text default 'evento',
  titulo text, subtitulo text, info text, capa_url text, cor text,
  sorteio boolean default false,
  perguntas jsonb default '{"idade":true,"treina":true,"parado":true}'::jsonb,
  ativo boolean default true,
  created_at timestamptz default now()
);
create table if not exists eagler_leads (
  id uuid primary key default gen_random_uuid(),
  academia_id text,
  campanha_id uuid references eagler_lead_campanhas(id) on delete set null,
  campanha_slug text,
  nome text not null,
  whatsapp text, whatsapp_norm text, idade int, treina text, tempo_parado text,
  respostas jsonb default '{}'::jsonb,
  origem text default 'outro',
  utm_source text, utm_medium text, utm_campaign text, utm_content text,
  pagina text, consultora_id text,
  status text default 'novo',
  observacoes text,
  consentimento boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists eagler_leads_acad_idx on eagler_leads (academia_id, created_at desc);
create index if not exists eagler_leads_camp_idx on eagler_leads (campanha_id);
create index if not exists eagler_leads_wpp_idx on eagler_leads (whatsapp_norm);
-- indicação digital
alter table eagler_leads add column if not exists codigo text;
alter table eagler_leads add column if not exists indicado_por_codigo text;
alter table eagler_leads add column if not exists indicado_por_lead uuid;
alter table eagler_leads add column if not exists indicado_por_nome text;
create unique index if not exists eagler_leads_codigo_uidx on eagler_leads (codigo) where codigo is not null;
create index if not exists eagler_leads_indicador_idx on eagler_leads (indicado_por_codigo);
alter table eagler_lead_campanhas add column if not exists indicacao boolean default false;
alter table eagler_lead_campanhas add column if not exists codigo_sigla text;
alter table eagler_lead_campanhas add column if not exists indicacao_limite timestamptz;
alter table eagler_lead_campanhas add column if not exists presentes jsonb;
alter table eagler_lead_campanhas add column if not exists convite_img text;
alter table eagler_lead_campanhas add column if not exists evento_titulo text;
alter table eagler_lead_campanhas add column if not exists evento_texto text;
alter table eagler_lead_campanhas add column if not exists evento_mapa text;
alter table eagler_lead_campanhas add column if not exists evento_fim timestamptz;
alter table eagler_lead_campanhas add column if not exists oferta_ativa boolean default false;
alter table eagler_lead_campanhas add column if not exists oferta_titulo text;
alter table eagler_lead_campanhas add column if not exists oferta_texto text;
alter table eagler_lead_campanhas add column if not exists oferta_mensagem text;
alter table eagler_lead_campanhas add column if not exists whatsapp_academia text;
-- artes da campanha
alter table eagler_lead_campanhas add column if not exists capa_convidado text;
-- formulários, enriquecimento e envio para campanha
alter table eagler_leads add column if not exists cargo text;
alter table eagler_leads add column if not exists academia_nome text;
alter table eagler_leads add column if not exists cidade text;
alter table eagler_leads add column if not exists origem_primeira text;
alter table eagler_leads add column if not exists historico jsonb default '[]'::jsonb;
alter table eagler_leads add column if not exists card_id uuid;
alter table eagler_leads add column if not exists demo boolean default false;
alter table eagler_lead_campanhas add column if not exists publico text default 'aluno';
alter table eagler_lead_campanhas add column if not exists campos_extra jsonb default '[]'::jsonb;
-- ocultar leads (testes e repetidos saem da lista e do sorteio, sem apagar)
alter table eagler_leads add column if not exists oculto boolean default false;

-- Pasta pública de imagens das campanhas (Supabase Storage). Ela já existe no projeto
-- (é da matriz e de todas as academias): aqui só cria se faltar, sem mudar nada nela.
-- As artes da Eagler Gym ficam na subpasta com o id da academia.
do $$ begin
  if to_regclass('storage.buckets') is not null then
    insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
    values ('campanhas', 'campanhas', true, 2097152, array['image/jpeg','image/png','image/webp'])
    on conflict (id) do nothing;
    if not exists (select 1 from pg_policies where schemaname='storage' and tablename='objects' and policyname='campanhas_envio') then
      create policy campanhas_envio on storage.objects for insert to anon, authenticated with check (bucket_id = 'campanhas');
    end if;
  end if;
end $$;

-- ============================================================
-- 3. Hub de Pessoas (teste do candidato) e NPS do aluno
-- ============================================================
create table if not exists eagler_pessoas_testes (
  id uuid primary key default gen_random_uuid(),
  academia_id uuid,
  nome text not null,
  cargo text,
  sc jsonb,
  cons numeric,
  respostas jsonb,
  created_at timestamptz not null default now()
);
create index if not exists eagler_pessoas_testes_academia_idx on eagler_pessoas_testes (academia_id, created_at desc);
create table if not exists eagler_nps_respostas (
  id uuid primary key default gen_random_uuid(),
  academia_id uuid,
  tipo text,
  contexto text,
  nota int,
  aluno_nome text,
  created_at timestamptz not null default now()
);
create index if not exists eagler_nps_academia_idx on eagler_nps_respostas (academia_id, created_at desc);

-- ============================================================
-- 3b. Códigos de identificação em texto
--     O Hub cria treinadores, consultores, logins e registros com um código em texto.
--     Se alguma dessas tabelas foi criada com o código no formato uuid, o cadastro falha.
--     Aqui o formato passa para texto (os códigos que já existem continuam iguais).
-- ============================================================
do $$ declare t text; begin
  foreach t in array array['eagler_treinadores','eagler_consultoras','eagler_gestores','eagler_registros'] loop
    if exists (select 1 from information_schema.columns where table_schema='public' and table_name=t and column_name='id' and data_type='uuid') then
      begin
        execute format('alter table public.%I alter column id drop default', t);
        execute format('alter table public.%I alter column id type text using id::text', t);
        raise notice '% : código passou para texto', t;
      exception when others then
        raise notice '% : não foi possível ajustar o código (%)', t, sqlerrm;
      end;
    end if;
  end loop;
end $$;

-- ============================================================
-- 4. Acesso: mesmo padrão das demais tabelas da plataforma (login atual não usa Supabase Auth)
--    Vale só para as tabelas eagler_. O RLS da Retenção (outro projeto) não é tocado.
-- ============================================================
do $$ declare r record; begin
  for r in select tablename from pg_tables where schemaname='public' and tablename like 'eagler\_%' loop
    execute format('alter table public.%I disable row level security', r.tablename);
  end loop;
end $$;

-- ============================================================
-- 5. Conferência: a academia, os treinadores cadastrados e os logins
-- ============================================================
select 'academia' as item, nome as valor from eagler_academias where id::text = 'e4a91c26-5b7d-4e08-9f13-6c2d8a4b7e51'
union all
select 'treinadores cadastrados', count(*)::text from eagler_treinadores
union all
select 'logins (gestor, consultor, treinador)', count(*)::text from eagler_gestores
union all
select 'formato do código dos treinadores (deve ser text)', data_type from information_schema.columns
 where table_schema='public' and table_name='eagler_treinadores' and column_name='id';
