/* Modo demonstração (Eagler): dados de exemplo, nada vai para o banco real.
   Ativa com sessionStorage 'gefit_demo'='1'. Troca o fetch das chamadas REST do Supabase por um banco em memória. */
(function(){
'use strict';
var ON=false;try{ON=sessionStorage.getItem('gefit_demo')==='1'}catch(e){}
window.gefitDemoSair=function(){
  try{
    var b=sessionStorage.getItem('gefit_demo_backup');
    sessionStorage.removeItem('gefit_demo');sessionStorage.removeItem('gefit_demo_db');
    if(b)sessionStorage.setItem('qg90_sessao_roi',b);else sessionStorage.removeItem('qg90_sessao_roi');
    sessionStorage.removeItem('gefit_demo_backup');sessionStorage.removeItem('central_leads_sessao');
    Object.keys(localStorage).forEach(function(k){if(/^(ag_conf_|funil_card_|funil_ok_)/.test(k))localStorage.removeItem(k)});
  }catch(e){}
  location.href='index.html';
};
window.gefitDemoEntrar=function(){
  try{
    var atual=sessionStorage.getItem('qg90_sessao_roi');
    if(!sessionStorage.getItem('gefit_demo_backup'))sessionStorage.setItem('gefit_demo_backup',atual||'');
    sessionStorage.setItem('gefit_demo','1');sessionStorage.removeItem('gefit_demo_db');
    sessionStorage.setItem('qg90_sessao_roi',JSON.stringify(DEMO_SESSAO));
  }catch(e){}
  location.href='index.html';
};
var AC='e4a91c26-5b7d-4e08-9f13-6c2d8a4b7e51';
var DEMO_SESSAO={id:'demo-ana',nome:'Ana Modelo',email:'ana.modelo@exemplo.com',academia_id:AC,role:'consultor',consultora_id:'demo-c1',modulos_ativos:['campanhas','scripts','experiencias']};
window.GEFIT_DEMO_SESSAO=DEMO_SESSAO;
if(ON){ // se a sessão deixou de ser a da consultora de exemplo (ex.: clicou em Sair), desliga a demonstração
  try{var ss=JSON.parse(sessionStorage.getItem('qg90_sessao_roi')||'null');
    if(!ss||ss.id!=='demo-ana'){sessionStorage.removeItem('gefit_demo');sessionStorage.removeItem('gefit_demo_db');sessionStorage.removeItem('gefit_demo_backup');ON=false}}catch(e){}
}
if(!ON)return;

function iso(d){var z=function(n){return String(n).padStart(2,'0')};return d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate())}
function dia(n){var d=new Date();d.setDate(d.getDate()+n);return iso(d)}
var NOMES=['Marcos Silva','Joana Lima','Pedro Souza','Carla Dias','Rafael Nunes','Bia Costa','Lucas Pereira','Fernanda Alves','Tiago Rocha','Camila Duarte','Bruno Martins','Larissa Gomes','Diego Ramos','Patrícia Freitas','Gustavo Lopes','Aline Barros','Rodrigo Teles','Juliana Matos','Felipe Cardoso','Renata Moura','Thiago Brito','Vanessa Prado','Eduardo Lima','Mariana Pires','Caio Santana'];
function db0(){
  var agora=Date.now(),cards=[],ints=[];
  for(var i=0;i<75;i++){
    var c={id:'demo-k'+i,campanha_id:'demo-camp1',onda_id:null,perfil:'leads',nome:NOMES[i%NOMES.length]+(i>=NOMES.length?' '+(Math.floor(i/NOMES.length)+1):''),telefone:'9399'+String(1000000+i*137).slice(0,7),
      etapa_atual:'lista',etapa_maxima:'lista',status:'ativo',consultora_id:'demo-c1',cadencia_atual:0,cadencia_total:8,
      origem_lead:['Visita Pessoal','WhatsApp Tráfego Pago','Instagram/Facebook DM','Indicação (Feedback Aluno)'][i%4],data_lead:dia(-(i%9)),created_at:agora-i*3600000,updated_at:agora-i*60000};
    if(i<12){c.etapa_atual='tentativa1';c.etapa_maxima='tentativa1';c.cadencia_atual=1+(i%3);c.proxima_acao_data=i<5?dia(0):(i<8?dia(-1):dia(2));}
    if(i>=12&&i<16){c.etapa_atual='atendimento';c.cadencia_atual=2;c.proxima_acao_data=dia(1);}
    if(i===20){c.origem_lead='Reconexão · WhatsApp Orgânico';c.data_lead=dia(-70);c.proxima_acao_data=dia(0);c.etapa_atual='tentativa1';c.cadencia_atual=1;}
    cards.push(c);
  }
  function set(i,o){for(var k in o)cards[i][k]=o[k]}
  set(30,{etapa_atual:'exp_agendada',data_agendamento:dia(-1),hora_agendamento:'18:00',treinador_id:null,cadencia_atual:2});
  set(31,{etapa_atual:'exp_agendada',data_agendamento:dia(-1),hora_agendamento:'07:00',compareceu:false,compareceu_em:agora-3600000,treinador_id:'demo-t1',cadencia_atual:2});
  set(32,{etapa_atual:'agendada_matricula',data_agendamento:dia(-1),hora_agendamento:'10:30',compareceu:true,compareceu_em:agora-7200000,treinador_id:'demo-t1',cadencia_atual:3});
  set(33,{etapa_atual:'exp_agendada',data_agendamento:dia(0),hora_agendamento:'17:00',treinador_id:'demo-t2',cadencia_atual:2});
  set(34,{etapa_atual:'exp_agendada',data_agendamento:dia(0),hora_agendamento:'19:30',treinador_id:'demo-t1',cadencia_atual:2});
  set(35,{etapa_atual:'agendada_matricula',data_agendamento:dia(0),hora_agendamento:'09:00',cadencia_atual:3});
  for(var j=0;j<30;j++)ints.push({id:'demo-i'+j,card_id:'demo-k'+(j%12),data:dia(0),canal:'whatsapp',tentativa_numero:j<20?1:2,resultado:j<8?'contato_efetivo':(j<11?'ligacao':'mensagem'),created_at:agora-j*1000});
  var leads=[];
  for(var l=0;l<12;l++)leads.push({id:'demo-l'+l,academia_id:AC,nome:NOMES[(l+10)%NOMES.length],whatsapp:'(93) 99'+String(100+l*7)+'-'+String(2000+l*31),whatsapp_norm:'55939'+String(9100000+l*317),origem:['instagram','whatsapp','indicacao','site'][l%4],status:l<5?'novo':'contato',consultora_id:null,created_at:new Date(agora-l*5400000).toISOString(),oculto:false});
  return{
    eagler_academias:[{id:AC,nome:'EAGLER GYM',created_at:1}],
    eagler_gestores:[{id:'demo-ana',nome:'Ana Modelo',email:'ana.modelo@exemplo.com',academia_id:AC,role:'consultor',consultora_id:'demo-c1',treinador_id:null,modulos_ativos:['campanhas','scripts','experiencias'],ativo:true}],
    eagler_consultoras:[{id:'demo-c1',academia_id:AC,nome:'Ana Modelo',meta:20,meta_tipo:'planos',horas:8,funis:['f0'],ativo:true,created_at:1},{id:'demo-c2',academia_id:AC,nome:'Bruna Modelo',meta:20,meta_tipo:'planos',horas:8,funis:['f0'],ativo:true,created_at:2}],
    eagler_treinadores:[{id:'demo-t1',academia_id:AC,nome:'João Modelo',ativo:true,created_at:1},{id:'demo-t2',academia_id:AC,nome:'Marina Modelo',ativo:true,created_at:2}],
    eagler_campanhas:[{id:'demo-camp1',academia_id:AC,nome:'Leads de novembro',status:'ativa',perfis:['leads'],created_at:agora-8*86400000}],
    eagler_campanha_cards:cards,eagler_campanha_interacoes:ints,
    eagler_vendas:[{id:'demo-v1',academia_id:AC,consultora_id:'demo-c1',lancado_por_id:'demo-c1',data:dia(0),nome_cliente:'Helena Prado',perfil_venda:'novo',valor:'1188',plano_duracao:'anual',forma_pagamento:'cartao_credito',tipo_venda:'agendado',created_at:agora-5000000},{id:'demo-v2',academia_id:AC,consultora_id:'demo-c1',lancado_por_id:'demo-c1',data:dia(0),nome_cliente:'Otávio Ramos',perfil_venda:'renovacao',valor:'149.9',plano_duracao:'mensal',forma_pagamento:'pix',tipo_venda:'espontaneo',created_at:agora-2000000}],
    eagler_leads:leads,eagler_lead_campanhas:[],eagler_registros:[],eagler_agenda_tarefas:[],eagler_experiencias:[]
  };
}
var DB;
try{DB=JSON.parse(sessionStorage.getItem('gefit_demo_db')||'null')}catch(e){}
if(!DB)DB=db0();
function salvar(){try{sessionStorage.setItem('gefit_demo_db',JSON.stringify(DB))}catch(e){}}
function gid(){return 'demo-'+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function cmp(a,b){if(a==null)return b==null?0:-1;if(b==null)return 1;var na=Number(a),nb=Number(b);if(!isNaN(na)&&!isNaN(nb)&&String(a).trim()!==''&&String(b).trim()!=='')return na-nb;return String(a)<String(b)?-1:String(a)>String(b)?1:0}
function ok(row,k,v){
  var m=/^(eq|neq|gt|gte|lt|lte|in|is|like|ilike)\.(.*)$/.exec(v);if(!m)return true;
  var op=m[1],val=m[2],x=row[k];
  if(op==='in'){var arr=val.replace(/^\(|\)$/g,'').split(',').map(function(s){return s.replace(/^"|"$/g,'')});return arr.indexOf(String(x))>=0}
  if(op==='is'){return val==='null'?(x==null):(String(x)===val)}
  if(op==='eq'){if(val==='true'||val==='false')return String(!!x)===val&&x!=null;return String(x)===val}
  if(op==='neq'){if(val==='true'||val==='false')return String(!!x)!==val;return String(x)!==val}
  if(x==null)return false;
  var c=cmp(x,val);
  if(op==='gt')return c>0;if(op==='gte')return c>=0;if(op==='lt')return c<0;if(op==='lte')return c<=0;
  if(op==='like'||op==='ilike'){var re=new RegExp('^'+val.replace(/[.+?^${}()|[\]\\]/g,'\\$&').replace(/%/g,'.*')+'$','i');return re.test(String(x))}
  return true;
}
function filtra(rows,qs){
  var out=rows.slice(),ord=null,lim=null;
  qs.split('&').forEach(function(p){
    if(!p)return;var i=p.indexOf('=');var k=decodeURIComponent(p.slice(0,i)),v=decodeURIComponent(p.slice(i+1));
    if(k==='select'||k==='offset'||k==='or'||k==='and')return;
    if(k==='order'){ord=v;return}
    if(k==='limit'){lim=parseInt(v);return}
    out=out.filter(function(r){return ok(r,k,v)});
  });
  if(ord){var ps=ord.split(',').map(function(o){var q=o.split('.');return{c:q[0],d:q[1]==='desc'?-1:1}});out.sort(function(a,b){for(var i=0;i<ps.length;i++){var r=cmp(a[ps[i].c],b[ps[i].c])*ps[i].d;if(r)return r}return 0})}
  if(lim)out=out.slice(0,lim);
  return out;
}
function resp(body,status){return new Response(JSON.stringify(body),{status:status||200,headers:{'Content-Type':'application/json'}})}
var orig=window.fetch.bind(window);
window.fetch=function(url,opt){
  try{
    var u=String(typeof url==='string'?url:(url&&url.url)||'');
    var m=/supabase\.co\/rest\/v1\/([a-zA-Z0-9_]+)\??(.*)$/.exec(u);
    if(m&&u.indexOf('irwvagffrguiljaxrzmd')>=0){
      var t=m[1],qs=m[2]||'',met=((opt&&opt.method)||'GET').toUpperCase();
      DB[t]=DB[t]||[];
      if(met==='GET'||met==='HEAD')return Promise.resolve(resp(filtra(DB[t],qs)));
      var body={};try{body=JSON.parse((opt&&opt.body)||'{}')}catch(e){}
      if(met==='POST'){
        var arr=Array.isArray(body)?body:[body],saida=[];
        arr.forEach(function(r){r=Object.assign({},r);if(!r.id)r.id=gid();
          var ix=DB[t].findIndex(function(x){return x.id===r.id});
          if(ix>=0)DB[t][ix]=Object.assign(DB[t][ix],r);else DB[t].push(r);saida.push(r)});
        salvar();return Promise.resolve(resp(saida,201));
      }
      if(met==='PATCH'){
        var alvo=filtra(DB[t],qs),r2=[];
        alvo.forEach(function(x){Object.assign(x,body);r2.push(x)});salvar();return Promise.resolve(resp(r2,200));
      }
      if(met==='DELETE'){
        var del=filtra(DB[t],qs);DB[t]=DB[t].filter(function(x){return del.indexOf(x)<0});salvar();return Promise.resolve(resp([],200));
      }
      return Promise.resolve(resp([]));
    }
  }catch(e){console.error('demo',e)}
  return orig(url,opt);
};
document.addEventListener('DOMContentLoaded',function(){
  var b=document.createElement('div');
  b.style.cssText='position:fixed;top:0;left:0;right:0;z-index:99999;background:#B3261E;color:#fff;font:700 13px Barlow,Arial,sans-serif;padding:6px 12px;display:flex;gap:12px;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.4)';
  b.innerHTML='🎬 MODO DEMONSTRAÇÃO · consultora Ana Modelo · dados de exemplo, nada é salvo de verdade <button type="button" onclick="gefitDemoSair()" style="background:#fff;color:#B3261E;border:none;border-radius:6px;padding:3px 10px;font-weight:800;cursor:pointer">Sair da demonstração</button>';
  document.body.appendChild(b);document.body.style.paddingTop='34px';
  var st=document.createElement('style');st.textContent='.topbar{top:34px!important}.tabs{top:88px!important}';document.head.appendChild(st);
});
})();
