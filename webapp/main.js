let alarm = new Audio();
let durationControl = document.getElementById("duration-control");
let timer = new Timer(document.getElementById("timer-canvas")).setTimerEnd(() => {
    // Sound effects obtained from https://www.zapsplat.com
    alarm.src = "alarm.mp3";
    alarm.loop = true;
    alarm.play();
});

function startTimer() {
    // Workaround for iOS Safari only playing audio after immediate user interaction.
    alarm.play();
    stopAlarm();

    let value = document.getElementById("duration-value").value;
    let unit = document.getElementById("duration-unit").value;
    let duration = value * getTimeFromUnits(unit);
    if (duration)
        timer.start(duration);
}

function stopAlarm() {
    if (!alarm)
        return;

    alarm.pause();
    alarm.currentTime = 0;
}

document.getElementById("start-button").onclick = startTimer;
document.onclick = () => {
    stopAlarm();
    timer.reset();
};
window.onresize = () => timer.updateDimensions();
