const MILLISECONDS = 1;
const SECONDS = 1000 * MILLISECONDS;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;

const TIME_FROM_UNITS = {
    "ms": MILLISECONDS,
    "s": SECONDS,
    "m": MINUTES,
    "h": HOURS
}

function getTimeFromUnits(unit) {
    return TIME_FROM_UNITS[unit.toLowerCase()];
}
