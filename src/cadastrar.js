function cadastrar() {


   
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value; 
    var telefone = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    var cep = document.getElementById('cep').value;

    
    var dados = {
        nome: nome,
        senha: senha,
        cpf: cpf,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        cep: cep
    }



    var dadosConvertidos = JSON.stringify(dados);



    var cadastra = new XMLHttpRequest();

    cadastra.open("POST", "http://localhost:3000/cadastrar", true);
    cadastra.setRequestHeader("Content-type", "application/json");
    cadastra.send(dadosConvertidos);

    cadastra.addEventListener("load", function () {
        var resposta = cadastra.responseText;

        if (resposta == "ok") {
            alert("Cadastro realizado com sucesso!");
        } else {
            alert("Erro ao cadastrar!");
        }
    });
}

export default cadastrar;