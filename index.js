const timerSwitch = document.getElementById("timer");
const stopwatchSwitch = document.getElementById("stopwatch");
const switchs = document.querySelectorAll("[data-switch]");
const timerContainer = document.getElementById("timerContainer");
const stopwatchContainer = document.getElementById("stopwatchContainer");
const timerInput = document.getElementById("timerInput");
const timerPlay = document.getElementById("timerPlay");

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
    console.log(timerInput.value);
    setInterval(() => {

    }, 1000)
});