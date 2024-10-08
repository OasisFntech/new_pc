var loco_scroll;

(function($){

	var $back_to_top = $('#back-to-top');

	if(($('.icg-animated_hero_module').length || $('.icg-hero_post_module:not(.full-bleed)').length) && $('[data-scroll-container]').length && !isIE() && $(window).width() >= 992) {

		loco_scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			getDirection: true,
			lerp: 0.1,
			multiplier: 0.7,
			repeat: true
		});

		loco_scroll.on('scroll',function(obj){

			if(obj.direction == 'down') {
				if(obj.scroll.y >= 50) {
					$('#site-header').addClass('scroll go-away');
				}
			} else {
				$('#site-header').removeClass('go-away');
			}

			if(obj.scroll.y < 50) {
				$('#site-header').removeClass('scroll');
			}

			// Back to Top

			if($back_to_top.length && obj.scroll.y >= 200 && !$back_to_top.hasClass('show-it')) {
				$back_to_top.addClass('show-it');
			}

			if($back_to_top.length && obj.scroll.y < 200) {
				$back_to_top.removeClass('show-it');
			}
		});

		setTimeout(function(){
			loco_scroll.update();
		}, 500);
	}


	$(document).ready(function(){
		
	});

	$(window).on('load',function(){

		// Visualizer Charts take time to load so have to trigger update

		if(loco_scroll !== undefined) {
			setTimeout(function(){
				loco_scroll.update();	
			}, 2000);	
		}
		
	});

	$(window).on('resize',function(){
		if($(window).width() < 992 && loco_scroll !== undefined) {
			loco_scroll.destroy();
		}
	});
	
})(jQuery);