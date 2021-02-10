/*global $,document, window*/

$(document).ready(function () {

	'use strict';

	// Trigger Shuffle

	$('#Container').mixItUp();

	// Trigger Shuffle li controller

	$('.shffule li').click(function () {

		$(this).addClass('active').siblings().removeClass('active');

	});

	// Adjust Header Height

	var myHeader = $('header'),

		mySlider = $('.bxslider');


	myHeader.height($(window).height());

	$(window).resize(function () {
		
		// Adjust Header Height when resizing

		myHeader.height($(window).height());

		// Adjust Bxslider List Items Center when resizing

		mySlider.each(function () {

			$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

		});

	});

	// Links Active Mode

	$('.links li').click(function () {

		$(this).addClass('active').siblings().removeClass('active');

	});

	// Adjust Bxslider List Items Center

	mySlider.each(function () {

		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

	});

	// Trigger The Bx Slider

	mySlider.bxSlider({

		pager: false

	});

});

$(function () {
	
	'use strict';
	
	$(window).scroll(function () {

		if ($(window).scrollTop() >= $(window).height()) {
			
			$('nav').addClass('fixed').children().addClass('cfixed');
			
		} else {
			
			$('nav').removeClass('fixed').children().removeClass('cfixed');

		}
	});
});

	// smooth scrolling

$('.links li').click(function () {

	'use strict';

	$('html ,body').animate({

		scrollTop: $('#' + $(this).data('value')).offset().top

	}, 1000);

});

	// Trigger niceScroll plugin

$('html').niceScroll({
	
	cursorcolor: '#7a173c',
	cursorwidth: '8px',
	autohidemode: false,
	zindex: 3,
	cursorborder: '3px dotted #7a173c'

});

(function autoSlider() {
	
	'use strict';
	
	$('.testi .overlay .container .slider .act').each(function () {
		
		if (!$(this).is(':last-child')) {

			$(this).delay(4000).fadeOut(1500, function () {
				
				$(this).removeClass('act').next().fadeIn(1500).addClass('act');
				
				autoSlider();
				
			});
		}
		
		if ($(this).is(':last-child')) {
			
			$(this).delay(4000).fadeOut(1500, function () {
				
				$(this).removeClass('act');
				
				$('.testi .overlay .container .slider div').eq(0).addClass('act').fadeIn(1500);

				autoSlider();
			});
		}
	});
}());

$('.gallary .row .overlay button').one('click', function () {
	
	"use strict";
	
	var xc = $(this).parent().next().children().last().text(),
		
		xcv = parseInt(xc, 10);
	
	$(this).parent().next().children().last().text(xcv + 1);

});
