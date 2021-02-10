/*global document ,window ,setInterval*/
function clockf() {
	"use strict";
	var clock = document.getElementById('clock'),
		now = new Date(),
		hours = now.getHours(),
		min = now.getMinutes(),
		sec = now.getSeconds(),
		a$p;

	if (hours > 12 && hours < 24) {
		a$p = "PM";
	}
	if (hours < 12) {
		a$p = "AM";
	}
	
	if (hours > 12 && hours < 24) {
		hours = hours - 12;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (min < 10) {
		min = "0" + min;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}
	clock.textContent =  hours + ":" + min + ":" + sec + " " + a$p;
}

window.onload = function () {
	"use strict";
	setInterval(clockf, 500);
};
