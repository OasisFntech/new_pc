(function($){

	$(document).ready(function(){

		if($('.menu-item.subscribe-trigger').length) {
			
			$('.menu-item.subscribe-trigger').each(function(i,e){
				$(this).find('a').attr('data-bs-toggle','modal');
				$(this).find('a').attr('data-bs-target','#subscribeModal');
			});

			$('.menu-item.search-trigger__wrapper').each(function(i,e){
				$(this).find('a').addClass('search-trigger');
			});

		}

		$(document).on('click','.menu-item.subscribe-trigger a, .menu-item.search-trigger__wrapper a',function(e){
			setTimeout(function(){
				$('#mobilemenuModal').modal('hide');
			}, 100);
		});
	});
	
})(jQuery);