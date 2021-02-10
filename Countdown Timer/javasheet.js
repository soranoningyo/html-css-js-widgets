/*global document ,setInterval ,clearInterval */

var counter = document.getElementById('x'),
	secOfTimer = document.getElementById('inp'),
	int,
	btn = document.getElementById('btn');
btn.addEventListener('click', function () {
	"use strict";
	var inpu = document.getElementById('inp');
	inpu.setAttribute("disabled", "disabled");
	inpu.classList.add('ac');
});

function countMFun() {
	"use strict";
	var min = Math.floor(secOfTimer.value / 60),
		rem = secOfTimer.value % 60,
		inpu = document.getElementById('inp');
	if (rem < 10) {
		rem = "0" + rem;
	}
	if (min < 10) {
		min = "0" + min;
	}
	counter.innerHTML = min + ":" + rem;
	if (secOfTimer.value === "0") {
		counter.innerHTML = "done!";
		clearInterval(int);
	}

	if (secOfTimer.value <= 0) {
		inpu.removeAttribute('disabled');
		inpu.classList.remove('ac');
	}

	if (secOfTimer.value > 0) {
		secOfTimer.value = secOfTimer.value - 1;
	}

}
btn.onclick = function () {
	"use strict";
	int = setInterval(function () {
		countMFun();
	}, 980);
};
