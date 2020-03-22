var bottonElement = document.querySelector("#tudos input[type=button]");
var listElement = document.querySelector("#tudos ul");
var inputElement = document.querySelector("#tudos input[type=text]");

//pega itens do json do local storage e converte para lista
var tudosList = JSON.parse(localStorage.getItem("list_tudos")) || [];

// for (tudo in tudosList) {
//   listElement.innerHTML += listElement.innerHTML = `<li>${tudosList[tudo]} <a onclick="removetudo(${tudo})" href="#">Excluir</a></li>`;
// }

function tudos() {
  listElement.innerHTML = "";
  for (tudo of tudosList) {
    var tudoElement = document.createElement("li");
    var tudoText = document.createTextNode(tudo + " - ");
    tudoElement.appendChild(tudoText);

    var linkTudo = document.createElement("a");
    linkTudo.setAttribute("href", "#");
    var textLinkTudo = document.createTextNode("Exluir");
    linkTudo.appendChild(textLinkTudo);
    var posicao = tudosList.indexOf(tudo);

    linkTudo.setAttribute("onclick", "removetudo(" + posicao + ")");

    tudoElement.appendChild(linkTudo);

    listElement.appendChild(tudoElement);
  }
}

tudos();

function addtudos() {
  var tudoText = inputElement.value;
  tudosList.push(tudoText);
  inputElement.value = "";
  saveToStorage();
  tudos();
}

bottonElement.onclick = addtudos;

function removetudo(posicao) {
  tudosList.splice(posicao, 1);
  saveToStorage();
  tudos();
}

function saveToStorage() {
  //pasta padrão que salva local na estrutura chave valor no json
  localStorage.setItem("list_tudos", JSON.stringify(tudosList));
}
