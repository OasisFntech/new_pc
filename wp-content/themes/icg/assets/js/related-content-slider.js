(function($){

	$(document).ready(function(){
		$('.related-content__grid-slider').each(function(index){

			var $prev_item = $(this).parent().find('.slick-prev');
			var $next_item = $(this).parent().find('.slick-next');

			if(!$(this).hasClass('slick-initialized')) {

				$(this).slick({
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        arrows: true,
			        dots: false,
			        infinite: false,
			        autoplay: false,
			        swipe: true,
			        prevArrow: $prev_item,
					nextArrow: $next_item,

					responsive: [
					    {
					      breakpoint: 992,
					      settings: {
					        slidesToShow: 2,
			        		slidesToScroll: 1
					      }
					    },

					    {
					      breakpoint: 768,
					      settings: {
					        slidesToShow: 1,
			        		slidesToScroll: 1
					      }
					    }
				  	]
			    });  
			}
		});
	});
	
})(jQuery);