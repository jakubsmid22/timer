const timerSwitch = document.getElementById("timer");
const stopwatchSwitch = document.getElementById("stopwatch");
const switchs = document.querySelectorAll("[data-switch]");

switchs.forEach((e, i) => {
    e.addEventListener("click", () => {
        switchs.forEach(x => x.classList.remove("active"));
        e.id === "timer" ? timerSwitch.classList.add("active") : stopwatchSwitch.classList.add("active");
    });
})