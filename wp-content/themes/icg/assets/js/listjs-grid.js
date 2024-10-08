(function($){

	$(document).ready(function(){
		
		$(document).on('click','.listjs-navigation .listjs-arrow',function(e){
			e.preventDefault();
			var pagerLi_active = $(this).siblings('.pagination').find('li.active');

			if($(this).hasClass('prev-page')) {
				pagerLi_active.prev().trigger('click');	
			} else {
				pagerLi_active.next().trigger('click');	
			}
			
		});
	});

	$(window).on('load',function(){
		
		if($('.listjs-grid').length) {
			$('.listjs-grid').each(function(i,e){
				var $list_id = $(this).attr('id');

				if($(this).find('.list article').length <= 12) {
					return;
				}

				var options = {
	    			valueNames: [ 'post-title' ],
	    			page: 12,
	    			plugins: [
	    				ListPagination({
      						paginationClass: "pagination",
      						left: 5,
      						right: 1
    					})
    				]
				};

				new List($list_id, options).on("updated", function(list) {
					$('html,body').animate({scrollTop: $(list.listContainer).offset().top - 200 }, 300);
				});
			});
		}
	})
	
})(jQuery);