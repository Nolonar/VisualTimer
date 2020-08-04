const pi2 = Math.PI * 2;
const angleTop = -Math.PI / 2;

const defaultDuration = 20 * MINUTES;

class Timer {
    get timeLeftPercent() {
        let deltaTime = this.timerEnd.getTime() - new Date().getTime();
        return deltaTime / this.durationMs;
    }

    get timerAngleRad() {
        let angleDelta = pi2 * this.timeLeftPercent;
        return angleDelta + angleTop;
    }

    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.ctx = this.canvas.getContext("2d");

        this.setDuration(defaultDuration);
        this.updateDimensions();

        // For event handling
        this.onTimeUp = [];
    }

    setDuration(durationMs) {
        this.durationMs = durationMs;
        this.timerEnd = new Date(new Date().getTime() + durationMs);
        return this;
    }

    updateDimensions() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;

        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.radius = Math.min(this.width, this.height) / 2;
    }

    start(durationMs) {
        if (durationMs)
            this.setDuration(durationMs);

        requestAnimationFrame(() => this.update());
    }

    update() {
        this.updateDimensions();

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawTimerBackground();

        this.drawTimerSpent();

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

    drawTimerBackground() {
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, this.radius, 0, pi2);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
    }

    drawTimerSpent() {
        let angle = this.timeLeftPercent <= 0 ? angleTop + pi2 : this.timerAngleRad;

        this.ctx.beginPath();
        this.ctx.moveTo(this.centerX, this.centerY);
        this.ctx.lineTo(this.centerX, 0);
        this.ctx.arc(this.centerX, this.centerY, this.radius, angleTop, angle, true);
        this.ctx.lineTo(this.centerX, this.centerY);
        this.ctx.closePath();

        this.ctx.fillStyle = "red";
        this.ctx.fill();
    }
}
