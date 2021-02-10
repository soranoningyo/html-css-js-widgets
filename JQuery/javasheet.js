/*global $,document ,console*/
/*$(document).ready(function () {
	'use strict';
	$("button").click(function () {

//			$('span').show(2000);
		$('p').toggle(2000, function () {$('span').toggle(1500); });

	});
});*/
/**/
/*$(document).ready(function () {
	'use strict';
	$('button').click(function () {
		$("div").fadeToggle(2000, function () {
			$('div').fadeTo(500, 0.4);
		});
	});
});*/
/**/
/*$(document).ready(function () {
	'use strict';
	$('#b1').click(function () {
		$('#p1').slideToggle();
	});
});
$(document).ready(function () {
	'use strict';
	$('#b2').click(function () {
		$('#p2').slideToggle();
	});
});
$(document).ready(function () {
	'use strict';
	$('#b3').click(function () {
		$('#p3').slideToggle();
	});
});
var bu = document.getElementsByTagName('button'),
	i = 0;
for (i = 0; i < bu.length; i = i + 1) {
	bu[i].onclick = function () {
		'use strict';
		this.classList.toggle('act');
	};
}*/
/**/
/*$(document).ready(function () {
	'use strict';
	$('.a').animate({
		top: '250px',
		paddingLeft: '100px',
		paddingRight: '100px'
//		height: '400px'
		
//		display: 'block'

	}, 1100);
	$('.b').animate({
		width: "800px",
		backgroundColor: '#eee',
		border: '1px solid #999'
	});
});//لنفس العنصر الانميشن بيشتغل على التوالي"بعد يخلص الانميشن الاول يبدا الثاني"0
// لعناصر مختلفة تعمل جميع الانميشنز في نفس الوقت
*/
/*$(document).ready(function () {
	'use strict';
	$('.c').animate({
		width: 'toggle',
		height: 'toggle',
		padding: 'toggle'
//		border: 'toggle'
	}, 1000);
	$('.c').animate({
		width: 'toggle',
		height: 'toggle',
		padding: 'toggle'
//		border: 'toggle'
	}, 1000);
	$('.c').animate({
		width: 'toggle',
		height: 'toggle',
		padding: 'toggle'
//		border: 'toggle'
	}, 1000);
	$('.c').animate({
		width: 'toggle',
		height: 'toggle',
		padding: 'toggle'
//		border: 'toggle' it get hidden earlier than you expect
	}, 1000);
	
});*/
/**/
/*var p = document.getElementsByClassName('p');

$(document).ready(function () {
	'use strict';
//	$('p').click(function () {
	$('div p').filter('p').css('backgroundColor', 'red');
//	});
});*/
/**/
/*$('button').click(function () {
	'use strict';
	$('.x').on({
		ccc: function () {
//			'use strict';
			$(this).hide();
		},
		click: function () {
//			'use strict';
			$('.x').trigger('ccc');
		}
	});
});
$('.y').on('click', function () {
	'use strict';
	$('<p>paragraph!</p>').insertAfter('.y');
});
$('body').on('click', 'p', function () {
	'use strict';
	$(this).hide(1500);
});*/
/**/
/*$('button').one('click', function () {
	'use strict';
	$('p').css('fontSize', '+=4px');
	$('button').on('click', function () {
		$('p').css('fontSize', '+=40px');
	});
});*/
/**/
/*$(document).ready(function () {
	'use strict';
	$('input').on('keydown', function () {

		$('div').text($(this).val());
	});
	$('input').on('keypress', function () {

		$('div').text($(this).val());
	});
	$('input').on('keyup', function () {

		$('p').text($(this).val());
	});

});*/
/**/
/*var btn = document.getElementById('button');
btn.onclick = function () {
	'use strict';
	var x = document.getElementById('myInput');
	x.select();
	document.execCommand('copy');
};
function myFunction() {
	'use strict';
	* Get the text field *
	var copyText = document.getElementById("myInput");

	* Select the text field *
	copyText.select();

	* Copy the text inside the text field *
	document.execCommand("copy");

	* Alert the copied text *
	alert("Copied the text: " + copyText.value);
}*/
/**/
/*$(document).on('click', function (e) {
	'use strict';
	$('div').show().offset({
		left: e.pageX,
		top: e.pageY
	});
});*/
/**/
/*$(document).ready(function () {
	'use strict';
//	$('li').each(function () {
		$('li').click(function () {
			if ($(this).hasClass('ac')) {
				$(this).css('color', 'red');
			}
		});
//	});
});
$(function () {
	
$('li').hasClass('ac').css('color', 'red');
});*/
/*$(document).ready(function () {
	'use strict';
	$('li').each(function avr() {

		if ($(this).hasClass('ac')) {
			$(this).css('color', 'red');
		} else {
			$(this).css('color', 'black');
		}
	});

});*/
/**/
/*$(document).ready(function () {
	'use strict';
	$('div').has('p').css('color','red')
});*/
/**/
/*$(document).scroll(function () {
	'use strict';
	//	console.log($('div').offset().top);
	if ($(window).scrollTop() <= $('div').offset().top) {
		$('div').css({
			position: 'absolute',
			top: '300px'
		});
	}
	//	console.log($('div').offset().top);

	if ($(window).scrollTop() >= $('div').offset().top) {
		$('div').css({
			position: 'fixed',
			top: '0'
		});
	}
	//	console.log($('div').offset().top);
});*/
	$('.x').show()
	var x = $('.x').offset().top;
	$('.x').hide()
$(document).scroll(function () {
	'use strict';
		console.log(x);
//		console.log($('.y').show().offset().top.hide());
//		console.log($('.z').show().offset().top.hide());
	//	console.log($(window).scrollTop());
	
	if ($(window).scrollTop() >= $('.x').offset().top) {
		//		$('div').css('color', 'red');
		$('.x').slideDown(1000);
	}
//	if ($(window).scrollTop() >= $('.y').offset().top) {
//		//		$('div').css('color', 'red');
//		$('.y').delay(1000).fadeIn(10000);
//	}
//	if ($(window).scrollTop() >= $('.z').offset().top) {
//		//		$('div').css('color', 'red');
//		$('.z').delay(1000).fadeIn(10000);
//	}
});
