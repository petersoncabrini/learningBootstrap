var campoCep = document.getElementById('cep')

campoCep.onblur = () => {
    var valorCep = campoCep.value;

    // https://brasilapi.com.br/api/cep/v1/{cep}

    var campoEndereco = document.getElementById('endereco');
    var campoBairro = document.getElementById('bairro');
    var campoCidade = document.getElementById('cidade');
    var campoEstado = document.getElementById('estado');

    campoEndereco.setAttribute("disabled", "disabled")
    campoBairro.setAttribute("disabled", "disabled")
    campoCidade.setAttribute("disabled", "disabled")
    campoEstado.setAttribute("disabled", "disabled")
    campoCep.setAttribute("disabled", "disabled")

    fetch("https://brasilapi.com.br/api/cep/v1/" + valorCep)
    .then (async function(resposta){
        var dados = await resposta.json();

    campoEndereco.value = dados.street;
    campoBairro.value = dados.neighborhood;
    campoCidade.value = dados.city;
    campoEstado.value = dados.state;

    campoEndereco.removeAttribute("disabled", "disabled")
    campoBairro.removeAttribute("disabled", "disabled")
    campoCidade.removeAttribute("disabled", "disabled")
    campoEstado.removeAttribute("disabled", "disabled")
    campoCep.removeAttribute("disabled", "disabled")

    })

}

var btnBuscaBanco = document.getElementById('btn_busca_banco');
btnBuscaBanco.onclick = ()=> {
    var valorBusca = document.getElementById('cod_banco')

    fetch("https://brasilapi.com.br/api/banks/v1/" + valorBusca.value)
    .then (async (resposta)=> {
        var dados = await resposta.json();
        var boxResultado = document.getElementById('resultado_busca');

        boxResultado.innerHTML = "ISPB:" + dados.ispb + "<br />" + "Codigo: " + dados.code + "<br />" + "Nome: " + dados.fullName
    })
}