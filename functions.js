// Lógica para o funcionamento do cronometro com os videos e os audios automáticos:=========================================
let trainingTime = 0;
let restTime = 0;
let isTraining = false;
let interval;
let runVideo = document.getElementById("runVideo");
let restVideo = document.getElementById("restVideo");

function startTraining() {
    if (!isTraining) {
        trainingTime = parseInt(document.getElementById("trainingTime").value, 10);
        restTime = parseInt(document.getElementById("restTime").value, 10);
        runVideo.play(); // Inicia o vídeo de corrida
        document.getElementById("run-mp3").querySelector("audio").play(); // Inicia o áudio de corrida
        countdown(trainingTime, "training");
        isTraining = true;
    } else {
        runVideo.pause(); // Pausa o vídeo de corrida
        document.getElementById("run-mp3").querySelector("audio").pause(); // Pausa o áudio de corrida
        restVideo.play(); // Inicia o vídeo de descanso
        document.getElementById("rest-mp3").querySelector("audio").play(); // Inicia o áudio de descanso
        countdown(restTime, "rest");
        isTraining = false;
    }
}

function countdown(duration, type) {
    const timerElement = document.getElementById("timer");
    let timer = duration * 60, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            if (type === "training") {
                startTraining();
            }
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    isTraining = false;
    runVideo.pause(); // Pausa o vídeo de corrida
    restVideo.pause(); // Pausa o vídeo de descanso
}

function resetTimer() {
    clearInterval(interval);
    isTraining = false;
    document.getElementById("timer").textContent = "00:00";
    runVideo.pause(); // Pausa o vídeo de corrida
    restVideo.pause(); // Pausa o vídeo de descanso
}
//Fim - Lógica para o funcionamento do cronometro com os videos e os audios automáticos.====================================

var audioSurvivor = document.getElementById("audioSurvivor");
    var audioIWillsurvive = document.getElementById("audioIWillsurvive");

    // Pausa a outra música quando uma é reproduzida
    audioSurvivor.addEventListener('play', function () {
        audioIWillsurvive.pause();
    });

    audioIWillsurvive.addEventListener('play', function () {
        audioSurvivor.pause();
    });