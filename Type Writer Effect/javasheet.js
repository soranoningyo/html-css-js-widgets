/*global document ,setInterval ,clearInterval ,*/

var btn = document.getElementById('btn'),
	type = document.getElementById('show'),
	i = 0,
	text = document.getElementById('show').textContent;

btn.addEventListener('click', function () {
	"use strict";
	this.setAttribute("disabled", "disabled");
	btn.style.color = "black";
	type.style.display = 'block';
});
btn.onclick = function () {

	"use strict";
	type.textContent = ''; //in case of enabling button to start from begining
//	var i = 0; in case of enabling button to stop undefined"global var 'i'can be deleted"
	var mf = setInterval(function () {

		type.textContent += text[i];

		i = i + 1;

		if (i > text.length - 1) {
			clearInterval(mf);
			i = 0;
			btn.removeAttribute('disabled');
		}
		
	}, 30);
//	i = 0;in case of enabling button to not get weird words
};
