(function($){

	$(document).ready(function(){

		$(document).on('click','#back-to-top',function(e){
			e.preventDefault();

			if(($('.icg-animated_hero_module').length || $('.icg-hero_post_module:not(.full-bleed)').length) && $('[data-scroll-container]').length && !isIE() && $(window).width() >= 992) {
				loco_scroll.scrollTo("top");
			} else {
				$('html,body').animate({ scrollTop: 0 }, 1000);
			}
			
		});
		
	});

	$(window).on('scroll',function(){
		var $back_to_top = $('#back-to-top');

		if($back_to_top.length && $(window).scrollTop() >= 200 && !$back_to_top.hasClass('show-it')) {
			$back_to_top.addClass('show-it');
		}

		if($back_to_top.length && $(window).scrollTop() < 200) {
			$back_to_top.removeClass('show-it');
		}
	});
	
})(jQuery);