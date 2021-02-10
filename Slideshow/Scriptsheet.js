/* global document,setTimeout */

var slsho = ["1.jpg", "2.jpg", "3.jpg"],
	i = 0,
	cb = document.getElementById('cb'),
	slideshow = cb.onclick = function () {
		"use strict";
//		document.slsh.src = slsho[Math.floor(Math.random() * slsho.length)];"randomly"
		document.slsh.src = slsho[i];
		if (i < slsho.length - 1) {
			i = i + 1;
		} else {
			i = 0;
		}

		setTimeout('slideshow()', 2000);
	};

