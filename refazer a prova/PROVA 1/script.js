function revelar(){

    let img = document.getElementById("imagemJogador");
    img.src = "_vinicius_junior.png";
    img.classList.remove("placeholder");

    let nome = document.getElementById("nomeTexto");
    let data = document.getElementById("Data_Nas");
    let altura = document.getElementById("Altura");
    let posicao = document.getElementById("Posicao");
    let rank = document.getElementById("Rank");

    nome.textContent = "Vinícius José Paixão de Oliveira Júnior";
    data.textContent = "12/07/2000 (25 anos)";
    altura.textContent = "1,76 m";
    posicao.textContent = "Ponta-esquerda / Atacante";
    rank.textContent = "9,5";

    let elementos = [nome, data, altura, posicao, rank];

    elementos.forEach(function(el) {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });

    document.getElementById("Nome").classList.remove("placeholder-glow");
    document.getElementById("info").classList.remove("placeholder-glow");
}