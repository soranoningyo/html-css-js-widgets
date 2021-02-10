/*global $,document*/
$(document).ready(function () {
	'use strict';
	$('button').click(function () {
		$(this).fadeOut(1000);
	});
	$('button').click(function () {

		$(".container").animate({
			top: '170px'
		}, 2000);
		$(".container").animate({
			width: '500px',
			padding: '15px'
		}, 2000, function () {
			$("form").fadeIn(4000);
		});
		$(".container").animate({
			height: '350px'
		}, 2000);
	});
	
});
