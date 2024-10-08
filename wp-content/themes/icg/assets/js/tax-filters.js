(function($){

	$(document).ready(function(){

		$(document).click(function(e) {
			var $tax_filters = $('.tax-filter');

			if (!$tax_filters.is(event.target) && !$tax_filters.has(event.target).length) {
				$('.tax-filter .filter-trigger').removeClass('active');
        		$('.tax-filter .filter-options').slideUp('fast');
    		}

		});

		$(document).on('click','.tax-filter .filter-trigger',function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).siblings('.filter-options').slideToggle('fast');
		});

		$(document).on('click','.tax-filter .clear',function(e){
			e.preventDefault();
			var $data_taxonomy = $(this).data('taxonomy');
			var $input_element = $('input[name="' + $data_taxonomy + '"]');
			$input_element.val('');
			$(this).closest('form').submit();
		});

		$(document).on('click','.tax-filter ul li',function(e){
			e.preventDefault();
			$(this).toggleClass('active');

			var $data_term = $(this).data('term');
			var $data_taxonomy = $(this).data('taxonomy');
			var $input_element = $('input[name="' + $data_taxonomy + '"]');

			var $input_val = $input_element.val();
			var $input_val_array = new Array();

			if($input_val != '') {
				$input_val_array = $input_val.split(',');
			}

			if($(this).hasClass('active')) {
				$input_val_array.push($data_term);
			} else {
				for( var i = 0; i < $input_val_array.length; i++){ 
        			if ( $input_val_array[i] === $data_term) { 
            			$input_val_array.splice(i, 1); 
        			}
    			}
			}

			var $new_input_val = $input_val_array.toString();
			$input_element.val($new_input_val);
		});
		
	});
	
})(jQuery);