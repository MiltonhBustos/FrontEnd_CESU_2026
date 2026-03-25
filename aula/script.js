const cria = document.getElementById("bixo");
const botao = document.getElementById("botao");

const estados = {
    normal: "bixo.png",
    puto: "raiva.png",
    morto: "morto.png",
    comendo: "comendo.png",
    feliz: "feliz.png"
}

let contador = 0;
let intervalo = null;
let time_out = null;
let time_click = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)

        intervalo = setInterval(() =>{
            contador++;
            console.log("Tempo: ", contador)

            if(contador == 30){
                cria.src = estados.puto;
            }  
            if(contador == 60){
                cria.src = estados.morto;
            }

        }, 1000);
        
}

controlador();