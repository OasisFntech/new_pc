 (function($){

 	// Make sure intro doesn't works on mobile or tablet
	if ("ontouchstart" in window || "ontouch" in window) { 
		if( 'onorientationchange' in window) {
			Cookies.set('hideIntro', '1', { expires: 30 });
		}
	}

	if($('body').hasClass('home')) {
		process_intro_module();	
	}

	$(document).ready(function(){

		$(document).on('click','#icg-intro, .intro-scroll__trigger',function(e){
			e.preventDefault();
			var $target = $(this).data('target');
			
			if($($target).length) {
				$($target).css({
					transitionDuration: '1s',
					transitionDelay: '0s',
					transform: 'translate3d(0px, -100%, 0px)'
				});

				setTimeout(function(){ 
					$('body').removeClass('with-intro-module');
					Cookies.set('hideIntro', '1', { expires: 30 });
					$('#icg-intro').remove();
				}, 1000);
			}
		});

		var scrolled = false;

		$('#icg-intro').on('mousewheel DOMMouseScroll', function(e){
			e.preventDefault();

			if(!$(this).hasClass('scrollready')) { return false; }

			if(!scrolled) {
				scrolled = true;
				if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {

				} else {
					$('.intro-scroll__trigger').trigger('click');
				}
			}
		});

	});

	$(window).on('load',function(){
		if($('#icg-intro').length) {
			intro_animation();
			setTimeout(function(){ 
				initiate_ticker();
			}, 1750);
		}
	});

	function process_intro_module() {
		var hash = window.location.hash;
		var $has_hash = hash != '' && hash != '#' && hash != undefined && hash != '#subscribeModal';

		if(Cookies.get('hideIntro') || $has_hash) {
			$('#icg-intro').remove();
			$('body').removeClass('with-intro-module');
		}
	}


	function intro_animation() {
		setTimeout(function(){
			$('.intro-logo, .first-line-content, .second-line-content, #intro-images__slider-container, .intro-scroll__trigger').addClass('active');	
		}, 300);

		$('.intro-scroll__trigger').on('transitionend',function(e){
			$('#icg-intro').addClass('scrollready');
		});
	}

	function initiate_ticker() {
		var $tickerWrapper = $('#intro-images__slider-container');
		var $list = $tickerWrapper.find(".scroll");
		var $clonedList = $list.clone();
		var listWidth = 10;

		$list.find(".intro-img").each(function (i) {
			listWidth += jQuery(this, i).outerWidth(true);
		});

		var endPos = $tickerWrapper.width() - listWidth;

		$list.add($clonedList).css({
			width: listWidth + "px",
		});

		$clonedList.addClass("cloned").appendTo($tickerWrapper);

		//TimelineMax
		var infinite = new TimelineMax({ repeat: -1, paused: true });
		var time = $tickerWrapper.data("speed");
		
		
		infinite
			.fromTo(
				$list,
				time,
				{ rotation: 0.01, x: 0 },
				{ force3D: true, x: -listWidth, ease: Linear.easeNone },
				0
			)
			.fromTo(
				$clonedList,
				time,
				{ rotation: 0.01, x: listWidth },
				{ force3D: true, x: 0, ease: Linear.easeNone },
				0
			)
			.set($list, { force3D: true, rotation: 0.01, x: listWidth })
			.to(
				$clonedList,
				time,
				{
					force3D: true,
					rotation: 0.01,
					x: -listWidth,
					ease: Linear.easeNone,
				},
				time
			)
			.to(
				$list,
				time,
				{
					force3D: true,
					rotation: 0.01,
					x: 0,
					ease: Linear.easeNone,
				},
				time
			)
			.progress(1)
			.progress(0);
		
		infinite.play();
		//Pause/Play
		/*
		$tickerWrapper
			.on("mouseenter", function () {
				infinite.timeScale(0);
			})
			.on("mouseleave", function () {
				infinite.timeScale(1);
			});
		*/
	}

})(jQuery);