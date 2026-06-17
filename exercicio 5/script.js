function adicionar(){

    let nome = document.getElementById("nome").value.trim();

    if(nome == ""){
        alert("Digite um nome");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
    
    <span>${nome}</span>

    <button onclick="concluir(this)">Concluir</button>

    <button onclick="editar(this)">Editar</button>

    <button onclick="excluir(this)">Excluir</button>
    
    `;

    document.getElementById("lista").appendChild(li);

    document.getElementById("nome").value = "";
}

function concluir(botao){

    botao.parentElement.querySelector("span")
    .classList.toggle("riscado");
}

function editar(botao){

    let span = botao.parentElement.querySelector("span");

    let novoNome = prompt("Novo nome:");

    if(novoNome.trim() != ""){
        span.innerText = novoNome;
    }
}

function excluir(botao){

    botao.parentElement.remove();
}