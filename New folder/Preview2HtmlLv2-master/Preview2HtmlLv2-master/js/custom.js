/*global $,document, window*/
$(document).ready(function () {
	'use strict';
	$('#Container').mixItUp();

});
$(document).ready(function () {

	'use strict';

	// Adjust Header Height

	var myHeader = $('header'),

		mySlider = $('.bxslider');

	myHeader.height($(window).height());

	$(window).resize(function () {

		myHeader.height($(window).height());

		// Adjust Bxslider List Item Center

		mySlider.each(function () {

			$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

		});

	});

	// Links Add Active Class

	$('.links li').click(function () {

		$(this).addClass('active').siblings().removeClass('active');

	});

	// Adjust Bxslider List Item Center

	mySlider.each(function () {

		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

	});

	// Trigger The Bx Slider

	mySlider.bxSlider({

		pager: false

	});

});
// smooth scroll
$('.links li').click(function () {

	'use strict';

	$('html ,body').animate({

		scrollTop: $('#' + $(this).data('value')).offset().top

	}, 1000);



	// Trriggr sffulle

	$('.shffule li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');

	});
});

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
		xcv = parseInt(xc);
	$(this).parent().next().children().last().text(xcv + 1);

});
