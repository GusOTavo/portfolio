let botaoTopo = document.getElementById("botao-topo");

window.onscroll = function() {analisaPosicao()};

function analisaPosicao() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
}

function deVoltaAoTopo() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

