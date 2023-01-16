var listEmail = document.querySelector('#listemail')
var btnUtil = document.querySelector('#util i')
btnUtil.addEventListener('click', function (e) {
  listEmail.classList.toggle('exibe');
  if (e.target.classList.contains('fa-envelope')) {
    e.target.classList.replace('fa-envelope', 'fa-x')
  } else {
    e.target.classList.replace('fa-x', 'fa-envelope')
  }
});

document.querySelector('#take').innerHTML = '\n  <p class="c2"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 185.50px; height: 66.00px;"></span>\n  </p>\n  <p class="c2 c5"><span class="c1"></span></p>\n  <p class="c2"><span>Oi </span><span class="c7">Name</span><span class="c1">,</span></p>\n  <p class="c2 c5"><span class="c1"></span></p>\n  <p class="c2"><span>Muito obrigado por agendar uma consultoria com o Time de Soluções Técnicas do\n      Google. O seu Representante do Google solicitou esta chamada em seu nome e te auxiliaremos no caso </span><span class="c7">CaseID</span><span>&nbsp;para o website </span><span class="c7">URL</span><span class="c1">.</span></p>\n  <p class="c2 c5"><span class="c1"></span></p>\n  <p class="c2"><span>O agente do time de Soluções Técnicas irá entrar em contato na\n      data/horário agendado: </span><span class="c7">diahorário</span><span>.</span><span class="c1">&nbsp;</span></p>\n  <p class="c2 c5"><span class="c1"></span></p>\n  <p class="c2"><span>Link da meet : </span><span class="c7 c17">link</span></p>\n  <p class="c2 c5"><span class="c1"></span></p>\n  <p class="c2"><span class="c1">Por favor, verifique a sua caixa de entrada e acesse o convite no seu\n      calendário. Siga as instruções específicas nele e confirme a sua\n      participação. Para se preparar para a nossa chamada, por favor, revise a lista de tarefas vinculada\n      aqui e complete as solicitações.</span></p>\n  <p class="c2 c5"><span class="c1"></span></p>\n  <p class="c2"><span class="c1">Se tiver qualquer dúvida antes da chamada ou se quiser adicionar outros\n      participantes à reunião, basta nos informar respondendo a esta mensagem ou entrando em contato com o\n      Representante do Google. Estamos animados para trabalhar com você!</span></p>\n  <p class="c2 c5"><span class="c1"></span></p>\n  <p class="c2"><span class="c1">Muito obrigado!</span></p>\n  <p class="c9 c5"><span class="c1"></span></p><a id="t.598952710c513bd0cee0023cd5d55940bf30c6e3"></a><a id="t.0"></a>\n  <table class="c12">\n    <tbody><tr >\n      <td class="c20" colspan="1" rowspan="1">\n        <p class="c0"><span class="c6"></span></p><a id="t.2cec73c2da0e6fc27ebc8ac01a7cd0a081910018"></a><a id="t.1"></a>\n        \n        <p class="c0"><span class="c6"></span></p>\n        <p class="c16"><span class="c10 c13">Não remova o código de referência para que possamos\n            responder mais rapidamente. Obrigado.</span></p>\n        <p class="c0"><span class="c6"></span></p>\n      </td>\n    </tr>\n  </tbody></table>\n  <p class="c16"><span class="c7 c10">Termos</span><span class="c10 c13">: ao responder a esta mensagem, você\n      autoriza o especialista em implementação do Google a fornecer orientações quanto\n      à instalação do Offline Conversion Tracking no seu site e/ou campanha e/ou conta do Google\n      Analytics, conforme necessário. Você confirma e reconhece que todas as alterações\n      sugeridas e/ou implementadas pelo Google devem ser realizadas por sua conta e risco. O Google não garante\n      nem promete resultados decorrentes da implementação dessas alterações. Além\n      disso, o Google não será responsável por eventuais efeitos dessas mudanças, o que\n      inclui, sem limitação, qualquer aumento nos gastos relacionados às campanhas do Google Ads,\n      pelos quais você terá total responsabilidade. Você também concorda em validar se o site\n      continua funcionando conforme o esperado.</span></p>\n  <p class="c0"><span class="c10 c13"></span></p>\n  <p class="c9"><span class="c10 c7">Observação</span><span class="c10 c18">: recomendamos que você\n      faça o backup completo do seu site antes de realizar alterações. Além disso,\n      você NÃO deve compartilhar as credenciais do site comigo ou com outras pessoas do Google. Por fim,\n      fazer alterações no seu website / conta enquanto trabalhamos na solicitação pode\n      causar a perda de algumas alterações / configurações. Aconselhamos que você\n      não faça alterações no seu site / conta até a conclusão das\n      implementações recomendadas.</span></p>\n  <p class="c5 c23"><span class="c14"></span></p>\n  <p class="c2 c5"><span class="c1"></span></p>\n\n\n'


new ClipboardJS('.copybtn');


function abreCopiaEmail(id) {
  document.querySelector('#' + id).style.display = 'block'
  btnUtil.classList.replace('fa-x', 'fa-envelope')
  listEmail.classList.toggle('exibe');
  //debugger
  setTimeout(() => {
    document.querySelector('#' + id).style.display = 'none'
  }, 1)
}


