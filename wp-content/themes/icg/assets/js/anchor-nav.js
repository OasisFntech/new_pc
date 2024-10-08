(function($){

	$(document).ready(function(){

		$('.anchor-nav').hoverIntent(function() {
			$('.anchor-overlay').addClass('active');
		}, function(){
			$('.anchor-overlay').removeClass('active');
		});

		$(document).on('click','.anchor-nav li',function(e){
			e.preventDefault();
			var $target = $('#' + $(this).data('target'));

			if($target.length) {
				$('html,body').animate({ scrollTop: $target.offset().top - 200 }, 500);
			}
		});
		
	});
	
})(jQuery);