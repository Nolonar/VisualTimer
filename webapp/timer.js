const pi2 = Math.PI * 2;
const angleTop = -Math.PI / 2;

const defaultDuration = 20 * MINUTES;

class Timer {
    get timeLeft() {
        return Math.max(this.timerEnd.getTime() - new Date().getTime(), 0);
    }

    get timeLeftPercent() {
        return this.timeLeft / this.durationMs;
    }

    get timerAngleRad() {
        return pi2 * this.timeLeftPercent + angleTop;
    }

    get isRunning() {
        return this._isRunning;
    }
    set isRunning(value) {
        this._isRunning = value;
    }

    constructor(canvasElement) {
        this._isRunning = false;

        this.canvas = canvasElement;
        this.ctx = this.canvas.getContext("2d");

        this.setDuration(defaultDuration);
        this.updateDimensions();
        this.reset();

        // For event handling
        this.onTimeUp = [];
    }

    setDuration(durationMs) {
        this.durationMs = durationMs;
        this.timerEnd = new Date(new Date().getTime() + durationMs);
        return this;
    }

    setTimerEnd(callback) {
        this.onTimeUp.push(callback);
        return this;
    }

    updateDimensions() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;

        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.radius = Math.min(this.width, this.height) / 2;

        if (this.isRunning) {
            this.drawAll(this.ctx);
        } else {
            this.drawTimerBackground(this.ctx);
        }
    }

    start(durationMs) {
        this.isRunning = true;
        if (durationMs)
            this.setDuration(durationMs);

        requestAnimationFrame(() => this.update());
    }

    reset() {
        this.isRunning = false;
        this.drawTimerBackground(this.ctx);
    }

    update() {
        this.drawAll();

        if (this.timeLeftPercent > 0) {
            requestAnimationFrame(() => this.update());
        } else {
            requestAnimationFrame(() => {
                let eventHandlers = this.onTimeUp.filter(h => h instanceof Function);
                for (const eventHandler of eventHandlers)
                    eventHandler();
            });
        }
    }

    drawAll() {
        let ctx = this.ctx;

        this.drawTimerBackground(ctx);
        this.drawTimerSpent(ctx);
        this.drawTimeLeft(ctx);
    }

    drawTimerBackground(ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, pi2);
        ctx.fillStyle = "white";
        ctx.fill();
    }

    drawTimerSpent(ctx) {
        let angle = this.timeLeftPercent <= 0 ? angleTop + pi2 : this.timerAngleRad;

        ctx.beginPath();
        ctx.moveTo(this.centerX, this.centerY);
        ctx.lineTo(this.centerX, 0);
        ctx.arc(this.centerX, this.centerY, this.radius, angleTop, angle, true);
        ctx.lineTo(this.centerX, this.centerY);
        ctx.closePath();

        ctx.fillStyle = "red";
        ctx.fill();
    }

    drawTimeLeft(ctx) {
        ctx.font = "50px Consolas, Monospace";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${(this.timeLeft / 1000).toFixed(3)}`, this.centerX, this.centerY);
    }
}
