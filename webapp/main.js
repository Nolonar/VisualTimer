let alarm = new Audio();
let canvas = document.getElementById("timer-canvas");
let timer = new Timer(canvas).setTimerEnd(() => {
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

function updateAlarmVolume(isAlarmEnabled) {
    alarm.volume = isAlarmEnabled ? 1 : 0;
}

updateAlarmVolume(document.getElementById("is-alarm-enabled").checked);

document.getElementById("is-alarm-enabled").addEventListener("change", event => {
    updateAlarmVolume(event.currentTarget.checked);
});

document.getElementById("start-button").onclick = startTimer;

canvas.onclick = () => {
    stopAlarm();
    timer.reset();
};

window.onresize = () => timer.updateDimensions();
