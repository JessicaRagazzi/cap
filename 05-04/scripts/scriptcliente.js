function onSubmit(){
    var nome = document.getElementById("fNome");
    var fone = document.getElementById("fone");
    var email = document.getElementById("email");
    var endereco = document.getElementById("endereco");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var cep = document.getElementById("cep");
    var credito = document.getElementById("credito");
    var foto = document.getElementById("foto");

    if(nome.value ===""){
        alert("Informe o nome");
        nome.focus();
        return;
    }

    if(fone.value ===""){
        alert("Informe o telefone");
        fone.focus();
        return;
    }

    if(email.value ===""){
        alert("Informe o e-mail");
        email.focus();
        return;
    }

    if(endereco.value ===""){
        alert("Informe o endereço");
        endereco.focus();
        return;
    }

    if(bairro.value ===""){
        alert("Informe o bairro");
        bairro.focus();
        return;
    }

    if(cidade.value ===""){
        alert("Informe a cidade");
        cidade.focus();
        return;
    }

    if(cep.value ===""){
        alert("Informe o CEP");
        cep.focus();
        return;
    }

    if(credito.value ===""){
        alert("Informe o Limite de Crédito");
        credito.focus();
        return;
    }

    if(foto.value ===""){
        alert("Faça o upload da sua foto");
        foto.focus();
        return;
    }
}