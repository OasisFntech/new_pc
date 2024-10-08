(function($){

	$(document).ready(function(){

		if(document.getElementById('icg-contact-form') !== null) {
			var wpcf7Elm = document.getElementById('icg-contact-form');
			wpcf7Elm.addEventListener('wpcf7mailsent',function(event){
				$('#thanksModal').modal('show');
			}, false);
		}
	});
	
})(jQuery);