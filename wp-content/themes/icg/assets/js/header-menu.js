(function($){

	$(document).ready(function(){

		if ("ontouchstart" in window || "ontouch" in window) { 

			$(document).on('click','.header-menu li a',function(e){
				if($(this).hasClass('open') && $(this).attr('href') != '#') {

				} else {
					e.preventDefault();
					$('.header-menu li a').removeClass('open');
					$(this).addClass('open');
					process_menu_hover_click($(this));
				}
			});

		} else {
			$('.header-menu li a').hoverIntent(function() {
				process_menu_hover_click($(this));
			});	
		}
		

		function process_menu_hover_click($obj) {

			$('.header-menu li a').removeClass('active');

			if($obj.hasClass('dropdown')) {
				var target = $obj.data('dropdown');
				$obj.addClass('active');
				$('#body-overlay').addClass('active');
				$('body').addClass('blur');

				if(!$(target).hasClass('active')) {
					$('.icg-dropdown-menu').removeClass('active');
					$(target).addClass('active');
				}
			} else {
				$('.icg-dropdown-menu').removeClass('active');
			}
		}

		$(document).on('mouseenter','.icg-dropdown-menu.active',function(e){
			$(this).addClass('active');
		});

		$(document).on('mouseleave','#site-header',function(e){
			$('.icg-dropdown-menu').removeClass('active');
			$('.header-menu li a').removeClass('active open');
			$('#body-overlay').removeClass('active');
			$('body').removeClass('blur');
		});

		$(document).on('mouseenter','.icg-dropdown-menu ul li.menu-item-has-children',function(e){
			$(this).parents('.links').siblings('.featured').find('article').fadeOut();
		});

		$(document).on('mouseenter','.icg-dropdown-menu ul.sub-menu li',function(e){
			$(this).parents('.links').siblings('.featured').find('article').fadeOut();
		});

		$(document).on('mouseenter','.icg-dropdown-menu ul:not(.sub-menu) > li:not(.menu-item-has-children)',function(e){
			$(this).parents('.links').siblings('.featured').find('article').fadeIn();
		});

		$('.icg-dropdown-menu__wrapper .links').on('mouseleave',function(e){
			$(this).siblings('.featured').find('article').fadeIn();
		});
		
	   	$('.icg-dropdown-menu').each(function(){
	   		var maxHeight = -1;

	   		$(this).find('.links ul').each(function(){
	   			maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
	   		});

	   		$(this).find('.links ul').each(function(){
	   			$(this).height(maxHeight);
	   		});
	   	});
		
	});

	var lastScrollTop = 0;

	$(window).on('scroll',function(){
		var $site_header = $('#site-header');

		if($site_header.length && $(window).scrollTop() >= 50 && !$site_header.hasClass('scroll')) {
			$site_header.addClass('scroll');
		}

		if($site_header.length && $(window).scrollTop() < 50) {
			$site_header.removeClass('scroll');
		}

		if($(window).width() >= 992) {

			var st = $(this).scrollTop();

			if(st > 20) {
				if(st > lastScrollTop) {
					$('#site-header').addClass('go-away');
				} else {
					$('#site-header').removeClass('go-away');
				}

				lastScrollTop = st;
			}
		}
	});
	
})(jQuery);