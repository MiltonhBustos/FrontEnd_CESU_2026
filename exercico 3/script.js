const botao = document.getElementById("botao")
botao.addEventListener("click", calcularMedia);

function calcularMedia(){
    const nome = document.getElementById('nome').value;

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const media = ((nota1 + nota2 + nota3) / 3);
    const texto = document.getElementById("resultado");
    let situacao; 

    


   if(media > 7){
        situacao = "APROVADO";
        texto.classList.add("ap");
   }else if(media > 4){
        situacao = `EXAME Quanto precisa: ${10 - media}`;
        texto.classList.add("ex");
   }else{
        situacao = "REPROVADO";
        texto.classList.add("re");
   }

    texto.innerHTML = `<span> Nome: ${nome} <br> ${situacao} <br> ${media.toFixed(2)} </span>`;
}
