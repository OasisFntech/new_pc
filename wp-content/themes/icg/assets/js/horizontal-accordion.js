(function($){

	$(document).ready(function(){

		$(document).on('click','.horizontal-accordion .accordion-group .accordion-trigger',function(e){
			e.preventDefault();

			if($(this).parent().hasClass('active')) { return; }

			var $accordion_element = $(this).parents('.horizontal-accordion');
			var $current_active_item = $(this).parent().siblings('.active');

			var $new_active_item_index = $(this).parent().index() + 1;
			var $new_active_item_content = $(this).parent().find('.accordion-content__wrapper');

			var $current_object = $(this);

			set_active_accordion_item($current_object,$accordion_element,$current_active_item,$new_active_item_index,$new_active_item_content);
		});


		$(document).on('click','.horizontal-accordion-menu li',function(e){
			e.preventDefault();

			if($(this).hasClass('active')) { return; }

			var $current_object = $(this);
			var $accordion_menu_element = $(this).parents('.horizontal-accordion-menu');
			var $accordion_element = $accordion_menu_element.siblings('.horizontal-accordion');

			var $current_active_item = $accordion_element.find('.accordion-group.active');
			var $new_active_item_index = $(this).index() + 1;
			var $new_active_item_content = $accordion_element.find('.accordion-group:nth-child(' + $new_active_item_index + ')').find('.accordion-content__wrapper');

			set_active_accordion_item($current_object,$accordion_element,$current_active_item,$new_active_item_index,$new_active_item_content,'menu',$accordion_menu_element);
		});

		function set_active_accordion_item($current_object,$accordion_element, $current_active_item, $new_active_item_index, $new_active_item_content, $trigger_source, $accordion_menu_element) {

			if($trigger_source == 'menu') {
				$current_object.addClass('active').siblings().removeClass('active');
				var $accordion_menu_element = $current_object.parents('.horizontal-accordion-menu');
				$accordion_menu_element.removeClass('active-1 active-2 active-3 active-4');
				$accordion_menu_element.addClass('active-' + $new_active_item_index);
				$accordion_element.find('.accordion-group:nth-child(' + $new_active_item_index + ')').addClass('active').siblings().removeClass('active');
			} else {
				$current_object.parent().addClass('active').siblings().removeClass('active');
			}

			$current_active_item.find('.accordion-content__wrapper').removeClass('active');

			$accordion_element.removeClass('active-1 active-2 active-3 active-4');
			$accordion_element.addClass('active-' + $new_active_item_index);

			$delay_wrapper = 200;
			$delay_content = 500;

			if($(window).width() < 992) {
				$delay_wrapper = 0;
				$delay_content = 0;
			}

			setTimeout(function() { 
				$new_active_item_content.addClass('active').removeClass('moveaway');
			}, $delay_content);

			setTimeout(function() { 
				$current_active_item.find('.accordion-content__wrapper').addClass('moveaway');
			}, $delay_wrapper);

			
		}
		
	});
	
})(jQuery);