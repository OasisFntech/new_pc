(function($){

	$(document).ready(function(){
		var $search_class_to_add = 'modal-open search-active';

		$(document).on('click','.search-trigger',function(e){
			e.preventDefault();
			var $is_sub_page = false;
			
			$(this).addClass('search-active');
			
			if(!$('body').hasClass('is-sub-page')) { 
				$search_class_to_add = $search_class_to_add + ' is-sub-page';
			}

			$('body').addClass($search_class_to_add);
			$('#icg-search').fadeIn('fast');
			$('#icg-search').find('.search-field').focus();
		});

		$(document).on('click','.close-search',function(e){
			e.preventDefault();
			$('#icg-search').fadeOut('fast');
			$('body').removeClass($search_class_to_add);
			$('.search-trigger').removeClass('search-active');
		});

		$(document).on('click','#clear-search',function(e){
			e.preventDefault();
			$(this).siblings('form').find('.search-field').val('');
			$(this).siblings('form').submit();
		});
	});
	
})(jQuery);