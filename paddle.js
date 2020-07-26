class Paddle {
	constructor(x) {
		this.w = 10;
		this.h = 70;
		this.pos = createVector(x, height / 2);
	}

	show() {
		fill(0);
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, this.w, this.h);
	}

	move(dir) {
		if (dir === "UP") {
			this.pos.y -= 10;
		} else if (dir === "DOWN") {
			this.pos.y += 10;
		}

		this.pos.y = constrain(this.pos.y, this.h / 2, height - this.h / 2);
	}
}
