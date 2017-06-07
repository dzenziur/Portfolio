/*----------  PARALAX  ----------*/
$(document).ready(function() {
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		$('.header_title').css({
			"transform" : "translate(0%," + st /4 + "%"
		});
		$('.header_subtitle h2').css({
			"transform" : "translate(0%, " + st *2  + "%"
		});	
	})
});

$(document).ready(function() {
	$('.hamb_menu_btn').click(function() {
		if ($(this).hasClass('close_status') === true) {
			$(this).removeClass('close_status');
			$('.menu_overlay').css('display', 'none');
		} else {
			$(this).addClass('close_status');
			$('.menu_overlay').css('display', 'block');
		}
	})
});

$(document).ready(function() {
	var VP = $( window ).height();
	$('.header_text_wrap').css('height', VP - 68);
})

$(document).ready(function() {
	$('.mob_menu li a').click(function() {
		$('.menu_overlay').css('display', 'none');
		$('.hamb_menu_btn').removeClass('close_status');
	})
})

$('.l_main').click(function() {
	$('html, body').animate({
		scrollTop: $("header").offset().top
	}, 500);
});
$('.l_about').click(function() {
	$('html, body').animate({
		scrollTop: $("#about").offset().top
	}, 500);
});
$('.l_works').click(function() {
	$('html, body').animate({
		scrollTop: $("#works").offset().top
	}, 500);
});
$('.l_contacts').click(function() {
	$('html, body').animate({
		scrollTop: $("footer").offset().top
	}, 500);
});