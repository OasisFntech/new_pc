(function($){

	var listjs_table;

	$(document).ready(function(){
		
		/* Don't need this as we already have this in listjs-grid

		$(document).on('click','.listjs-navigation .listjs-arrow',function(e){
			e.preventDefault();
			var pagerLi_active = $(this).siblings('.pagination').find('li.active');

			if($(this).hasClass('prev-page')) {
				pagerLi_active.prev().trigger('click');	
			} else {
				pagerLi_active.next().trigger('click');	
			}
			
		}); */

		$(document).on('click','.table-filter__trigger',function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).siblings('.events-table__filter').slideToggle('fast');
		});

		$(document).on('click','.events-table__filter li',function(e){
			$(this).addClass('active').siblings().removeClass('active');
			var $year_value = $(this).data('year');
			var $list_id = $(this).parent().siblings('.events-table').attr('id');
			var $list_id_var = $list_id.replace(/-/g, '_');
			
			window[$list_id_var].filter(function(item) {
				if($year_value == 'all') {
					$yearFilter = true;
				} else {
					$yearFilter = item.values().year == $year_value;
				}
				return $yearFilter;
			});

			window[$list_id_var].update();

			if($(window).width() < 992) {
				$(this).parent().siblings('.table-filter__trigger').find('.current-filter-items').text($year_value);
				$(this).parent().siblings('.table-filter__trigger').removeClass('active');
				$(this).parent().slideUp('fast');
			}

		});
	});

	$(window).on('load',function(){
		
		if($('.listjs-table').length) {

			$('.listjs-table').each(function(i,e){
				var $list_id = $(this).attr('id');
				var $list_id_var = $list_id.replace(/-/g, '_');

				if($(this).find('.list .events-table__row').length <= 5) {
					return;
				}

				var options = {
	    			valueNames: [ 'year' ],
	    			page: 5,
	    			plugins: [
	    				ListPagination({
	  						paginationClass: "pagination",
	  						left: 5,
	  						right: 1
						})
					]
				};

				window[$list_id_var] = new List($list_id, options).on("updated", function(list) {
					$('html,body').animate({scrollTop: $(list.listContainer).offset().top - 200 }, 300);
				});
			});
		}
	});
	
})(jQuery);