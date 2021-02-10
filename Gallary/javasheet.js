/*global document*/
var slsho = ["01.png", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "slider.jpg"],
	i = 0,
	x,
	pree = document.getElementById('pre'),
	main = document.createElement('div');
document.body.insertBefore(main, document.body.firstElementChild);
main.setAttribute('class', 'main');
for (i = 0; i < slsho.length; i = i + 1) {
	var ing = document.createElement('img');
	main.appendChild(ing);
	main.children[i].setAttribute('src', slsho[i]);
	main.children[i].setAttribute('class', 'x');
}
for (x = 0; x < slsho.length; x = x + 1) {
	var hover = document.getElementsByClassName('x');
	hover[x].onmouseover = function () {
		"use strict";
		var nta = Array.prototype.slice.call(hover),
			n = nta.indexOf(this);
		pree.setAttribute('src', slsho[n]); //last problem
	};
}

/*var maindiv = document.getElementById('main'),
	imgs = document.createElement('img');
maindiv.appendChild(imgs);
imgs.setAttribute('src', '1.jpg');*/
//('<option value=\"" + i +"\">' + i + "</option>")
