/*global document */

var txa = document.getElementById('txa'),
	lec = document.getElementById('left'),
	max = document.getElementById('max'),
	x = 140;
max.innerHTML = x;
 // oninput is better *_*
txa.onkeyup = function () {
	"use strict";

	if (this.value.length < 10 && this.value.length > 0) {
		lec.textContent = "0" + this.value.length;
	} else if (txa.value.length < 100 && txa.value.length >= 10 && x > 100) {
		lec.textContent = "0" + this.value.length;
	} else {
		lec.textContent = this.value.length;
	}
	if (txa.value.length > x) {
		lec.style.color = "red";
		lec.style.fontWeight = "bolder";
	} else {
		lec.style.color = "black";
	}
};
lec.textContent = txa.value.length;
