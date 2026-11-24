/* Projeto de marketing · Eagler Gym (piloto, só na Eagler)
   Cronograma visual, mínimo e recomendado, alertas e roteiros preenchidos.
   Regras no código, sem IA. Dados em eagler_marketing_projeto (academia_id, dados, updated_at). */
(function(){
'use strict';
const ROTEIROS=[{"id": "institucional", "titulo": "Institucional da Eagler Gym", "resumo": "Grave na vertical e escolha um vídeo em cada cartão. Gancho e CTA têm duas alternativas.", "tomadas": [{"id": "gancho-a", "titulo": "Gancho A", "instrucao": "De frente para a câmera, salão de musculação ao fundo, celular na altura dos olhos, 3 a 4 segundos. Tom de pergunta, olhando para a lente.", "fala": "Você já entrou numa academia sem saber por onde começar?", "meta": {"funcao": "gancho", "posicao": 1, "variacao": "a"}, "img": false}, {"id": "gancho-b", "titulo": "Gancho B", "instrucao": "Mesmo enquadramento do Gancho A. Tom de quem conta um segredo, sem pressa, 3 a 4 segundos.", "fala": "Treinar sem saber o que você sente é treinar no escuro.", "meta": {"funcao": "gancho", "posicao": 1, "variacao": "b"}, "img": false}, {"id": "tomada-1", "titulo": "Tomada 1 · Contexto", "instrucao": "Caminhando pelo salão, câmera na altura do peito, movimento lento. Mostre aparelhos e pessoas treinando, só com quem autorizou. 6 a 8 segundos.", "fala": "Aqui na Eagler Gym, em {cidade}, a gente cuida de quem quer treinar de verdade.", "meta": {"funcao": "tomada-01", "posicao": 2}, "img": true}, {"id": "tomada-2", "titulo": "Tomada 2 · Diferencial", "instrucao": "De frente, em plano médio, com a recepção ou o salão ao fundo. Fale com calma, como numa conversa. 8 a 10 segundos.", "fala": "Antes de treinar, a gente conversa sobre o que você sente e o que você quer. Com isso, o seu treino sai pensado para você. {etapas}", "meta": {"funcao": "tomada-02", "posicao": 3}, "img": false}, {"id": "tomada-3", "titulo": "Tomada 3 · Exemplo no salão", "instrucao": "Celular na mão de outra pessoa, cena real: o treinador ao lado do aluno, corrigindo o movimento ou ajustando a carga. Peça autorização do aluno. 8 a 10 segundos.", "fala": "Olha como é no salão: o treinador está do lado, corrige o movimento e ajusta o treino com você.", "meta": {"funcao": "tomada-03", "posicao": 4}, "img": true}, {"id": "tomada-4", "titulo": "Tomada 4 · Ambiente (sem fala)", "instrucao": "Câmera traseira, vertical, sem fala. Grave quatro imagens curtas: fachada, recepção, salão e um detalhe (barra, anilhas ou piso). 5 a 7 segundos cada, em um único arquivo ou em arquivos separados.", "fala": "", "meta": {"funcao": "tomada-04", "posicao": 5}, "img": false}, {"id": "tomada-5", "titulo": "Tomada 5 · Convite", "instrucao": "De frente, sorrindo, no mesmo local da Tomada 2. Só use esta tomada depois que o Ronald confirmar a oferta e a validade. 6 a 8 segundos.", "fala": "{oferta}", "meta": {"funcao": "tomada-05", "posicao": 6}, "img": false}, {"id": "cta-a", "titulo": "CTA A · WhatsApp", "instrucao": "De frente, olhando para a lente, fechamento firme e simpático. 4 a 6 segundos.", "fala": "Quer conhecer? Chama a gente no WhatsApp e agenda a sua visita. {wpp}", "meta": {"funcao": "cta", "posicao": 7, "variacao": "a"}, "img": false}, {"id": "cta-b", "titulo": "CTA B · Experiência", "instrucao": "Mesmo enquadramento do CTA A. 4 a 6 segundos.", "fala": "Marca a sua Experiência na Eagler Gym. O link está no nosso perfil. {link}", "meta": {"funcao": "cta", "posicao": 7, "variacao": "b"}, "img": false}]}, {"id": "primeiro-treino", "titulo": "Primeiro treino na Eagler Gym", "resumo": "Reel de acolhimento para quem tem vergonha ou não sabe começar. Grave na vertical, um vídeo por cartão.", "tomadas": [{"id": "gancho-a", "titulo": "Gancho A", "instrucao": "De frente, salão ao fundo, 3 a 4 segundos, tom de quem entende o medo.", "fala": "Vergonha de treinar pela primeira vez? Todo mundo já passou por isso.", "meta": {"funcao": "gancho", "posicao": 1, "variacao": "a"}, "img": false}, {"id": "gancho-b", "titulo": "Gancho B", "instrucao": "Mesmo enquadramento, 3 a 4 segundos, tom direto.", "fala": "Você não precisa começar no chute.", "meta": {"funcao": "gancho", "posicao": 1, "variacao": "b"}, "img": false}, {"id": "tomada-1", "titulo": "Tomada 1 · Chegada", "instrucao": "Câmera na entrada ou recepção, alguém recebendo uma pessoa que chega (com autorização). 6 a 8 segundos.", "fala": "Quando você chega, tem alguém para te receber e te mostrar o espaço.", "meta": {"funcao": "tomada-01", "posicao": 2}, "img": true}, {"id": "tomada-2", "titulo": "Tomada 2 · Conversa inicial", "instrucao": "Plano médio, treinador conversando com o aluno, só com autorização. 8 a 10 segundos.", "fala": "Antes do primeiro treino, a gente conversa sobre o seu objetivo e o que você sente. {etapas}", "meta": {"funcao": "tomada-02", "posicao": 3}, "img": true}, {"id": "tomada-3", "titulo": "Tomada 3 · Primeiro exercício", "instrucao": "Cena real do treinador ensinando o movimento ao lado do aluno. 8 a 10 segundos.", "fala": "Você aprende o movimento com o treinador do lado, no seu ritmo.", "meta": {"funcao": "tomada-03", "posicao": 4}, "img": true}, {"id": "tomada-4", "titulo": "Tomada 4 · Ambiente (sem fala)", "instrucao": "Câmera traseira, vertical, sem fala. Salão, aparelhos e detalhes. 5 a 7 segundos cada.", "fala": "", "meta": {"funcao": "tomada-04", "posicao": 5}, "img": false}, {"id": "cta-a", "titulo": "CTA A · WhatsApp", "instrucao": "De frente, olhando para a lente. 4 a 6 segundos.", "fala": "Quer dar o primeiro passo? Chama a gente no WhatsApp. {wpp}", "meta": {"funcao": "cta", "posicao": 6, "variacao": "a"}, "img": false}, {"id": "cta-b", "titulo": "CTA B · Visita", "instrucao": "Mesmo enquadramento. 4 a 6 segundos.", "fala": "Vem conhecer a Eagler Gym. O link para agendar está no nosso perfil. {link}", "meta": {"funcao": "cta", "posicao": 6, "variacao": "b"}, "img": false}]}];
const TIERS={
  minimo:{nome:'Mínimo para começar',reels:2,estaticos:1,stories:3,anuncios:2,storiesTxt:'3 por dia, 1 por turno'},
  ideal:{nome:'Recomendado',reels:3,estaticos:2,stories:6,anuncios:3,storiesTxt:'6 a 8 por dia'}
};
const DIAS=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
const TURNOS=[['manha','Manhã'],['tarde','Tarde'],['noite','Noite']];
const POOL={
  manha:{recepcao:['Bom dia da recepção: horário do dia e o que acontece hoje','Quem está na recepção hoje e o que ele resolve','Aviso rápido do dia (horário, aula, mudança)'],
         tecnica:['Dica do treinador em 15 segundos: um cuidado no exercício','Aquecimento do dia: um movimento e para que serve','Pergunta do dia sobre treino, com resposta na caixinha']},
  tarde:{recepcao:['Bastidor: movimento da academia, sem expor aluno sem autorização','Quem chegou para a Experiência ou para a avaliação (com autorização)','Mostre uma aula ou modalidade acontecendo'],
         tecnica:['Treino do dia: um exercício, como fazer e o erro mais comum','Treinador ajustando um movimento (com autorização do aluno)','Um aparelho e para quem ele serve']},
  noite:{recepcao:['Horário de amanhã e quem atende','Convite para a avaliação ou a Experiência, com o destino do contato','Lembrete: o que está aberto no fim de semana'],
         tecnica:['Resumo do dia da equipe técnica: o que foi treinado hoje','Enquete: qual treino você quer ver amanhã','Conquista da semana de um aluno (só com autorização)']}
};
const PILARES_REEL=[
  {t:'Primeira vez sem vergonha',p:'Quem recebe, quem orienta e como é o primeiro treino.',r:'primeiro-treino'},
  {t:'Consultoria e acompanhamento',p:'Como a equipe entende o que você sente antes de montar o treino.',r:'institucional'},
  {t:'Prova no salão',p:'Treinador ao lado do aluno, corrigindo o movimento, com autorização.'},
  {t:'Constância',p:'Perdeu um dia? Como voltar sem culpa e sem começar do zero.'}
];
const PILARES_EST=[
  {t:'Objeções do iniciante',p:'Carrossel: vergonha, começar no chute, não sei por onde ir.'},
  {t:'Horários e modalidades',p:'Estático com horários atualizados e uma chamada clara.'},
  {t:'Prova e depoimento',p:'Estático ou carrossel com relato autorizado.'},
  {t:'Data ou aviso importante',p:'Só quando houver. Avisos operacionais ficam melhor nos Stories.'}
];
const FIELD_LBL={cidade:'cidade',bairro:'bairro',cta:'destino do contato (WhatsApp ou link)',quem_fala:'quem fala nos vídeos',imagem_autorizada:'autorização de imagem',reels_capacidade:'quantos Reels por semana a equipe grava',modalidades:'modalidades ativas com horários',consultoria_etapas:'nome e etapas da consultoria',objetivo:'objetivo do período',publico:'público prioritário'};

let dados=null, editando=false, aberto=false, carregou=false, tabelaOk=true, diaSel=null;

const $=id=>document.getElementById(id);
const esc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const acad=()=>(typeof sessao!=='undefined'&&sessao&&sessao.academia_id)||(typeof acId!=='undefined'?acId:null);
function vazio(v){return v==null||v===''||(Array.isArray(v)&&!v.length)}
function iso(d){const z=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate())}
function parse(s){if(!s)return null;const p=String(s).split('-');if(p.length<3)return null;const d=new Date(+p[0],+p[1]-1,+p[2]);return isNaN(d)?null:d}
function addDias(d,n){const x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()+n);return x}
function dm(d){return String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')}
function proxSegunda(){const h=new Date();const d=new Date(h.getFullYear(),h.getMonth(),h.getDate());const k=(d.getDay()+6)%7;return addDias(d,k===0?0:7-k)}
function segundaDe(d){const k=(d.getDay()+6)%7;return addDias(d,-k)}
function brl(n){return 'R$ '+Number(n).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}
function novoDados(){return{versao:1,campos:{nivel:'minimo',modalidades:[]},status:{}}}
function C(){return (dados&&dados.campos)||{}}

/* ---------- permissão ---------- */
function podeEditar(){
  try{
    const q=new URLSearchParams(location.search).get('consultoria');
    if(q==='1')localStorage.setItem('gefit_consultoria','1');
    if(q==='0')localStorage.removeItem('gefit_consultoria');
    if(typeof sessao==='undefined'||!sessao)return false;
    if(sessao.role==='admin')return true;
    return localStorage.getItem('gefit_consultoria')==='1'&&sessao.role==='gestor';
  }catch(e){return false}
}

/* ---------- regras ---------- */
function tier(c){return TIERS[c.nivel==='ideal'?'ideal':'minimo']}
function modAtivas(c){return (c.modalidades||[]).filter(m=>m&&m.nome&&m.ativa!==false)}
function pilaresReel(c){
  const extra=modAtivas(c).filter(m=>!/muscula/i.test(m.nome)).map(m=>({t:'Modalidade: '+m.nome,p:'Uma cena da aula e para quem ela serve, com o horário.'}));
  const base=PILARES_REEL.slice();
  // intercala as modalidades depois dos três primeiros pilares
  return base.slice(0,3).concat(extra,base.slice(3));
}
function gerarPlano(c){
  const t=tier(c);
  const inicio=parse(c.inicio)?segundaDe(parse(c.inicio)):proxSegunda();
  const reelDias=t.reels>=3?[0,2,4]:[1,3];
  const estDias=t.estaticos>=2?[1,5]:[5];
  const pr=pilaresReel(c), pe=PILARES_EST;
  let ri=0,ei=0;
  const semanas=[];
  for(let w=0;w<4;w++){
    const dias=[];
    for(let d=0;d<7;d++){
      const data=addDias(inicio,w*7+d);
      const cel={w,d,data,reel:null,est:null,stories:t.stories};
      if(reelDias.includes(d)){cel.reel=pr[ri%pr.length];ri++}
      if(estDias.includes(d)){cel.est=pe[ei%pe.length];ei++}
      dias.push(cel);
    }
    semanas.push(dias);
  }
  return{inicio,semanas,t};
}
function storiesDoDia(c,d,w){
  const t=tier(c),out=[];
  const idx=(d+w)%3;
  TURNOS.forEach(([k,nome],i)=>{
    if(t.stories<6){
      const resp=((d+i)%2===0)?'recepcao':'tecnica';
      out.push({turno:nome,turnoK:k,resp,pauta:POOL[k][resp][idx]});
    }else{
      out.push({turno:nome,turnoK:k,resp:'recepcao',pauta:POOL[k].recepcao[idx]});
      out.push({turno:nome,turnoK:k,resp:'tecnica',pauta:POOL[k].tecnica[idx]});
    }
  });
  if(t.stories>6){
    out.push({turno:'Tarde',turnoK:'tarde',resp:'extra',pauta:'Interação: caixinha de perguntas ou enquete'});
    if(t.stories>7)out.push({turno:'Noite',turnoK:'noite',resp:'extra',pauta:'Interação: resposta da caixinha ou resultado da enquete'});
  }
  return out;
}
function temCta(c){return !vazio(c.cta_whatsapp)||!vazio(c.cta_link)}
function faltas(c){
  const f=[];
  if(vazio(c.cidade))f.push('cidade');
  if(vazio(c.bairro))f.push('bairro');
  if(!temCta(c))f.push('cta');
  if(vazio(c.quem_fala))f.push('quem_fala');
  if(vazio(c.imagem_autorizada)||c.imagem_autorizada==='nao')f.push('imagem_autorizada');
  if(vazio(c.reels_capacidade))f.push('reels_capacidade');
  const ma=modAtivas(c);
  if(!ma.length||ma.some(m=>vazio(m.horarios)))f.push('modalidades');
  if(vazio(c.consultoria_etapas))f.push('consultoria_etapas');
  if(vazio(c.objetivo))f.push('objetivo');
  if(vazio(c.publico))f.push('publico');
  return f;
}
function completude(c){const tot=Object.keys(FIELD_LBL).length;return{ok:tot-faltas(c).length,tot}}
function alertas(c){
  const a=[];const t=tier(c);
  faltas(c).forEach(k=>a.push({tipo:'falta',txt:'Falta confirmar: '+FIELD_LBL[k]+'.'}));
  modAtivas(c).forEach(m=>{if(vazio(m.horarios))a.push({tipo:'aviso',txt:'A modalidade '+m.nome+' está sem horário.'})});
  if(!vazio(c.oferta)&&vazio(c.oferta_validade))a.push({tipo:'aviso',txt:'A oferta está sem validade. Sem validade, ela entra só como convite institucional.'});
  if(!vazio(c.reels_capacidade)&&Number(c.reels_capacidade)<TIERS.minimo.reels)a.push({tipo:'aviso',txt:'A capacidade informada ('+c.reels_capacidade+' Reel por semana) está abaixo do mínimo recomendado de '+TIERS.minimo.reels+'. O plano mostra o que dá para sustentar.'});
  if(!vazio(c.reels_capacidade)&&Number(c.reels_capacidade)<t.reels&&Number(c.reels_capacidade)>=TIERS.minimo.reels)a.push({tipo:'aviso',txt:'O plano escolhido pede '+t.reels+' Reels por semana e a capacidade informada é '+c.reels_capacidade+'.'});
  return a;
}
function preencher(txt,c){
  const m={cidade:c.cidade,etapas:c.consultoria_etapas,oferta:c.oferta,wpp:c.cta_whatsapp,link:c.cta_link};
  const falta=[];
  const out=String(txt||'').replace(/\{(\w+)\}/g,(x,k)=>{if(vazio(m[k])){falta.push(k);return '[FALTA: '+({cidade:'cidade',etapas:'etapas da consultoria',oferta:'oferta',wpp:'WhatsApp',link:'link'}[k]||k)+']'}return m[k]});
  return{txt:out.replace(/\s+\[FALTA: etapas da consultoria\]/,''),falta};
}
function roteirosPreenchidos(c){
  return ROTEIROS.map(r=>({id:r.id,titulo:r.titulo,resumo:r.resumo,tomadas:r.tomadas.map(t=>{
    const p=preencher(t.fala,c);
    const falta=p.falta.slice();
    if(t.img&&c.imagem_autorizada!=='sim')falta.push('imagem');
    return{...t,fala:p.txt,falta,pronto:falta.length===0};
  })}));
}
function pacoteEstudio(c){
  return roteirosPreenchidos(c).map(r=>({id:r.id,titulo:r.titulo,resumo:r.resumo,tomadas:r.tomadas.map(t=>[t.id,t.titulo,t.instrucao,t.fala,null,t.meta])}));
}

/* ---------- dados ---------- */
async function carregar(){
  try{
    const rows=await sbGet('eagler_marketing_projeto','academia_id=eq.'+encodeURIComponent(acad()));
    dados=(rows&&rows[0]&&rows[0].dados&&rows[0].dados.campos)?rows[0].dados:novoDados();
    dados.status=dados.status||{};dados.campos=dados.campos||{};
    dados._upd=rows&&rows[0]&&rows[0].updated_at;
    tabelaOk=true;
  }catch(e){console.error('projeto marketing:',e);tabelaOk=false;dados=dados||novoDados()}
  carregou=true;
}
async function gravar(msg){
  try{
    const d=JSON.parse(JSON.stringify(dados));delete d._upd;
    const ts=Date.now();
    await sbUpsert('eagler_marketing_projeto',{academia_id:acad(),dados:d,updated_at:ts});
    dados._upd=ts;
    if(msg)toast(msg);
    return true;
  }catch(e){console.error(e);toast('Não consegui salvar. Confira se o SQL eagler-marketing-projeto.sql foi rodado no Supabase.',true);return false}
}

/* ---------- visual ---------- */
function css(){
  if($('mkp-css'))return;
  const s=document.createElement('style');s.id='mkp-css';
  s.textContent=`
  #mkp-root{display:none}
  #mkp-root h3{font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;margin:26px 0 10px;color:var(--tx)}
  #mkp-root h3 small{font-family:inherit;font-weight:500;text-transform:none;letter-spacing:0;font-size:12px;color:var(--td);margin-left:8px}
  .mkp-top{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:6px}
  .mkp-top .t{font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;color:var(--or);text-transform:uppercase;letter-spacing:1px}
  .mkp-sp{flex:1}
  .mkp-sug{background:var(--s1);border:1px solid var(--bdo);border-left:4px solid var(--or);border-radius:12px;padding:14px 16px;font-size:13.5px;line-height:1.55}
  .mkp-sug b{color:var(--or-t)}
  .mkp-tiers{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:12px}
  .mkp-tier{background:var(--s1);border:1px solid var(--bd);border-radius:12px;padding:14px}
  .mkp-tier.on{border-color:var(--or);box-shadow:0 0 0 2px var(--or-d)}
  .mkp-tier h4{font-family:'Barlow Condensed',sans-serif;font-size:16px;text-transform:uppercase;letter-spacing:.6px;margin:0 0 8px}
  .mkp-tier .on-tag{font-size:10.5px;font-weight:700;background:var(--or);color:#fff;border-radius:20px;padding:2px 8px;margin-left:6px;vertical-align:middle}
  .mkp-tier ul{list-style:none;margin:0;padding:0;font-size:13px}
  .mkp-tier li{display:flex;justify-content:space-between;gap:8px;padding:5px 0;border-bottom:1px dashed var(--bd)}
  .mkp-tier li span:last-child{font-weight:700}
  .mkp-al{display:flex;flex-direction:column;gap:6px}
  .mkp-al div{font-size:13px;padding:8px 12px;border-radius:9px;background:var(--s2)}
  .mkp-al div.falta{border-left:3px solid var(--or)}
  .mkp-al div.aviso{border-left:3px solid #C98A00;background:#FFF7E0}
  .mkp-ok{font-size:13px;color:#1F7A3A}
  .mkp-bar{height:8px;border-radius:6px;background:var(--s3);overflow:hidden;margin:6px 0 2px;max-width:320px}
  .mkp-bar i{display:block;height:100%;background:var(--or)}
  .mkp-wrap{overflow-x:auto;padding-bottom:6px}
  .mkp-cal{display:grid;grid-template-columns:70px repeat(7,minmax(112px,1fr));gap:6px;min-width:860px}
  .mkp-h{font-size:11px;font-weight:700;text-transform:uppercase;color:var(--td);text-align:center;padding:4px 0}
  .mkp-sem{display:flex;flex-direction:column;justify-content:center;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:800;color:var(--td);text-transform:uppercase}
  .mkp-sem small{font-family:'Barlow',sans-serif;font-weight:500;text-transform:none;font-size:11px}
  .mkp-c{background:var(--s1);border:1px solid var(--bd);border-radius:10px;padding:6px;min-height:92px;display:flex;flex-direction:column;gap:4px;cursor:pointer;text-align:left}
  .mkp-c:hover{border-color:var(--bdo)}
  .mkp-c.hoje{box-shadow:0 0 0 2px var(--or)}
  .mkp-c.sel{background:var(--or-d);border-color:var(--or)}
  .mkp-c .dt{font-size:11px;color:var(--td);font-weight:600}
  .mkp-chip{font-size:11px;font-weight:700;border-radius:6px;padding:3px 6px;line-height:1.25;display:flex;gap:4px;align-items:flex-start}
  .mkp-chip.reel{background:var(--or);color:#fff}
  .mkp-chip.est{background:#111;color:#fff}
  .mkp-chip.st{background:var(--s2);color:var(--tx)}
  .mkp-chip.done{opacity:.55;text-decoration:line-through}
  .mkp-leg{display:flex;gap:12px;flex-wrap:wrap;font-size:12px;color:var(--td);margin:8px 0}
  .mkp-leg i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:5px;vertical-align:-1px}
  .mkp-dia{background:var(--s1);border:1px solid var(--bdo);border-radius:12px;padding:14px;margin-top:10px}
  .mkp-dia h4{margin:0 0 8px;font-size:15px}
  .mkp-ln{display:grid;grid-template-columns:78px 112px 1fr auto;gap:10px;align-items:center;padding:7px 0;border-bottom:1px dashed var(--bd);font-size:13px}
  .mkp-ln:last-child{border-bottom:0}
  .mkp-pill{font-size:10.5px;font-weight:700;border-radius:20px;padding:2px 9px;text-align:center}
  .mkp-pill.recepcao{background:#FDE4E2;color:var(--or-t)}
  .mkp-pill.tecnica{background:#E3E8F3;color:#27406E}
  .mkp-pill.extra{background:var(--s3);color:var(--tx)}
  .mkp-rot{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
  .mkp-rot>div{background:var(--s1);border:1px solid var(--bd);border-radius:12px;padding:12px}
  .mkp-rot h5{margin:0 0 6px;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;font-size:14px;letter-spacing:.6px}
  .mkp-rot p{font-size:12.5px;margin:0 0 6px;line-height:1.4}
  .mkp-ads{display:grid;grid-template-columns:120px repeat(28,minmax(14px,1fr));gap:2px;min-width:720px;font-size:11px}
  .mkp-ads .n{font-weight:700;padding:3px 0}
  .mkp-ads .b{height:18px;background:var(--s2);border-radius:2px}
  .mkp-ads .b.on{background:#F4B8B4}
  .mkp-ads .b.mk{background:var(--or)}
  .mkp-ads .d{font-size:10px;text-align:center;color:var(--td)}
  .mkp-marcos{display:flex;gap:8px 18px;flex-wrap:wrap;font-size:12.5px;margin-top:8px}
  .mkp-card{background:var(--s1);border:1px solid var(--bd);border-radius:12px;padding:12px 14px;margin-bottom:10px}
  .mkp-card .h{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px;font-weight:700;font-size:13.5px}
  .mkp-tm{border-top:1px dashed var(--bd);padding:8px 0;font-size:12.5px}
  .mkp-tm b{font-size:12.5px}
  .mkp-tm .f{background:var(--s2);border-radius:8px;padding:6px 8px;margin-top:4px;font-size:13px}
  .mkp-tm .ins{color:var(--td);margin-top:4px}
  .mkp-st{font-size:11px;font-weight:700;border-radius:20px;padding:2px 8px}
  .mkp-st.pronto{background:#DDF3E3;color:#1F7A3A}
  .mkp-st.falta{background:#FDE4E2;color:var(--or-t)}
  .mkp-dl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 18px;font-size:13px}
  .mkp-dl div{padding:5px 0;border-bottom:1px dashed var(--bd)}
  .mkp-dl span{display:block;font-size:11px;color:var(--td);text-transform:uppercase;font-weight:600}
  .mkp-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 14px}
  .mkp-form label{font-size:12px;font-weight:600;display:block}
  .mkp-form .fi{width:100%;margin-top:3px}
  .mkp-form .full{grid-column:1/-1}
  .mkp-mod{display:grid;grid-template-columns:1fr 2fr auto auto;gap:6px;align-items:center;margin-bottom:6px}
  .mkp-nota{font-size:12px;color:var(--td);line-height:1.5;margin-top:6px}
  @media(max-width:760px){.mkp-tiers,.mkp-rot,.mkp-form,.mkp-dl{grid-template-columns:1fr}.mkp-ln{grid-template-columns:70px 1fr}.mkp-mod{grid-template-columns:1fr 1fr}}
  `;
  document.head.appendChild(s);
}
function chipsDia(cel,c){
  const st=(dados.status||{});
  const k=cel.w+'-'+cel.d;
  let h='';
  if(cel.reel)h+='<div class="mkp-chip reel'+(st['reel-'+k]?' done':'')+'">🎬 Reel · '+esc(cel.reel.t)+'</div>';
  if(cel.est)h+='<div class="mkp-chip est'+(st['est-'+k]?' done':'')+'">🖼️ Post · '+esc(cel.est.t)+'</div>';
  const ns=Object.keys(st).filter(x=>x.indexOf('st-'+k+'-')===0&&st[x]).length;
  h+='<div class="mkp-chip st">📱 '+cel.stories+' Stories'+(ns?' · '+ns+' feitos':'')+'</div>';
  return h;
}
function htmlSugestao(c){
  const cap=c.reels_capacidade;
  const t=tier(c);
  let txt='Para a Eagler aparecer com constância, a sugestão é começar com <b>'+TIERS.minimo.reels+' Reels por semana</b>, <b>'+TIERS.minimo.anuncios+' criativos de anúncio</b> e <b>'+TIERS.minimo.stories+' Stories por dia</b> (um por turno, alternando recepção e equipe técnica). O objetivo é chegar em <b>'+TIERS.ideal.reels+' Reels</b>, <b>'+TIERS.ideal.storiesTxt+' Stories</b> e <b>'+TIERS.ideal.anuncios+' criativos</b>.';
  txt+=' Os 2 criativos de anúncio nascem dos Reels aprovados, então não exigem gravação extra.';
  if(!vazio(cap))txt+=' Capacidade informada: <b>'+esc(cap)+' Reel(s) por semana</b>.';
  return '<div class="mkp-sug">'+txt+'</div>'+
  '<div class="mkp-tiers">'+['minimo','ideal'].map(k=>{const x=TIERS[k];const on=t===x;
    return '<div class="mkp-tier'+(on?' on':'')+'"><h4>'+x.nome+(on?'<span class="on-tag">plano em uso</span>':'')+'</h4><ul>'+
    '<li><span>Reels orgânicos</span><span>'+x.reels+' por semana</span></li>'+
    '<li><span>Carrossel ou estático</span><span>'+x.estaticos+' por semana</span></li>'+
    '<li><span>Stories</span><span>'+x.storiesTxt+'</span></li>'+
    '<li><span>Criativos de anúncio rodando</span><span>'+x.anuncios+'</span></li></ul></div>'}).join('')+'</div>';
}
function htmlAlertas(c){
  const a=alertas(c),cp=completude(c);
  const pct=Math.round(cp.ok/cp.tot*100);
  let h='<div style="font-size:13px"><b>'+cp.ok+' de '+cp.tot+'</b> informações confirmadas</div><div class="mkp-bar"><i style="width:'+pct+'%"></i></div>';
  if(!a.length)return h+'<div class="mkp-ok">Tudo confirmado para este plano.</div>';
  return h+'<div class="mkp-al" style="margin-top:8px">'+a.map(x=>'<div class="'+x.tipo+'">'+esc(x.txt)+'</div>').join('')+'</div>';
}
function htmlCalendario(c,pl){
  const hoje=iso(new Date());
  let h='<div class="mkp-leg"><span><i style="background:var(--or)"></i>Reel</span><span><i style="background:#111"></i>Carrossel ou estático</span><span><i style="background:var(--s3)"></i>Stories (clique no dia para ver os turnos)</span></div>';
  h+='<div class="mkp-wrap"><div class="mkp-cal"><div></div>'+DIAS.map(d=>'<div class="mkp-h">'+d+'</div>').join('');
  pl.semanas.forEach((sem,w)=>{
    h+='<div class="mkp-sem">Semana '+(w+1)+'<small>'+dm(sem[0].data)+' a '+dm(sem[6].data)+'</small></div>';
    sem.forEach(cel=>{
      const k=w+'-'+cel.d;
      h+='<div class="mkp-c'+(iso(cel.data)===hoje?' hoje':'')+(diaSel===k?' sel':'')+'" role="button" tabindex="0" onclick="mkpDia('+w+','+cel.d+')" onkeydown="if(event.key===\'Enter\')mkpDia('+w+','+cel.d+')"><span class="dt">'+dm(cel.data)+'</span>'+chipsDia(cel,c)+'</div>';
    });
  });
  h+='</div></div>';
  if(diaSel){
    const p=diaSel.split('-').map(Number),cel=pl.semanas[p[0]][p[1]];
    h+=htmlDia(c,cel);
  }
  return h;
}
function htmlDia(c,cel){
  const st=dados.status||{},k=cel.w+'-'+cel.d;
  let h='<div class="mkp-dia"><h4>'+DIAS[cel.d]+', '+dm(cel.data)+'</h4>';
  if(cel.reel)h+='<div class="mkp-ln"><span class="mkp-pill recepcao" style="background:var(--or);color:#fff">Reel</span><span>'+esc(cel.reel.t)+'</span><span>'+esc(cel.reel.p)+'</span><label><input type="checkbox" '+(st['reel-'+k]?'checked':'')+' onchange="mkpMarcar(\'reel-'+k+'\',this.checked)"> feito</label></div>';
  if(cel.est)h+='<div class="mkp-ln"><span class="mkp-pill" style="background:#111;color:#fff">Post</span><span>'+esc(cel.est.t)+'</span><span>'+esc(cel.est.p)+'</span><label><input type="checkbox" '+(st['est-'+k]?'checked':'')+' onchange="mkpMarcar(\'est-'+k+'\',this.checked)"> feito</label></div>';
  storiesDoDia(c,cel.d,cel.w).forEach((s,i)=>{
    const key='st-'+k+'-'+i;
    h+='<div class="mkp-ln"><span><b>'+s.turno+'</b></span><span class="mkp-pill '+s.resp+'">'+({recepcao:'Recepção',tecnica:'Equipe técnica',extra:'Interação'}[s.resp])+'</span><span>'+esc(s.pauta)+'</span><label><input type="checkbox" '+(st[key]?'checked':'')+' onchange="mkpMarcar(\''+key+'\',this.checked)"> feito</label></div>';
  });
  return h+'</div>';
}
function htmlRotina(c){
  const t=tier(c);
  const cols=TURNOS.map(([k,n])=>{
    const r=POOL[k].recepcao[0],te=POOL[k].tecnica[0];
    let h='<div><h5>'+n+'</h5><p><span class="mkp-pill recepcao">Recepção</span><br>'+esc(r)+'</p>';
    if(t.stories>=6||k!=='tarde')h+='<p><span class="mkp-pill tecnica">Equipe técnica</span><br>'+esc(te)+'</p>';
    return h+'</div>';
  });
  return '<div class="mkp-rot">'+cols.join('')+'</div><div class="mkp-nota">'+(t.stories<6?'Começando com 3 Stories por dia: um por turno, alternando entre recepção e equipe técnica a cada dia. ':'')+'Meta recomendada: 6 a 8 por dia, com um Story da recepção e um da equipe técnica em cada turno, mais uma enquete ou caixinha. As pautas variam ao longo das semanas.</div>';
}
function htmlAnuncios(c,pl){
  const t=pl.t;
  const ini=parse(c.inicio_anuncios)||addDias(pl.inicio,7);
  const off=Math.round((new Date(ini.getFullYear(),ini.getMonth(),ini.getDate())-new Date(pl.inicio.getFullYear(),pl.inicio.getMonth(),pl.inicio.getDate()))/86400000);
  const marcos=[[1,'Colocar no ar e conferir o destino'],[3,'Conferir entrega e primeiras conversas'],[10,'Revisar (dias 10 a 12)'],[15,'Decidir a primeira troca, se os dados justificarem'],[30,'Fechar a rodada por criativo']];
  let h='<div class="mkp-wrap"><div class="mkp-ads"><div></div>';
  for(let i=0;i<28;i++)h+='<div class="d">'+(i%7===0?'S'+(i/7+1):'')+'</div>';
  const nomes=['Criativo A','Criativo B','Criativo C'];
  for(let a=0;a<t.anuncios;a++){
    h+='<div class="n">'+nomes[a]+(a===2?' (variação)':'')+'</div>';
    for(let i=0;i<28;i++){
      const dia=i-off+1; // dia do anúncio
      const mk=dia>=1&&marcos.some(m=>m[0]===dia);
      h+='<div class="b'+(dia>=1?' on':'')+(mk?' mk':'')+'" title="'+(dia>=1?'Dia '+dia+' no ar':'Antes do início')+'"></div>';
    }
  }
  h+='</div></div>';
  h+='<div class="mkp-marcos">'+marcos.map(m=>'<span><b>Dia '+m[0]+':</b> '+m[1]+'</span>').join('')+'</div>';
  h+='<div class="mkp-nota">Início previsto dos anúncios: '+dm(ini)+' (uma semana depois do começo do plano, para haver Reels aprovados). Os dois primeiros criativos são conceitos diferentes e o terceiro é uma variação de abertura. Se a entrega for pequena, o teste é registrado como inconclusivo. Os 28 dias mostrados são o primeiro mês do plano.</div>';
  const cr=Number(c.custo_referencia),cv=Number(c.conversas_desejadas);
  if(cr>0&&cv>0){
    const v=cr*cv;
    h+='<div class="mkp-sug" style="margin-top:12px"><b>Investimento mínimo sugerido: '+brl(v)+' no mês</b> ('+brl(v/t.anuncios)+' por criativo), calculado como '+cv+' conversas desejadas vezes '+brl(cr)+' de custo de referência. É uma estimativa para dimensionar, não uma meta nem uma garantia de resultado.</div>';
  }else{
    h+='<div class="mkp-sug" style="margin-top:12px">Para calcular o investimento mínimo, defina o <b>custo de referência por conversa</b> e as <b>conversas desejadas no mês</b>. A Eagler ainda não tem histórico de anúncios, então esse valor é definido pela consultoria.</div>';
  }
  return h;
}
function htmlRoteiros(c){
  const ro=roteirosPreenchidos(c);
  let h='';
  ro.forEach(r=>{
    const pr=r.tomadas.filter(t=>t.pronto).length;
    h+='<div class="mkp-card"><div class="h">🎬 '+esc(r.titulo)+'<span class="mkp-st '+(pr===r.tomadas.length?'pronto':'falta')+'">'+pr+' de '+r.tomadas.length+' cartões prontos</span></div><div style="font-size:12.5px;color:var(--td)">'+esc(r.resumo)+'</div>';
    r.tomadas.forEach(t=>{
      h+='<div class="mkp-tm"><b>'+esc(t.titulo)+'</b> <span class="mkp-st '+(t.pronto?'pronto':'falta')+'">'+(t.pronto?'pronto para gravar':'falta: '+t.falta.map(x=>({wpp:'WhatsApp',link:'link',oferta:'oferta',cidade:'cidade',etapas:'etapas da consultoria',imagem:'autorização de imagem'}[x]||x)).join(', '))+'</span>'+
      (t.fala?'<div class="f">“'+esc(t.fala)+'”</div>':'<div class="f" style="color:var(--td)">Sem fala. Só imagem.</div>')+
      '<div class="ins">'+esc(t.instrucao)+'</div></div>';
    });
    h+='</div>';
  });
  return h;
}
const GRUPOS=[
  ['Local e contato',[['cidade','Cidade'],['bairro','Bairro'],['cta_whatsapp','WhatsApp para o CTA'],['cta_link','Link para o CTA (perfil, agenda)']]],
  ['Equipe e produção',[['quem_fala','Quem fala nos vídeos'],['imagem_autorizada','Autorização de imagem','sel',[['','Selecione'],['sim','Autorizada'],['andamento','Em andamento'],['nao','Não autorizada']]],['reels_capacidade','Reels por semana que a equipe grava','num'],['sessoes_semana','Sessões de gravação por semana','num'],['nivel','Plano em uso','sel',[['minimo','Mínimo para começar'],['ideal','Recomendado']]]]],
  ['Negócio',[['consultoria_etapas','Nome e etapas da consultoria','area'],['oferta','Oferta (Experiência ou outra)'],['oferta_validade','Validade da oferta'],['objetivo','Objetivo do período','area'],['publico','Público prioritário','area']]],
  ['Anúncios',[['custo_referencia','Custo de referência por conversa (R$)','num'],['conversas_desejadas','Conversas desejadas no mês','num'],['inicio','Início do plano (segunda-feira)','date'],['inicio_anuncios','Início dos anúncios','date']]]
];
function htmlDados(c){
  let h='';
  if(!editando){
    GRUPOS.forEach(g=>{
      h+='<div class="mkp-card"><div class="h">'+g[0]+'</div><div class="mkp-dl">'+g[1].map(f=>{let v=c[f[0]];if(f[2]==='sel'){const o=(f[3]||[]).find(x=>x[0]===v);v=o?o[1]:''}return '<div><span>'+f[1]+'</span>'+(vazio(v)?'<i style="color:var(--td)">A confirmar</i>':esc(v))+'</div>'}).join('')+'</div></div>';
    });
    const ma=c.modalidades||[];
    h+='<div class="mkp-card"><div class="h">Modalidades e horários</div>'+(ma.length?'<div class="mkp-dl">'+ma.map(m=>'<div><span>'+esc(m.nome)+(m.ativa===false?' (inativa)':'')+'</span>'+(vazio(m.horarios)?'<i style="color:var(--td)">Horário a confirmar</i>':esc(m.horarios))+'</div>').join('')+'</div>':'<i style="color:var(--td)">A confirmar</i>')+'</div>';
    return h;
  }
  h+='<div class="mkp-form">';
  GRUPOS.forEach(g=>{
    h+='<div class="full" style="font-weight:800;margin-top:8px">'+g[0]+'</div>';
    g[1].forEach(f=>{
      const k=f[0],v=c[k]==null?'':c[k],t=f[2];
      let inp;
      if(t==='area')inp='<textarea class="fi" id="mkp-f-'+k+'" rows="3">'+esc(v)+'</textarea>';
      else if(t==='sel')inp='<select class="fi" id="mkp-f-'+k+'">'+f[3].map(o=>'<option value="'+o[0]+'"'+(String(v)===o[0]?' selected':'')+'>'+o[1]+'</option>').join('')+'</select>';
      else inp='<input class="fi" id="mkp-f-'+k+'" type="'+(t==='num'?'number':t==='date'?'date':'text')+'" value="'+esc(v)+'">';
      h+='<div'+(t==='area'?' class="full"':'')+'><label>'+f[1]+inp+'</label></div>';
    });
  });
  h+='<div class="full" style="font-weight:800;margin-top:8px">Modalidades e horários</div><div class="full" id="mkp-mods">'+(c.modalidades||[]).map((m,i)=>modLinha(m,i)).join('')+'</div><div class="full"><button class="btn-gh btn-sm" type="button" onclick="mkpAddMod()">+ Modalidade</button></div></div>';
  h+='<div class="mkp-acoes" style="display:flex;gap:8px;margin-top:14px"><button class="btn-or" type="button" onclick="mkpSalvar()">Salvar</button><button class="btn-gh" type="button" onclick="mkpEditar(false)">Cancelar</button></div>';
  return h;
}
function modLinha(m,i){
  return '<div class="mkp-mod"><input class="fi" placeholder="Modalidade" value="'+esc(m.nome)+'" data-mk="nome"><input class="fi" placeholder="Horários (ex.: seg a sex, 18h e 19h)" value="'+esc(m.horarios||'')+'" data-mk="horarios"><label style="font-size:12px"><input type="checkbox" data-mk="ativa" '+(m.ativa===false?'':'checked')+'> ativa</label><button class="btn-gh btn-sm" type="button" onclick="this.parentNode.remove()">×</button></div>';
}
function render(){
  const root=$('mkp-root');if(!root)return;
  css();
  if(!carregou){root.innerHTML='<div class="mkp-nota">Carregando…</div>';return}
  const c=C(),pl=gerarPlano(c);
  const pode=podeEditar();
  let h='<div class="mkp-top"><button class="btn-gh btn-sm" type="button" onclick="mkpFechar()">← Marketing</button><div class="t">Projeto de marketing</div><div class="mkp-sp"></div>';
  if(pode&&!editando)h+='<button class="btn-or btn-sm" type="button" onclick="mkpEditar(true)">✏️ Editar (consultoria)</button>';
  h+='</div><div style="font-size:12px;color:var(--td)">Plano de 4 semanas da Eagler Gym, a partir de '+dm(pl.inicio)+'.'+(dados._upd?' Atualizado em '+new Date(dados._upd).toLocaleDateString('pt-BR')+'.':'')+'</div>';
  if(!tabelaOk)h+='<div class="mkp-al" style="margin-top:10px"><div class="aviso">Para salvar e carregar este projeto, rode o SQL <code>eagler-marketing-projeto.sql</code> no Supabase das plataformas. Enquanto isso o plano mostra os valores de partida.</div></div>';
  if(editando){h+='<h3>Dados do projeto</h3>'+htmlDados(c);root.innerHTML=h;return}
  h+='<h3>Nossa sugestão</h3>'+htmlSugestao(c);
  h+='<h3>O que falta confirmar</h3>'+htmlAlertas(c);
  h+='<h3>Cronograma<small>4 semanas</small></h3>'+htmlCalendario(c,pl);
  h+='<h3>Rotina de Stories<small>recepção e equipe técnica</small></h3>'+htmlRotina(c);
  h+='<h3>Anúncios<small>criativos rodando</small></h3>'+htmlAnuncios(c,pl);
  h+='<h3>Roteiros para gravar</h3>'+htmlRoteiros(c);
  if(pode)h+='<div class="mkp-acoes" style="display:flex;gap:8px;margin:6px 0 4px;flex-wrap:wrap"><button class="btn-gh btn-sm" type="button" onclick="mkpCopiar()">📋 Copiar pacote para o Estúdio</button><button class="btn-gh btn-sm" type="button" onclick="mkpBaixar()">⬇️ Baixar JSON</button></div><div class="mkp-nota">O pacote vai no formato do campo roteiros do Estúdio. O Codex cadastra no pedido. O Hub não grava nada no Estúdio.</div>';
  h+='<h3>Dados do projeto</h3>'+htmlDados(c);
  root.innerHTML=h;
}

/* ---------- ações ---------- */
window.mkpAbrir=async function(){
  aberto=true;css();
  const g=document.querySelector('#pan-marketing .at-grid'),h=$('mkp-head'),n=$('mkp-nota');
  if(g)g.style.display='none';if(h)h.style.display='none';if(n)n.style.display='none';
  const r=$('mkp-root');if(r){r.style.display='block';r.innerHTML='<div class="mkp-nota">Carregando…</div>'}
  await carregar();render();
  window.scrollTo(0,0);
};
window.mkpFechar=function(){
  aberto=false;editando=false;
  const g=document.querySelector('#pan-marketing .at-grid'),h=$('mkp-head'),r=$('mkp-root'),n=$('mkp-nota');
  if(g)g.style.display='';if(h)h.style.display='';if(n)n.style.display='';if(r)r.style.display='none';
};
window.mkpEditar=function(v){editando=!!v;render();window.scrollTo(0,0)};
window.mkpDia=function(w,d){const k=w+'-'+d;diaSel=(diaSel===k)?null:k;render()};
window.mkpMarcar=async function(key,v){dados.status=dados.status||{};if(v)dados.status[key]=true;else delete dados.status[key];render();await gravar()};
window.mkpAddMod=function(){const b=$('mkp-mods');if(b)b.insertAdjacentHTML('beforeend',modLinha({nome:'',horarios:'',ativa:true}))};
window.mkpSalvar=async function(){
  const c=dados.campos||{};
  GRUPOS.forEach(g=>g[1].forEach(f=>{const el=$('mkp-f-'+f[0]);if(!el)return;let v=el.value;if(f[2]==='num')v=v===''?'':Number(v);if(v===''||v==null)delete c[f[0]];else c[f[0]]=v}));
  c.modalidades=[...document.querySelectorAll('#mkp-mods .mkp-mod')].map(r=>({nome:r.querySelector('[data-mk=nome]').value.trim(),horarios:r.querySelector('[data-mk=horarios]').value.trim(),ativa:r.querySelector('[data-mk=ativa]').checked})).filter(m=>m.nome);
  dados.campos=c;
  if(await gravar('Projeto salvo.')){editando=false;render();window.scrollTo(0,0)}
};
window.mkpCopiar=async function(){
  const txt=JSON.stringify(pacoteEstudio(C()),null,1);
  try{await navigator.clipboard.writeText(txt);toast('Pacote copiado.')}catch(e){toast('Não consegui copiar. Use Baixar JSON.',true)}
};
window.mkpBaixar=function(){
  const b=new Blob([JSON.stringify(pacoteEstudio(C()),null,1)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='roteiros-eagler-preenchidos.json';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);
};
window.MKP={gerarPlano,alertas,faltas,roteirosPreenchidos,tier,TIERS,storiesDoDia,pacoteEstudio};
})();
