const cria = document.getElementById("bixo");
const botao = document.getElementById("botao");

const fundoDia = "bg_d.png";
const fundoNoite = "bg_dnoite.png";
let horas = 0;
let intervaloFundo = null;
let modoManual = false;

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

function atualizarFundo() {
    if (intervaloFundo) clearInterval(intervaloFundo);

    intervaloFundo = setInterval(() => {

        if (modoManual) return;

        horas++;

        if (horas >= 12) {
            aplicarTema(true);
        } else {
            aplicarTema(false);
        }

        if (horas >= 24) horas = 0;

    }, 2000);
}

function aplicarTema(noite) {
    if (noite) {
        document.body.style.backgroundImage = "url('bg_dnoite.png')";
        document.body.classList.add("noite");
    } else {
        document.body.style.backgroundImage = "url('bg_d.png')";
        document.body.classList.remove("noite");
    }
}

const toggle = document.getElementById("toggleTema");

toggle.addEventListener("change", () => {
    modoManual = true; 
    aplicarTema(toggle.checked);
});

function criarEstrelas() {
    const container = document.getElementById("stars");

    for (let i = 0; i < 100; i++) {
        const estrela = document.createElement("div");
        estrela.classList.add("star");

        estrela.style.top = Math.random() * 100 + "%";
        estrela.style.left = Math.random() * 100 + "%";
        estrela.style.animationDuration = (Math.random() * 2 + 1) + "s";

        container.appendChild(estrela);
    }
}

function criarNuvens() {
    const container = document.getElementById("clouds");

    for (let i = 0; i < 6; i++) {
        const nuvem = document.createElement("div");
        nuvem.classList.add("cloud");

        const tamanho = Math.random() * 100 + 80;
        nuvem.style.width = tamanho + "px";
        nuvem.style.height = tamanho * 0.6 + "px";

        nuvem.style.top = Math.random() * 50 + "%";

        nuvem.style.left = Math.random() * 100 + "vw";

        nuvem.style.animationDuration = (Math.random() * 20 + 20) + "s";

        nuvem.style.animationDelay = -(Math.random() * 30) + "s";

        container.appendChild(nuvem);
    }
}

function mostrarFoto() {
    const foto = document.getElementById("fotoSecreta");

    if (foto.style.opacity === "1") {
        foto.style.opacity = "0";
        foto.style.transform = "scale(0.75)";
    } else {
        foto.style.opacity = "1";
        foto.style.transform = "scale(1)";
    }
}

criarEstrelas();
controlador();
alimentar();
atualizarFundo();
criarNuvens();