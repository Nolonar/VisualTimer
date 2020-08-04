let alarm = document.getElementById("alarm");
let durationControl = document.getElementById("duration-control");
let timer = new Timer(document.getElementById("timer-canvas")).setTimerEnd(() => alarm.play());

function startTimer() {
    stopAlarm();

    let value = document.getElementById("duration-value").value;
    let unit = document.getElementById("duration-unit").value;
    let duration = value * getTimeFromUnits(unit);
    if (duration)
        timer.start(duration);
}

function stopAlarm() {
    alarm.pause();
    alarm.currentTime = 0;
}

document.getElementById("start-button").onclick = startTimer;
document.onclick = () => {
    stopAlarm();
    timer.reset();
};
window.onresize = () => timer.updateDimensions();
