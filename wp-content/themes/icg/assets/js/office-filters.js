(function($){

	$(document).ready(function(){

		$(document).click(function(e) {
			var $office_filters = $('.office-filter');

			if (!$office_filters.is(event.target) && !$office_filters.has(event.target).length) {
				$('.office-filter .filter-trigger').removeClass('active');
        		$('.office-filter .filter-options').slideUp('fast');
    		}

		});

		$(document).on('click','.continent-grid--trigger',function(e){
			e.preventDefault();
			
			if($(window).width() < 768) {
				$(this).toggleClass('open');
				$(this).siblings('.archive-grid').slideToggle();
			}
		});

		$(document).on('click','.office-filter .filter-trigger',function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).siblings('.filter-options').slideToggle('fast');
		});

		$(document).on('click','.office-filter ul li',function(e){
			e.preventDefault();

			if($(this).hasClass('placeholder')) { return; }

			$(this).toggleClass('active');

			var $data_term = $(this).data('term');
			var $data_term_label = $(this).find('span').text();

			var $filter_items_element = $(this).parents('.filter-options').siblings('.filter-trigger').find('.current-filter-items');
			var $current_filter_items = $(this).parents('.filter-options').siblings('.filter-trigger').find('.current-filter-items').text();

			var $filter_items_array = new Array();

			if($current_filter_items != '(City)' && $current_filter_items != '(Geographies)') {
				$filter_items_array = $current_filter_items.split(',');
			}

			if($(this).hasClass('active')) {
				$filter_items_array.push($data_term_label);
			} else {
				for( var i = 0; i < $filter_items_array.length; i++){ 
        			if ( $filter_items_array[i] === $data_term_label) { 
            			$filter_items_array.splice(i, 1); 
        			}
    			}
			}

			var $new_filter_items_val = $filter_items_array.join(', ');

			if($new_filter_items_val == '') {
				if($filter_items_element.hasClass('city')) {
					$new_filter_items_val = '(City)';
				} else if($filter_items_element.hasClass('geographies')) {
					$new_filter_items_val = '(Geographies)';
				}
			}

			$filter_items_element.text($new_filter_items_val);
		});

		$(document).on('click','.office-filter .filter-actions input[type="submit"]', function(e){
			e.preventDefault();

			$('.filter-options').slideUp('fast');

			if($(this).hasClass('clear')) {
				var $data_target = $(this).data('target');
				var $filter_items_label = $(this).data('label');

				$('.filter-options.' + $data_target + ' ul li').removeClass('active');

				var $filter_items_element = $('.current-filter-items.' + $data_target);

				$filter_items_element.text($filter_items_label);
				$('article.type-office').show();

				if($data_target == 'city') {
					
				} else {
					$('.icg-offices_module, .continent-info').show();
					$('.filter-options.city').find('li:not(.placeholder)').hide();
					$('.filter-options.city').find('li.placeholder').show();
					$('.current-filter-items.city').text('(City)');
				}

			} else {
				$geography_filter_active = 0;
				$city_filter_active = 0;
			
				$('.icg-offices_module, .continent-info').hide();
				$('article.type-office').hide();

				$('.filter-options.geographies ul li.active').each(function(i,e){
					$('.icg-offices_module.' + $(this).data('term')).show();
					$('.continent-info.' + $(this).data('term')).show();
					$('.filter-options.city').find('li[data-geography="' + $(this).data('term') + '"]').show();
					$('.filter-options.city').find('li.placeholder').hide();

					$geography_filter_active = 1;
				});

				if($geography_filter_active == 0) {
					$('.icg-offices_module, .continent-info').show();
					$('.filter-options.city').find('li:not(.placeholder)').hide();
					$('.filter-options.city').find('li.placeholder').show();
				}

				$('.filter-options.city ul li.active').each(function(i,e){
					$('article.type-office.' + $(this).data('term')).show();
					$city_filter_active = 1;
				});

				if($city_filter_active == 0) {
					$('article.type-office').show();
				}	

			}
			
			$('html, body').animate({ scrollTop: $('#icg-offices').offset().top - 125 }, 500 );
		});
		
	});

	$(window).on('load',function(){
		if ($('body').hasClass('page-template-page-offices') && location.href.indexOf("#") != -1) {
			var hashValue = window.location.hash.replace(/^#/, '');  
			
			if(hashValue != '') {
				$('.office-filter ul li[data-term="' + hashValue + '"]').trigger('click');

				setTimeout(function(){
					$('.office-filter .filter-actions input[type="submit"]').trigger('click');
				}, 500);
			}
	    }
	});
	
})(jQuery);