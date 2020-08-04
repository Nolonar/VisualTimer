let inputString = prompt("Enter a duration for the timer. Valid units are: 'ms', 's', 'm', 'h'.", "20m");
let result = inputString.match(/^(\d*\.?\d*)(ms|s|m|h)$/i);

if (result) {
    let value = Number(result[1]);
    let unit = result[2];
    let duration = value * getTimeFromUnits(unit);

    let timer = new Timer(document.getElementById("timer-canvas"));
    timer.onTimeUp.push(() => {
        alert("Time's up!");
    });

    timer.start(duration);
}
