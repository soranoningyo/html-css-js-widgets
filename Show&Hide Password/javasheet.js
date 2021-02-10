/*global document  */

var inp = document.getElementById('inp'),
	btn = document.getElementById('btn');
btn.addEventListener('click', function () {
	"use strict";
	inp.classList.toggle('passChecker');
	if (inp.classList.contains('passChecker')) {
		inp.setAttribute('type', 'text');
	} else {

		inp.setAttribute('type', 'password');
	}
});
