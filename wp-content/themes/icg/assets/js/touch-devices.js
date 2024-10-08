(function($){

	$(document).ready(function(){
		if ("ontouchstart" in window || "ontouch" in window) { 
			$('body').addClass('touch'); 
			update_height_of_elements();
		}
	});

	$(window).on('resize',function(){
		update_height_of_elements();
	});

	function update_height_of_elements() {
		if ("ontouchstart" in window || "ontouch" in window) { 

			if($('.icg-hero_post_module.full-bleed-on-mobile').length) {
				$('.icg-hero_post_module.full-bleed-on-mobile article').css('height',window.innerHeight);
			}

			if($('.icg-animated_hero_module').length) {
				$('.icg-animated_hero_module').css('height',window.innerHeight);	
			}
		}
	}
	
})(jQuery);