class Paddle {
	constructor() {
		this.w = 10;
		this.h = 70;
		this.speed = 8;
	}

	show() {
		fill(0);
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, this.w, this.h);
	}

	move(dir) {
		if (dir === "UP") {
			this.pos.y -= this.speed;
		} else if (dir === "DOWN") {
			this.pos.y += this.speed;
		}

		this.pos.y = constrain(this.pos.y, this.h / 2, height - this.h / 2);
	}

	reset() {
		this.pos.y = height / 2;
	}
}
