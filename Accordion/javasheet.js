/*global document*/
var bu = document.getElementsByClassName("button"),
	i;

for (i = 0; i < bu.length; i = i + 1) {
	bu[i].addEventListener("click", function () {
		"use strict";
		this.classList.toggle("act");
		var desc = this.nextElementSibling;
		if (desc.style.maxHeight) {
			desc.style.maxHeight = null;
		} else {
			desc.style.maxHeight = desc.scrollHeight + "px";
		}
		//		if (desc.style.display == "block") {desc.style.display == "none"} else {desc.style.display == "block"}
	});

	/*setTimeout(function () {
		"use strict";
		for (i = 0; i < bu.length; i = i + 1) {
			bu[i].click();
		}
	}, 2000);*/

}
