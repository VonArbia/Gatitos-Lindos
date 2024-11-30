let fondo;
let corre;
let parado;
let gatoVigiDere;
let gatoVigiIzq;
let miau;
let musica;
let miauVigi;
let pX = 5; // posición del jugador
let poseActual; // inicializamos con una pose
let posicionInicial = 25; // guardamos el spawnpoint
let noSePuede = false;
let juegoTerminado = false; // checkea si ganamos o no
let estaCorriendo = false; // nueva variable para controlar la imagen
let miauVigiReproducido = false;

function preload() {
    fondo = loadImage("./js/juego/img/fondo-parque.jpg");
    corre = loadImage("./js/juego/img/gato-corre.gif");
    parado = loadImage("./js/juego/img/gato-parado.png");
    gatoVigiDere = loadImage("./js/juego/img/gato-vigi-dere.png");
    gatoVigiIzq = loadImage("./js/juego/img/gato-vigi-izq.png");
    miau = loadSound("./js/juego/audios-juego/miau.wav");
    musica = loadSound("./js/juego/audios-juego/8bit-musica.mp3");
    miauVigi = loadSound("./js/juego/audios-juego/miau-vigi.mp3");
}

function setup() {
    let canvas = createCanvas(600, 450);
    canvas.parent("elJuego");
    poseActual = gatoVigiDere; //Posición inicial del vigilante
    musica.loop();
}

function draw() {
    background(fondo);

    // Verificamos si está corriendo para mostrar la imagen correspondiente
    if (estaCorriendo) {
        image(corre, pX, 265, 100, 67);
    } else {
        image(parado, pX - 10, 255, 130, 92);
    }

    // Vigilante
    push();
    rectMode(CENTER);
    image(poseActual, 470, 244, 120, 120);
    pop();

    // Si el juego terminó, mostramos el menú para reiniciar
    if (juegoTerminado) {
        mostrarMenu();
        return; // Detenemos la ejecución del resto del código
    }

    // Mensajes iniciales
    

    // Comprobamos si el jugador llegó al final
    if (pX > 460) {
        juegoTerminado = true; // Terminar el juego
    }

    // Detectamos si se está presionando una tecla
    if (keyIsPressed) {
        if (keyCode === RIGHT_ARROW) {
            estaCorriendo = true; // ponemos el gif de correr
            pX++;

            // Si se mueve mientras el vigilante está viendo
            if (noSePuede && pX !== posicionInicial) {
                pX = posicionInicial;

                // Reproducir miauVigi si no se ha reproducido ya
                if (!miauVigiReproducido) {
                    miauVigi.play();
                    miauVigiReproducido = true; // Evitar múltiples reproducciones
                }
            }
        }
    } else {
        estaCorriendo = false; // Cuando no se presionan teclas, el gato vuelve a estar parado
    }

    // Cambiamos la pose del vigilante cada 3 segundos
    if (frameCount % 180 === 0) {
        cigarrillo();
    }

    // Reproducir sonido con la tecla "M"
    if (keyIsPressed && (key === "m" || key === "M")) {
        miau.stop();
        miau.play();
    }
}



// Permitir o no el paso y cambiar la pose del vigilante
function cigarrillo() {
    if (!noSePuede) {
        poseActual = gatoVigiIzq;
        noSePuede = true;
        miauVigiReproducido = false; // Reseteamos para que pueda reproducirse la próxima vez
        mostrarMensaje = false;
    } else {
        poseActual = gatoVigiDere;
        noSePuede = false;
        mostrarMensaje = true;
    }
}

function mostrarMenu() {
    push();
    fill(255, 200);
    rect(width / 2 - 100, height / 2 - 50, 200, 100, 10);
    fill(0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("¡Ganaste!\nPresiona 'R' para reiniciar", width / 2, height / 2);
    pop();

    if (keyIsPressed && (key === 'r' || key === 'R')) {
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    pX = 5;
    poseActual = gatoVigiDere;
    juegoTerminado = false;
    miauVigiReproducido = false;
    mostrarMensaje = true;
    noSePuede = false;
    estaCorriendo = false;
}
