let validUnits = Object.keys(TIME_FROM_UNITS);
let inputString = prompt(`Enter a duration for the timer. Valid units are:\n\n${validUnits.join("\n")}`, "20m");
let result = inputString.match(/^(\d*\.?\d*)(ms|s|m|h)$/i);

let alarm = document.getElementById("alarm");

if (result) {
    let value = Number(result[1]);
    let unit = result[2];
    let duration = value * getTimeFromUnits(unit);

    let timer = new Timer(document.getElementById("timer-canvas"));
    timer.onTimeUp.push(() => {
        alarm.play();
    });

    timer.start(duration);
}
