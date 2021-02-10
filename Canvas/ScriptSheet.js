/*global window, document ,requestAnimationFrame */



// Define Canvas
var canvas = document.querySelector('canvas'),

	c = canvas.getContext('2d'),

	w = window.innerWidth,

	h = window.innerHeight;

// Adjusting Canvas Scale when Resizing
window.onresize = function () {

	'use strict';

	var w = window.innerWidth,

		h = window.innerHeight;

	canvas.width = w;

	canvas.height = h;
};

// Adjusting Canvas Scale

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

// interacting with Canvas

var mouse = {
	x: undefined,
	y: undefined
};

canvas.addEventListener('mousemove', function (e) {

	'use strict';
	mouse.x = e.x;
	mouse.y = e.y;

});

// Canvas Object storing Canvas Drawing And Animating Infos

var circlecolor = [
	'#105B63',
	'#FFFAD5',
	'#FFD34E',
	'#DB9E36',
	'#BD4932'
];

function Circle(x, y, r, dx, dy) {

	'use strict';

	this.x = x;
	this.y = y;
	this.r = r;
	this.minr = r;
	this.dx = dx;
	this.dy = dy;
	this.color = circlecolor[Math.floor(Math.random() * circlecolor.length)];

	this.draw = function () {

		c.beginPath();

		c.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);

		c.fillStyle = this.color;

		c.fill();
	};

	this.animate = function () {

		this.draw(); // Drawing Circle Before Animating It

		if (this.x + this.r > w) {
			this.dx = -this.dx;
		}
		if (this.x - this.r < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.r > h) {
			this.dy = -this.dy;
		}
		if (this.y - this.r < 0) {
			this.dy = -this.dy;
		}

		// interactivity condition

		var maxr = 55,
			sensor = 70;

		if (mouse.x - this.x < sensor && mouse.x - this.x > -sensor && mouse.y - this.y < sensor && mouse.y - this.y > -sensor) {
			if (this.r < maxr) {

				this.r += 1;
			}
		} else if (this.r > this.minr) {

			this.r -= 1;

		}

		this.x += this.dx;
		this.y += this.dy;
	};
}

// An Array To Store All Circles

var i,
	circleNum = 400,
	circles = [];

for (i = 0; i < circleNum; i = i + 1) {

	var xedge,yedge,
		edgex = Math.random(),
		edgey = Math.random();
	if (edgex < 0.9 && edgex > 0.1) {
		xedge = edgex;
	}
	if (edgey < 0.9 && edgey > 0.1) {
		yedge = edgey;
	}

	var r = Math.random() * 20 + 1,
		y = (yedge * h) - 2 * r,
		x = (xedge * w) - 2 * r,
		dx = (Math.random() + 0.1) * 5,
		dy = (Math.random() + 0.1) * 5,
		sd = Math.round(Math.random());
	if (sd === 0) {
		dx = -dx;
		dy = -dy;
	}

	circles.push(new Circle(x, y, r, dx, dy));


}
//.
//.
// Triggring Canvas's Main Function

function animation() {

	'use strict';

	c.clearRect(0, 0, w, h);

	requestAnimationFrame(animation);

	for (i = 0; i < circles.length; i = i + 1) {

		circles[i].animate();

	}
}

animation();
