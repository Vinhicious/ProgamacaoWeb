var adc = document.getElementById("adicao").addEventListener("click", adicionarItem);
var texto = document.getElementById("item").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        adicionarItem();
    }
});
var marcar = document.getElementById("marcar").addEventListener("click", botaoMarcar)
var desmarcar = document.getElementById("desmarcar").addEventListener("click", botaoDesmarcar)
var remover = document.getElementById("eliminar").addEventListener("click", removerItem)


function selecionar(text){
    let selecao = document.getElementById("escolha");
    let opcao = document.createElement("option");
    opcao.value = text; 
    opcao.textContent = text;
    selecao.appendChild(opcao)
}

function encontrarLinhaPorTexto(texto) {
    let linhas = document.querySelectorAll("#tabela tr:not(:first-child)");
    for (let i = 0; i < linhas.length; i++) {
        let td = linhas[i].querySelector("td");
        if (td.textContent === texto) {
            return linhas[i];
        }
    }
    return null;
}


function adicionarItem(){
    let texto = document.getElementById("item").value;
    let novoItem = document.createElement("tr")
    novoItem.innerHTML = `<td>${texto}</td>`

    let tabela = document.getElementById("tabela").appendChild(novoItem)

    selecionar(texto);
    document.getElementById("item").value = "";

}

function botaoMarcar(event) {
    event.preventDefault();
    let selecao = document.getElementById("escolha");
    let linha = encontrarLinhaPorTexto(selecao.value);

    if (linha) {
        let td = linha.querySelector("td");
        td.style.backgroundColor = "yellow";
    }else {
        alert("Selecione algum item")
    }
}


function botaoDesmarcar() {
    let selecao = document.getElementById("escolha");
    let linha = encontrarLinhaPorTexto(selecao.value);

    if (linha) {
        let td = linha.querySelector("td");
        if (td.style.backgroundColor === "yellow") {
            td.style.backgroundColor = "white";
        } else {
            alert("Esse item já está desmarcado.");
        }
    }
}


function removerItem() {
    let selecao = document.getElementById("escolha");
    let linha = encontrarLinhaPorTexto(selecao.value);

    if (linha) {
        linha.remove();

        let opcoes = selecao.options;
        for (let i = 0; i < opcoes.length; i++) {
            if (opcoes[i].value === selecao.value) {
                selecao.remove(i);
                break;
            }
        }
    }
}

