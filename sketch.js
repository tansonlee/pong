let ball;
let left;
let right;

let leftScore = 0;
let rightScore = 0;

function setup() {
	createCanvas(600, 400);
	ball = new Ball();
	left = new LeftPaddle();
	right = new RightPaddle();
	textSize(32);
	textAlign(CENTER, CENTER);
}

function draw() {
	background(20, 33, 61);
	ball.show();
	ball.update();

	left.show();
	right.show();

	checkMovement();

	const leftCollision = ball.collide(left);
	if (leftCollision !== null) {
		const angle = map(leftCollision, -35, 35, -PI / 4, PI / 4);
		ball.reflect(angle);
	}

	const rightCollision = ball.collide(right);
	if (rightCollision !== null) {
		const angle = map(rightCollision, -35, 35, (5 * PI) / 4, (3 * PI) / 4);
		ball.reflect(angle);
	}

	if (ball.isOffRight()) {
		leftScore++;
		reset();
	}
	if (ball.isOffLeft()) {
		rightScore++;
		reset();
	}

	line(width / 2, 0, width / 2, height);
	fill(255);
	stroke(255);
	text(leftScore, width / 2 - 50, 50);
	text(rightScore, width / 2 + 50, 50);
}

const reset = () => {
	ball.reset();
	right.reset();
	left.reset();
};

const checkMovement = () => {
	if (keyIsDown(65)) {
		left.move("UP");
	}
	if (keyIsDown(90)) {
		left.move("DOWN");
	}
	if (keyIsDown(75)) {
		right.move("UP");
	}
	if (keyIsDown(77)) {
		right.move("DOWN");
	}
};
