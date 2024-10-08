(function($){

	$(document).ready(function(){

		$(document).on('click','.icg-newsletter-form input[type="submit"]',function(e){
			e.preventDefault();
    		
    		var form = $(this).closest('form');
    		var newsletterEmail = form.find(".newsletter-form__email").val();
    		var newsletterForm = form.attr('id');
    		var list_selected = false;
    		var formData = form.serialize();

    		if (!validateEmail(newsletterEmail)) {
    			handleErrorInput(form, 'email');
    			return false;
    		}

    		form.find(".newsletter-form__checkbox").each(function(i, e){
        		if($(this).is(':checked')) {
        			list_selected = true;
        		}
      		});

      		if(list_selected == false) {
      			handleErrorInput(form, 'list');	
      			return false;
      		}

      		showSpinner(form);

      		$.ajax({
        		url : '/wp-admin/admin-ajax.php',
        		type : 'post',
        		data : formData,
        		success : function(response) {
        			if(response.is_error) {
        				hideSpinner(form);
        				form.find('.ajax-error').text(response.message).show();	
        			} else {
        				hideSpinner(form);
        				form.css('opacity',0).siblings().css('opacity',0);
        				form.siblings('.mailchimp-success').html(response.message).css('opacity', 1);
        			}
        		},
        		error : function( error ) {
          			
        		}
      		});
		});

		$('#subscribeModal').on('hidden.bs.modal',function(e){
			$(this).find('.icg-newsletter-form').trigger('reset').css('opacity',1).siblings().css('opacity',1);
			$(this).find('.form-spinner').hide();
			$(this).find('.newsletter-form__submit').removeAttr('disabled');
			$(this).find('.mailchimp-success').css('opacity',0);
		});

		$(document).on('keypress','input.newsletter-form__email',function(e){
			var form = $(this).closest('form');
			
			if(form.find('.form-error').is(':visible')) {
				hideErrorMessage(form);	
			}
		});

	  	$('input.newsletter-form__checkbox').on("click", function() {
		    hideErrorMessage($(this).closest('form'));
	  	});

		function validateEmail(email) {
		    var filter = /^([\w-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		    return filter.test(email);
	  	}

	  	function handleErrorInput(form, item) {
		    if(item == 'email') {
		      form.find('.email-error').show();
		      form.find('.newsletter-form__email').focus();
		    } else if(item == 'list') {
		      form.find('.list-error').show();
		    }
	  	}

	  	function hideErrorMessage(form) {
		    form.find('.form-error').hide();
	  	}

	  	function showSpinner(form) {
		    form.find('.form-spinner').show();
		    form.find('.newsletter-form__submit').attr('disabled','disabled');
	  	}

	  	function hideSpinner(form) {
	  		form.find('.form-spinner').hide();
	  	}

	});
	
})(jQuery);



