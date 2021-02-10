/*global document ,window*/
var main = document.getElementById('main');
window.onscroll = function () {

	"use strict";
	//	console.log(window.pageYOffset);

	if (window.pageYOffset >= 1000) {

		main.style.display = 'block';

	} else {

		main.style.display = 'none';

	}
};
main.onclick = function mama() {
	"use strict";
	window.scrollTo(0, 0);
};
