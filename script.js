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
                alert("Hi, I am Bat-Robot!"); 
            } else {
                switchButton.classList.remove('on');
            }
        centerCircle.classList.toggle('hovered');
        leftEye.classList.toggle('hovered');
        rightEye.classList.toggle('hovered');
        smile.classList.toggle('hovered');
    });


function closeEyes() {
    document.querySelector('.right-eye').classList.add('closed');
    document.querySelector('.left-eye').classList.add('closed');
}

function openEyes() {
    document.querySelector('.right-eye').classList.remove('closed');
    document.querySelector('.left-eye').classList.remove('closed');
}

    setInterval(function () {
        closeEyes();
        setTimeout(openEyes, 200);
        }, 10000); 
    });

function changeColor() {
    var changeColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = changeColor;
}
