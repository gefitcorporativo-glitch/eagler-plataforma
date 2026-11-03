# Briefing: biblioteca de scripts das academias (formato do Oliver) · começar pela Eagler

**Para:** sessão do Claude Code na nuvem · **De:** conversa NR | RG CAVE (03/11/2026) · **Dono:** Nelson Rabelo (GeFit)

## Objetivo
Levar para as academias o mesmo formato da biblioteca de scripts que existe no **GeFit | Painel Gestão** (scripts do Oliver), com scripts **de academia falando com aluno/lead**. Organizar os scripts que já existem e criar opções novas. **Urgente hoje: Eagler Gym.** Depois: Academia Modelo (matriz), RG Cave e, mais tarde, Power Fit.

## Regras de trabalho (obrigatórias)
1. **Antes de alterar ou publicar, mostre o plano e espere a confirmação do Nelson.** Ao terminar, mostre o que mudou (prints) e só publique com o "pode publicar".
2. Português do Brasil, tom de conversa de WhatsApp, frases curtas, **sem travessões**, sem promessas exageradas.
3. Metodologia **AQÚI** em todo toque: Acolher/Atenção, Qualificar, Única coisa (um pedido por mensagem), Incentivar. Nunca perguntar "quer que eu te mande os planos?"; sempre propor horário/próximo passo. Na GeFit, "aula experimental" não existe: o nome é **Experiência** (jornada de 5 a 12 dias), com presente de boas-vindas (mapeamento, consultoria, avaliação).
4. **Não mexer na RG Cave** (`gefitcorporativo-glitch/rgcave-plataforma`) sem pedido: está em uso real.
5. Eagler **não tem piscina**: nada de natação/hidro nas variações dela. O menu lateral da Eagler **não tem** a aba "Ferramentas & Scripts" (foi retirada a pedido); não recolocar.

## Onde está cada coisa
| Item | Onde |
|---|---|
| Eagler (este repositório) | `gefitcorporativo-glitch/eagler-plataforma`, site `https://gefitcorporativo-glitch.github.io/eagler-plataforma/`. Tabelas com prefixo `eagler_`. Academia `e4a91c26-5b7d-4e08-9f13-6c2d8a4b7e51`. Cores: vermelho `#D91E18`, texto destaque `#A80F0A`, menus `#111`, fundo `#F8F6F6` |
| Matriz (referência do formato) | `gefitcorporativo-glitch/plataforma` (público). Clone para ler: `git clone --depth 1 https://github.com/gefitcorporativo-glitch/plataforma` |
| Biblioteca do Oliver | `plataforma/ferramentas-gefit.js` (≈390 linhas, ~50 toques) |
| Como ela abre na matriz | `plataforma/index.html` (div `#ft-gefit` dentro da aba Ferramentas & Scripts; `<script src="ferramentas-gefit.js">` no fim) e `plataforma/campanhas.html` (função `abrirBibliotecaGefit()` ≈ linha 2745: botão **Scripts** abre a biblioteca por cima do Kanban; `SCRIPT_CADENCIA_GEFIT` ≈ linha 2218 e `scriptsDoPerfil()` ≈ linha 2361 trocam a cadência do card quando o espaço é o da GeFit) |
| Scripts de academia que já existem (fonte do conteúdo) | Eagler: `central-scripts-aqui.html` (Central de Scripts AQÚI: boas-vindas, cadências, objeções etc.), `index.html` aba Ferramentas & Scripts (painel `pan-ferramentas`, seções `ftTab('bv')`, `ftTab('cad')`…, ainda existe no código, só saiu do menu), `campanhas.html` constante `SCRIPT_CADENCIA` (leads 9 toques, rematrícula 4, renovação 4, sucesso do cliente) |
| Banco | Supabase `irwvagffrguiljaxrzmd` (o mesmo da Cave e da matriz). Nada de banco é necessário para a biblioteca: os scripts ficam no arquivo `.js`, como na GeFit |

## Formato a copiar (estrutura do `ferramentas-gefit.js`)
- `MODELOS`: variações por modelo de negócio (na academia, trocar por **perfil do lead/aluno**, ex.: geral, sedentário/iniciante, já treina em outra academia, emagrecimento, ex-aluno, pais de aluno em lutas…; sem natação na Eagler).
- `CANAIS`: texto de WhatsApp, áudio, ligação, DM Instagram, vídeo + texto, presencial.
- `FUNIS` → `etapas`.
- `S` (lista de toques): `{f: funil, e: etapa, dia: 'D0', canal, obj: objetivo, texto, var: {perfil: texto}, aqui: {a,q,u,i}, op: orientação}`. Opção 1 / opção 2 = dois toques na mesma etapa e dia com objetivos diferentes (ex.: texto e áudio).
- Interface: abas (Scripts por funil, Objeções, Rotina, Perfis), filtros por funil, etapa, canal e perfil, busca, botão copiar. Placeholders: `[Nome]` / `{PNOME}`.

## Funis para as academias (escopo aprovado pelo Nelson)
1. **Leads novos (aquisição):** 1º contato, qualificação, direcionar para ligação, convite para a Experiência, encerramento. Cadência de **10 a 15 dias com 8 a 10 contatos**; descanso de 30 dias depois.
2. **Desconectados / sem resposta:** mensagens 1, 2, 3… de retomada (5 a 7 dias, 4 a 7 contatos). As duas últimas são especiais: a penúltima avisa que o contato vai diminuir; a última é uma despedida real com a porta aberta.
3. **Experiência → Matrícula:** confirmação, durante a Experiência, pós-Experiência, fechamento e objeções (conversão: 7 a 10 dias, 5 a 8 contatos).
4. **Renovação:** D-15 a D-2 (mensalista só nos últimos 5 dias antes do vencimento; planos maiores com mais antecedência), proposta de upgrade para anual.
5. **Ex-alunos / rematrícula (reativação):** 4 a 7 dias, 3 a 5 contatos; descanso de 60 dias.
6. **Sucesso do cliente (relacionamento):** check-ins contínuos, indicação.
Mais as **objeções** (preço, tempo, "vou pensar", "vou ver com marido/esposa", "outra academia mais barata"…) com respostas no padrão AQÚI e a técnica de empilhar 3 nãos.

## Onde a biblioteca deve aparecer na Eagler
- No **Kanban de Campanhas**: botão **Scripts** que abre a biblioteca por cima do quadro (como na matriz), e a cadência do card (Tentativa X de Y) usando os toques novos do funil correspondente.
- No **Hub**: o botão do topo "📚 Central de Scripts" passa a abrir a biblioteca nova (ou um botão novo ao lado). Propor ao Nelson antes.
- Arquivo sugerido: `ferramentas-academia.js` genérico (texto da academia por variável: nome, presente de boas-vindas), para depois servir à matriz, à Cave e à Power Fit só trocando nome e cores.

## Passo a passo sugerido
1. Ler este briefing, `plataforma/ferramentas-gefit.js` e as fontes de conteúdo da Eagler.
2. Mostrar ao Nelson: lista de funis, etapas e quantidade de toques por funil, perfis de variação e onde vai aparecer. **Esperar confirmação.**
3. Construir `ferramentas-academia.js` + ligação no `campanhas.html` e no `index.html` da Eagler.
4. Testar no navegador (Playwright com o Supabase simulado) e mostrar prints.
5. Publicar só com aprovação. Depois: levar para a matriz (Academia Modelo) e registrar em `ROADMAP-modulos.md` (Registro de sincronização) na matriz.
