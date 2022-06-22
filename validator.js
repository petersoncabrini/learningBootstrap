var formulario = document.querySelector("form");

var campoNome = document.getElementById("nome");
var campoSobrenome = document.getElementById("sobrenome");
var campoEmail = document.getElementById("email");
var campoSenha = document.getElementById("senha");
var campoUsername = document.getElementById("username");

campoNome.onblur = function(){
    campoNome.style.backgroundColor = "#FFFFFF";
    var erroNome = campoNome.parentElement.querySelector(".invalid-feedback");
    erroNome.innerText = "";
    if(campoNome.value.length === 0){
        erroNome.innerText = "O nome do usuário é obrigatório";
    }
}

campoNome.onfocus = function(){
    campoNome.style.backgroundColor = "#8888FF";
}

campoNome.onchange = function(){
    console.log(campoNome.value);
}

formulario.onsubmit = function(evento){
    /* Campo idade carregado posteriormente porque ele foi criado no window.onload, após o carregamento do HTML */
    var campoIdade = document.getElementById("idade");

    var erroEncontrado = false;
    var mensagensErro = document.querySelectorAll(".invalid-feedback");
    mensagensErro.forEach(function(mensagem){
        mensagem.innerText = "";
    });

    if(campoNome.value.length === 0){
        erroEncontrado = true;
        var erroNome = campoNome.parentElement.querySelector(".invalid-feedback");
        erroNome.innerText = "O nome do usuário é obrigatório";
    }
    if(campoSobrenome.value.length === 0){
        erroEncontrado = true;
        var erroSobrenome = campoSobrenome.parentElement.querySelector(".invalid-feedback");
        erroSobrenome.innerText = "O sobrenome do usuário é obrigatório";
    }
    if(campoEmail.value.length === 0){
        erroEncontrado = true;
    }
    if(campoSenha.value.length === 0){
        erroEncontrado = true;
    }
    if(campoUsername.value.length === 0){
        erroEncontrado = true;
    }
    if(campoEmail.value.length < 10 || campoEmail.value.length > 180){
        erroEncontrado = true;
        var erroEmail = campoEmail.parentElement.querySelector(".invalid-feedback");
        erroEmail.innerText = "O e-mail deve ter no mínimo 10 caracteres e no máximo 180 caracteres";
    }
    if(campoEmail.value.indexOf("@") === -1 || campoEmail.value.indexOf(".") === -1){
        erroEncontrado = true;
        var erroEmail = campoEmail.parentElement.querySelector(".invalid-feedback");
        erroEmail.innerText = "Endereço de e-mail inválido";
    }

    if(erroEncontrado == true){
        evento.preventDefault();
    }
}

window.onload = function(){
    var boxCampoIdade = document.createElement("div");
    boxCampoIdade.className = "mb-3";

    var labelIdade = document.createElement("label");
    labelIdade.className = "form-label";
    labelIdade.innerText = "Idade";

    var campoIdade = document.createElement("input");
    campoIdade.setAttribute("name", "idade");
    campoIdade.setAttribute("id", "idade");
    campoIdade.setAttribute("type", "text");
    campoIdade.className = "form-control";

    var validacaoIdade = document.createElement("div");
    validacaoIdade.className = "invalid-feedback";

    boxCampoIdade.append(labelIdade, campoIdade, validacaoIdade);
    var botaoEnvio = formulario.querySelector("button");
    botaoEnvio.before(boxCampoIdade);
}