class Ball {
	constructor() {
		this.pos = createVector(width / 2, height / 2);
		this.vel = createVector(1, 0);
		this.speed = 7;
		this.d = 10;
	}

	show() {
		fill(0);
		ellipse(this.pos.x, this.pos.y, this.d, this.d);
	}

	update() {
		this.vel.setMag(this.speed);
		this.pos.add(this.vel);

		if (this.pos.y < 0 || this.pos.y > height) {
			this.vel.y *= -1;
		}
	}

	collide(paddle) {
		let ballRight = this.pos.x + 0.5 * this.d;
		let ballLeft = this.pos.x - 0.5 * this.d;
		let paddleRight = paddle.pos.x + 0.5 * paddle.w;
		let paddleLeft = paddle.pos.x - 0.5 * paddle.w;
		let paddleTop = paddle.pos.y - 0.5 * paddle.h;
		let paddleBottom = paddle.pos.y + 0.5 * paddle.h;

		// if ball has the right x coordinate
		if (
			(ballRight >= paddleLeft && ballRight <= paddleRight) ||
			(ballLeft <= paddleRight && ballLeft >= paddleLeft)
		) {
			// if ball has the right y coordinate
			if (this.pos.y >= paddleTop && this.pos.y <= paddleBottom) {
				const yoff = this.pos.y - paddle.pos.y;
				return yoff;
			}
		}
		return null;
	}

	setPos(x, y) {
		this.pos.x = x;
		this.pos.y = y;
	}

	reset() {
		this.pos.x = width / 2;
		this.pos.y = height / 2;
		this.vel.x = 1;
		this.vel.y = 0;
	}

	isOffScreen() {
		return this.pos.x > width || this.pos.x < 0;
	}

	reflect(angle) {
		// flip becomes -1 to flip or 1 not to flip
		// const flip = this.vel.x > 0 ? -1 : 1;
		const newVel = p5.Vector.fromAngle(angle);
		// newVel.x *= flip;
		newVel.setMag(this.speed);
		this.vel = newVel;
	}
}
