/*global $,document, window*/

$(document).ready(function () {

	'use strict';



	// Adjust Header Height

	var myHeader = $('header'),

		mySlider = $('.bxslider');


	myHeader.height($(window).height());

	$(window).resize(function () {
		
		// Adjust Header Height when resizing




	});


	// Trigger The Bx Slider

	mySlider.bxSlider({

		pager: false

	});

});
