let alarm = document.getElementById("alarm");
let validUnits = Object.keys(TIME_FROM_UNITS);

function start() {
    alarm.pause();
    let inputString = prompt(`Enter a duration for the timer. Valid units are:\n\n${validUnits.join("\n")}`, "20m");
    let result = inputString.match(/^(\d*\.?\d*)(ms|s|m|h)$/i);
    if (!result)
        return;

    let value = Number(result[1]);
    let unit = result[2];
    let duration = value * getTimeFromUnits(unit);

    let timer = new Timer(document.getElementById("timer-canvas"));
    timer.onTimeUp.push(() => {
        alarm.play();
    });

    timer.start(duration);
}

document.onclick = start;
start();
