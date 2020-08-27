function setup() {
	createCanvas(600, 400);
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	textSize(32);
}

function draw() {
	background(20, 33, 61);
	fill(20, 33, 61);
	stroke(252, 163, 17);
	line(width / 2, 0, width / 2, height);
	rect(width - 30, height / 2, 10, 70);
	rect(30, height / 2, 10, 70);

	fill(255);
	stroke(255);
	// ellipse(width / 2, height / 2, 10, 10);

	fill(255);
	// text(0, width / 2 - 50, 50);
	// text(0, width / 2 + 50, 50);

	const lines = 13;
	const d = 70 / lines;
	for (let i = -floor(lines / 2); i < ceil(lines / 2); i++) {
		const p1 = createVector(width - 35, height / 2 + d * i);
		const p2 = createVector();
		p2.x = 400;
		p2.y = height / 2 + i * 30;
		line(p1.x, p1.y, p2.x, p2.y);
	}
	for (let i = -floor(lines / 2); i < ceil(lines / 2); i++) {
		const p1 = createVector(35, height / 2 + d * i);
		const p2 = createVector();
		p2.x = 200;
		p2.y = height / 2 + i * 30;
		line(p1.x, p1.y, p2.x, p2.y);
	}
}
