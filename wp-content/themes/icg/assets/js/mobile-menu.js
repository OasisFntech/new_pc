(function($){

	$(document).ready(function(){

		$('#mobilemenuModal').on('shown.bs.modal',function(e){

			$('.mobile-dropdown-menu').each(function(i,e){

				var maxHeight = -1;

		   		$(this).find('ul').each(function(){
		   			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		   		});

	   			$(this).attr('data-height', maxHeight);

			});

		});

		$('#mobilemenuModal').on('hidden.bs.modal',function(e){
			$('#mobile-menu__wrapper').fadeIn();
			$('.mobile-dropdown-menu, .mobile-dropdown-menu ul.menu, .mobile-dropdown-menu, .mobile-dropdown-menu ul.sub-menu').removeClass('inactive active');
			$('#mobilemenuModal .modal-header .back-link').removeClass('active back-to-main back-to-first-level');
		});


		$('.mobile-dropdown-menu .sub-menu').each(function(i,e){
			$anchor = $(this).prev('a').prop('outerHTML');
			$li = '<li class="menu-item parent-link">' + $anchor + '</li>';
			$(this).prepend($li);
		});

		$('.mobile-dropdown-menu ul li a').each(function(i,e) {
			$(this).wrapInner('<span></span>');
		});

		$(document).on('click','#mobile-menu .mobile-dropdown__trigger',function(e){
			e.preventDefault();
			$('#mobile-menu__wrapper').fadeOut();
			$('#mobilemenuModal').find('.modal-header .back-link').addClass('back-to-main active');
			$('.mobile-dropdown-menu').removeClass('active').removeAttr('style');
			var $dropdown = $('#' + $(this).data('dropdown'));

			$dropdown.height($dropdown.data('height'));
			$dropdown.addClass('active');
			$dropdown.find('ul.menu').addClass('active');
		});

		$(document).on('click','.mobile-dropdown-menu ul li.menu-item-has-children > a',function(e){
			e.preventDefault();
			$(this).parent().addClass('active');
			$(this).parents('ul.menu').addClass('inactive');
			$(this).siblings('.sub-menu').addClass('active');
			$('#mobilemenuModal').find('.modal-header .back-link').removeClass('back-to-main').addClass('back-to-first-level');
		});

		$(document).on('click','#mobilemenuModal .modal-header .back-link',function(e){
			e.preventDefault();

			if($(this).hasClass('back-to-main')) {
				$(this).removeClass('active');
				$('.mobile-dropdown-menu').find('ul.menu').removeClass('active');
				$('.mobile-dropdown-menu').removeClass('active').removeAttr('style');
				$('#mobile-menu__wrapper').fadeIn();
			}

			if($(this).hasClass('back-to-first-level')) {
				$('.mobile-dropdown-menu').find('ul.sub-menu').removeClass('active');
				$('.mobile-dropdown-menu').find('ul.menu').removeClass('inactive');
				$(this).removeClass('back-to-first-level').addClass('back-to-main');
			}
		});

	});




	
})(jQuery);