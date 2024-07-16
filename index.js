const timerSwitch = document.getElementById("timer");
const stopwatchSwitch = document.getElementById("stopwatch");
const switchs = document.querySelectorAll("[data-switch]");
const timerContainer = document.getElementById("timerContainer");
const stopwatchContainer = document.getElementById("stopwatchContainer");

switchs.forEach((e, i) => {
    e.addEventListener("click", () => {
        switchs.forEach(x => x.classList.remove("active"));
        if (e.id === "timer") {
            timerSwitch.classList.add("active");
            timerContainer.classList.remove("-left-60");
            timerContainer.classList.add("left-0");
            timerContainer.classList.add("w-full");
            stopwatchContainer.classList.remove("left-0");
            stopwatchContainer.classList.remove("w-full");
            stopwatchContainer.classList.add("-left-60");
        }
        else {
            stopwatchContainer.classList.remove("-left-60");
            timerContainer.classList.remove("left-0");
            stopwatchContainer.classList.add("w-full");
            timerContainer.classList.remove("w-full");
            stopwatchSwitch.classList.add("active")
            timerContainer.classList.add("-left-60");
            stopwatchContainer.classList.add("left-0");
        }
    });
})