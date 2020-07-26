let ball;
let left;
let right;

function setup() {
	createCanvas(600, 400);
	ball = new Ball();
	left = new Paddle(30);
	right = new Paddle(width - 30);
}

function draw() {
	background(200);
	ball.show();
	ball.update();

	left.show();
	right.show();

	if (keyIsDown(65)) {
		left.move("UP");
	} else if (keyIsDown(90)) {
		left.move("DOWN");
	} else if (keyIsDown(75)) {
		right.move("UP");
	} else if (keyIsDown(77)) {
		right.move("DOWN");
	}

	if (ball.collide(left) || ball.collide(right)) {
		ball.vel.x *= -1;
	}

	// if ball is offscreen left or right
	if (ball.pos.x > width || ball.pos.x < 0) {
		// reset ball position and velocity
		ball.pos.x = width / 2;
		ball.pos.y = height / 2;
		ball.vel.x = 1;
		ball.vel.y = 0;

		// reset paddles
		right.pos.x = width - 30;
		right.pos.y = height / 2;
		left.pos.x = 30;
		left.pos.y = height / 2;
	}
}
