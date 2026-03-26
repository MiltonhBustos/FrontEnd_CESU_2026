const cria = document.getElementById("bixo");
const botao = document.getElementById("botao");

const estados = {
    normal: "bixo.png",
    puto: "raiva.png",
    morto: "morto.png",
    comendo: "comendo.png",
    feliz: "feliz.png",
    clicado: "comendo.png",
}

let contador = 0;
let intervalo = null;
let timeoutClique = null;
let time_click = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)

        intervalo = setInterval(() =>{
            contador++;
            console.log("Tempo: ", contador)

            if(contador == 10){
                cria.src = estados.puto;
            }  
            if(contador == 20){
                cria.src = estados.morto;
            }

        }, 1000);
        
}

function alimentar() {

    cria.src = estados.clicado;
    contador = 0;

    console.log("Comendo");

    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        cria.src = estados.feliz;
        cria.src = estados.normal;

        timeoutBack = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}

controlador();
alimentar();