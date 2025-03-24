let count = 0;
let timerId = 0;

const btnStart = document.getElementById('btnStart');

const btnStop = document.getElementById('btnStop');

const btnReset = document.getElementById('btnReset');

const display = document.getElementById('display');

function runTimer() {
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

function resetAll() {
    pauseTimer();
    count = 0;
    display.innerHTML = count;
}

btnStart.addEventListener('click', runTimer);

btnStop.addEventListener('click', pauseTimer);

btnReset.addEventListener('click', resetAll);









//FWAEH