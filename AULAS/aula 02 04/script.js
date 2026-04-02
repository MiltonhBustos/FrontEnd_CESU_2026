const produtos ={
	"123": {"nome": "Suco de Tamarindo", "preco": 9.90},
	"456": {"nome": "Guarana Jesus", "preco": 20.50},
	"789": {"nome": "Barreado de Pato-Branco", "preco": 1.00},
	"147": {"nome": "Goiaba", "preco": 1.50}
};

let carrinho = [];

const audio = new Audio("rojao.mp3");

window.onload = () => {
		document.getElementById("cod").focus();
}

function addProduto(){
	const codElement = document.getElementById("cod");
	const qtdElement = document.getElementById("qtd");

	const codValue = codElement.value;
	const qtdValue = qtdElement.value;

	if(!produtos[codValue]){
		alert("Produto não Cadastrado");
		return;
	}

	const produtoBase = produtos[codValue];

	const item = {
		nome: produtoBase.nome,
		preco: produtoBase.preco,
		quantidade: qtdValue,
		subTot: produtoBase.preco * qtdValue
	};

	carrinho.push(item);
	audio.currentTime = 0;
	audio.play();

	codElement.value = "";
	qtdElement.value = 1;

	atualizatela();
}

function atualizatela(){
	const list = document.getElementById("lista");
	lista.innerHTML ="";

	let total = 0; 

	carrinho.forEach((item, index) => {
		total += item.subTot;

		const li = document.createElement("li");
		li.className = "list-group-item";

		li.innerHTML = ` <div class="d-flex"> <strong>${item.nome}
		</strong> <samll> - ${item.quantidade} X ${item.preco} =
		<strong> ${item.subTot}</strong></small></div> `;

		lista.appendChild(li);
	});
}

