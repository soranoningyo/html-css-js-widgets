/*global document */
var btn = document.getElementById('main');
btn.onclick = function () {
	"use strict";
	var chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		sernum = 20,
		randnum,
		i,
		randser = '';
	for (i = 0; i < sernum; i = i + 1) {
		randnum = Math.floor(Math.random() * chars.length);
		randser += chars.substring(randnum, randnum + 1);
	}
	document.getElementById('show').innerHTML = randser;
};
