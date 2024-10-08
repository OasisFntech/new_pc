(function($){

	$(document).ready(function(){

		$(document).on('click','.scroll-container .btn-scroll',function(e){
			e.preventDefault();
			$scrollto_location = $(this).parents('.scroll-container').outerHeight(true);

			if(($('.icg-animated_hero_module').length || $('.icg-hero_post_module:not(.full-bleed)').length) && $('[data-scroll-container]').length && !isIE() && $(window).width() >= 992) {
                loco_scroll.scrollTo($scrollto_location);
            } else {
				$('html,body').animate({ scrollTop: $scrollto_location }, 1000);
			}
		});
		
	});
	
})(jQuery);