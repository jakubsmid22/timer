const timerSwitch = document.getElementById("timer");
const stopwatchSwitch = document.getElementById("stopwatch");
const switchs = document.querySelectorAll("[data-switch]");
const timerContainer = document.getElementById("timerContainer");
const stopwatchContainer = document.getElementById("stopwatchContainer");
const timerPlay = document.getElementById("timerPlay");
const timerPause = document.getElementById("timerPause");
const timerReset = document.getElementById("timerReset");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const stopwatchReset = document.getElementById("stopwatchReset");
const stopWatchTime = document.getElementById("stopWatchTime");
const stopwatchPlay = document.getElementById("stopwatchPlay");
const stopwatchPause = document.getElementById("stopwatchPause");

switchs.forEach((e, i) => {
    e.addEventListener("click", () => {
        switchs.forEach(x => x.classList.remove("active"));
        if (e.id === "timer") {
            timerSwitch.classList.add("active");
            timerContainer.classList.remove("-left-[850px]");
            timerContainer.classList.add("left-0");
            timerContainer.classList.add("w-full");
            stopwatchContainer.classList.remove("left-0");
            stopwatchContainer.classList.remove("w-full");
            stopwatchContainer.classList.add("-left-[850px]");
            document.title = "Časovač";
        }
        else {
            stopwatchContainer.classList.remove("-left-[850px]");
            timerContainer.classList.remove("left-0");
            stopwatchContainer.classList.add("w-full");
            timerContainer.classList.remove("w-full");
            stopwatchSwitch.classList.add("active")
            timerContainer.classList.add("-left-[850px]");
            stopwatchContainer.classList.add("left-0");
            document.title = "Stopky";
        }
    });
})  

timerPlay.addEventListener("click", () => {
    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);

    const intervalId = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(intervalId);
            return;
        }

        if (seconds === 0) {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        minutesInput.value = minutes.toString().padStart(2, '0');
        secondsInput.value = seconds.toString().padStart(2, '0');

        document.title = `Časovač ${minutesInput.value}:${secondsInput.value} ⏲️`;

    }, 1000);

    timerPause.addEventListener("click", () => {
        clearInterval(intervalId);
    })

    timerReset.addEventListener("click", () => {
        clearInterval(intervalId);
        secondsInput.value = "00";
        minutesInput.value = "00";
        document.title = "Časovač";
    });
});

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isRunning = false;

stopwatchPlay.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;

        const intervalId = setInterval(() => {
            if (miliseconds === 59) {
                miliseconds = 0;
                if (seconds === 59) {
                    seconds = 0;
                    if (minutes === 59) {
                        hours++;
                        minutes = 0;
                    }
                    else {
                        minutes++;
                    }
                }
                else {
                    seconds++;
                }
            }
            else {
                miliseconds++;
            }
            stopWatchTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${miliseconds.toString().padStart(2, '0')}`;
            document.title = "Stopky " + stopWatchTime.textContent;
        }, 10);

        stopwatchPause.addEventListener("click", () => {
            clearInterval(intervalId);
            isRunning = false;
        });

        stopwatchReset.addEventListener("click", () => {
            clearInterval(intervalId);
            stopWatchTime.textContent = "00:00:00:00";
            document.title = "Stopky";
            hours = 0;
            minutes = 0;
            seconds = 0;
            miliseconds = 0;
            isRunning = false;
        });
    }
});
