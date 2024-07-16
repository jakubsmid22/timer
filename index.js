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
        }
        else {
            stopwatchContainer.classList.remove("-left-[850px]");
            timerContainer.classList.remove("left-0");
            stopwatchContainer.classList.add("w-full");
            timerContainer.classList.remove("w-full");
            stopwatchSwitch.classList.add("active")
            timerContainer.classList.add("-left-[850px]");
            stopwatchContainer.classList.add("left-0");
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

    }, 1000);

    timerPause.addEventListener("click", () => {
        clearInterval(intervalId);
    })

    timerReset.addEventListener("click", () => {
        clearInterval(intervalId);
        secondsInput.value = "00";
        minutesInput.value = "00";
    });
});