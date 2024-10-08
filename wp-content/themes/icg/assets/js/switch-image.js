(function($){

	$(document).ready(function(){

		enquire.register('screen and (min-width: 1024px)', {

			match: function() {

				$('.switch-image').each(function(i,v){
					$(this).attr('src',$(this).data('desktopSrc'));
					$(this).attr('width',$(this).data('desktopWidth'));
					$(this).attr('height',$(this).data('desktopHeight'));
					$(this).css('opacity', 1);
				});
				
			}

		});


		enquire.register('screen and (min-width: 768px) and (max-width: 1024px)', {

			match: function() {

				$('.switch-image').each(function(i,v){
					$(this).attr('src',$(this).data('tabletSrc'));
					$(this).attr('width',$(this).data('tabletWidth'));
					$(this).attr('height',$(this).data('tabletHeight'));
					$(this).css('opacity', 1);
				});
				
			}

		});


		enquire.register('screen and (max-width: 767px)', {

			match: function() {

				$('.switch-image').each(function(i,v){
					$(this).attr('src',$(this).data('mobileSrc'));
					$(this).attr('width',$(this).data('mobileWidth'));
					$(this).attr('height',$(this).data('mobileHeight'));
					$(this).css('opacity', 1);
				});
				
			}

		});
		
	});
	
})(jQuery);