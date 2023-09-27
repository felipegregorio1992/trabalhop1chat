// public/script.js
function cadastrarLive() {
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;
    var categoria = document.getElementById('categoria').value;
    var descricao = document.getElementById('descricao').value;
    var dados = {
      nome: nome,
      data: data,
      categoria: categoria,
      descricao: descricao,
    };
    var dadosConvertidos = JSON.stringify(dados);
    var cadastra = new XMLHttpRequest();
    cadastra.open('POST', '/cadastrar-live', true);
    cadastra.setRequestHeader('Content-type', 'application/json');
    cadastra.send(dadosConvertidos);
    cadastra.addEventListener('load', function () {
      if (cadastra.status === 201) {
        alert('Cadastro realizado com sucesso!');
        document.getElementById('nome').value = '';
        document.getElementById('data').value = '';
        document.getElementById('categoria').value = '';
        document.getElementById('descricao').value = '';
      } else {
        alert('Erro ao cadastrar!');
      }
    });
  }
  
    export default cadastrarLive;