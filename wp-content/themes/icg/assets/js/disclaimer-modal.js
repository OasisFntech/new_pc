(function($){

	$(document).ready(function(){

		if($('body').attr('id')) {

			var $disclaimer_page_id = $('body').attr('id');
			var $backdrop = true;

			if($('#disclaimerModal').hasClass('with-default-ctas')) {
				$backdrop = 'static';
			}

			if(!sessionStorage.getItem($disclaimer_page_id)) {
				if($('#disclaimerModal').length) {
					var $disclaimer_modal = new bootstrap.Modal('#disclaimerModal', {
						'backdrop': $backdrop
					});
					$disclaimer_modal.show();
				}	
			}
		}

		$('#disclaimerModal').on('hidden.bs.modal', function (e) {
		  	sessionStorage.setItem($disclaimer_page_id, '1');
		});

	});
	
})(jQuery);