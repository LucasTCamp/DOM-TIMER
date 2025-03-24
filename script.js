let count = 0;
let timerId = 0;

const Start = document.getElementById('startTimer');
const Stop = document.getElementById('stopTimer');
const Reset = document.getElementById('resetTimer');
const display = document.getElementById('timerDisplay');

function kickOffTimer() {
    if (timerId === 0) {
        timerId = setInterval(() => {
            count++;
            display.innerHTML = count;
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = 0;
}

function clearTimer() {
    pauseTimer();
    count = 0;
    display.innerHTML = count;
}

Start.addEventListener('click', kickOffTimer);
Stop.addEventListener('click', pauseTimer);
Reset.addEventListener('click', clearTimer);
