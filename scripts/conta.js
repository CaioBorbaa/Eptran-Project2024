 function abrirAbaEdicaoPerfil() {
  console.log("abrirAbaEdicaoPerfil");
  document.getElementById("fundo-editar-perfil-fechar").style.display = "block";
  document.getElementById("edicao-de-perfil").style.height = "96vh";
}

function fecharAbaEdicaoPerfil() {
  console.log("fecharAbaEdicaoPerfil");
  document.getElementById("fundo-editar-perfil-fechar").style.display = "none";
  document.getElementById("edicao-de-perfil").style.height = "0";
}

function abrirAbaEdicaoFoto() {
  console.log("abrirAbaEdicaoFoto");
  document.getElementById("fundo-editar-foto-de-perfil").style.backgroundColor =
    "#000000b7";
  document.getElementById("fundo-editar-foto-de-perfil").style.height = "100vh";
  // document.getElementById("botao-branco").style.color = "#ffffff";
}

function fecharAbaEdicaoFoto() {
  console.log("fecharAbaEdicaoFoto");
  document.getElementById("fundo-editar-foto-de-perfil").style.backgroundColor =
    "transparent";
  document.getElementById("fundo-editar-foto-de-perfil").style.height = "0";
}

// Função para selecionar o avatar
function alterarFotoDePerfil(foto) {
  const img = document.getElementById("img-foto-de-perfil-conta");
  img.src = foto;

  document.getElementById("img-foto-de-perfil-conta").style.height = "10.2vh";

  sessionStorage.setItem("alterarFotoDePerfil", foto);
  console.log("alterarFotoDePerfil");
  document.getElementById("fundo-editar-foto-de-perfil").style.backgroundColor =
    "transparent";
  document.getElementById("fundo-editar-foto-de-perfil").style.height = "0";
}

// Função para carregar o avatar salvo no sessionStorage
function carregarFotoSelecionada() {
  console.log("carregarFotoSelecionada");
  const fotoSalva = sessionStorage.getItem("alterarFotoDePerfil");

  if (fotoSalva) {
    const img = document.getElementById("img-foto-de-perfil-conta");
    img.src = fotoSalva;

    document.getElementById("img-foto-de-perfil-conta").style.height = "10.2vh";
  }
}

// Chama a função carregarFotoSelecionada ao carregar a página
window.onload = carregarFotoSelecionada;

//Funcionamento das atualizações dos dados do usuário

function toggleAccordion(contentId) {
  console.log("toggleAccordion contentid");
  const content = document.getElementById(contentId);
  const isVisible = content.style.display === 'block';

  // Ocultar todos os outros conteúdos
  document.querySelectorAll('.accordion-content').forEach(item => {
      item.style.display = 'none';
  });

  // Alternar a visibilidade do conteúdo atual
  content.style.display = isVisible ? 'none' : 'block';
}

// Fazer Movimentos das alterações de dados da tela de conta

function toggleAccordion(button) {
  console.log("toggleAccordion button");
  var allPanels = document.getElementsByClassName("panel");
  var allButtons = document.getElementsByClassName("accordion");
  for (var i = 0; i < allPanels.length; i++) {
      allPanels[i].style.display = "none";
      allButtons[i].classList.remove("active");
  }

  button.classList.toggle("active");

  var panel = button.nextElementSibling.nextElementSibling;
  console.log(panel)

  if (panel.style.display === "none" || panel.style.display === "") {
      panel.style.display = "block";
  }
}