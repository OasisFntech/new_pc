(function($){

	$(document).ready(function(){
		$('.slider-custom-team').each(function(index){

			var $prev_item = $(this).siblings('.slider-custom-team-controls').find('.slick-prev');
			var $next_item = $(this).siblings('.slider-custom-team-controls').find('.slick-next');

			if(!$(this).hasClass('slick-initialized')) {

				$(this).slick({
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: true,
			        dots: false,
			        infinite: true,
			        autoplay: false,
			        swipe: true,
			        prevArrow: $prev_item,
			        nextArrow: $next_item,

			        responsive: [
					    {
					      breakpoint: 768,
					      settings: {
					        slidesToShow: 1,
			        		slidesToScroll: 1,
			        		arrows: false,
			        		dots: true
					      }
					    }
				  	]
			    });  
			}
		});
	});
	
})(jQuery);