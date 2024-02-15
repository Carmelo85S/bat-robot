document.addEventListener('DOMContentLoaded', function () {
    const centerCircle = document.getElementById('center-circle');
    const leftEye = document.getElementById('leftEye');
    const rightEye = document.getElementById('rightEye');
    const smile = document.getElementById('smile');
    const switchButton = document.getElementById('button');

    switchButton.addEventListener('click', function () {
        const isRobotOn = switchButton.classList.contains('on');
            if (!isRobotOn) {
                switchButton.classList.add('on');
                alert("Hi, I am Bat-Robot!"); // Visualizza un messaggio di avviso
            } else {
                switchButton.classList.remove('on');
            }
        centerCircle.classList.toggle('hovered');
        leftEye.classList.toggle('hovered');
        rightEye.classList.toggle('hovered');
        smile.classList.toggle('hovered');
    });

// Funzione per chiudere gli occhi
function closeEyes() {
    document.querySelector('.right-eye').classList.add('closed');
    document.querySelector('.left-eye').classList.add('closed');
}

// Funzione per aprire gli occhi
function openEyes() {
    document.querySelector('.right-eye').classList.remove('closed');
    document.querySelector('.left-eye').classList.remove('closed');
}
    // Cambia lo stato degli occhi ogni 4 secondi
    setInterval(function () {
        closeEyes();
        setTimeout(openEyes, 200); // Apri gli occhi dopo 1 secondo di chiusura
        }, 10000); // Esegui ogni 4 secondi
    });

function changeColor() {
    // Genera un colore casuale in formato esadecimale
    var changeColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Imposta il colore dello sfondo del corpo del documento
    document.body.style.backgroundColor = changeColor;
}
