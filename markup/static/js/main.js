'use strict';

// video
function ytInit() {
	$(".video").each(function () {
		$(this).find(".video_wrap").removeClass('video_wrap').addClass('video_wrap_pre');
	});
	$(".video_wrap_pre").each(function () {
		var yt = $(this).data('yt');
		if (yt) {
			$(this).html("<img src='https://img.youtube.com/vi/" + yt + "/maxresdefault.jpg' style='width: 100%; display: block' class='go_yt' data-yt='" + yt + "'>");
		}
	});
}
ytInit();

$(".video_wrap_pre").on("click", function () {
	ytInit();
	var yt = $(this).data('yt');
	$(this).removeClass("video_wrap_pre").addClass('video_wrap');
	$(this).html("<iframe src='https://www.youtube.com/embed/" + yt + "?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
});

// ppp
$('.js-ppp').click(function(e){
	e.preventDefault();
	//close all popup
	closePpp();
	//open my popup
	$('.page').removeClass('ppp-opened');
	var getClass = $(this).data('ppp');
	$('.ppp').addClass('is-active');
	$('#' + getClass).addClass('is-active');

});

$('.js-close').click(function(e){
	e.preventDefault();
	//close all popup
	closePpp();
});
function closePpp(){
	$('.ppp').removeClass('is-active');
	$('.ppp__content').removeClass('is-active');
	$('.page').removeClass('ppp-opened');
}

$(document).on('click', function(el){
	var childr = $('.ppp__shadow');

	if($(el.target).is(childr) == true ){
		closePpp();
	}
});

$(window).scroll(function() {
	if($(window).scrollTop() > $('.hero').height()*.2){
		$('.page').addClass('is-scrolled');
	} else {
		$('.page').removeClass('is-scrolled');
	}
	// if($(window).scrollTop() > $('#m_3').offset().top){}
});

