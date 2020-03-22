var bottonElement = document.querySelector("#tudos input[type=button]");
var listElement = document.querySelector("#tudos ul");
var inputElement = document.querySelector("#tudos input[type=text]");

var tudosList = ["tomar café", "acessar site", "estudar"];

function tudos() {
  listElement.innerHTML = "";

  for (tudo in tudosList) {
    listElement.innerHTML += listElement.innerHTML = `<li>${tudosList[tudo]} <a onclick="removetudo(${tudo})" href="#">Excluir</a></li>`;
  }
}

tudos();

function addtudos() {
  var tudoText = inputElement.value;
  tudosList.push(tudoText);
  inputElement.value = "";
  tudos();
}

bottonElement.onclick = addtudos;

function removetudo(posicao) {
  tudosList.splice(posicao, 1);
  tudos();
}
