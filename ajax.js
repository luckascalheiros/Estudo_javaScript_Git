//classe que acessa função ajax, o ajax permite atualizar os dados do backend sem atualizar a pagina
var xhr = new XMLHttpRequest();

//busca dados atravez do metodo GET para a api do github
xhr.open("GET", "https://api.github.com/users/luckascalheiros");
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
    var lista = JSON.parse(xhr.responseText) || [];

    for (l of lista) {
      document.write(l);
    }
  }
};
