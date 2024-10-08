(function($){

	$(document).ready(function(){
		
	});

	$(window).on('load resize',function(){
		var $stock_module = $('#footer-stock-module');

		if($stock_module.length && $(window).width() >= 768) {
			
			var $footer_column_width = $('.footer-column:nth-child(1)').width();
			var $width_to_deduct = $footer_column_width * 2;
			
			var $spacer_width = $('.footer-columns').outerWidth(true) - $footer_column_width * 4;


			$stock_module.css('width', 'calc(100% - ' + ($width_to_deduct + $spacer_width * 2/3) + 'px)');
		} else {
			$stock_module.css('width', '100%');
		}
		
	});
	
})(jQuery);