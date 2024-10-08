(function($) {

    $(document).ready(function(){
        process_map_points();
    });

    $(window).on('resize',function(){
        process_map_points();
    });

    $(window).on('load resize orientationChange', function(event) { 
        init_map_slider();
    });

    function process_map_points() {
        if($('.map-container').length) {

            $.each($('.map-container .map-point'),function(i,e) {
                $top_position = $(this).data('positionTop');
                $left_position = $(this).data('positionLeft');

                if($(window).width() < 1200) {
                    $top_position = $(this).data('positionTabletTop');
                    $left_position = $(this).data('positionTabletLeft');    
                }

                $(this).css('top', $top_position + '%');
                $(this).css('left', $left_position + '%');
                $(this).css('opacity', 1);
            });  
        }
    }

    function init_map_slider() {
            
        $('.map-points__slider').each(function(index){

            if(!$(this).hasClass('slick-initialized') && $(window).width() < 768) {

                $prevArrow = $(this).siblings('.map-points__slider-navigation').find('.slick-prev');
                $nextArrow = $(this).siblings('.map-points__slider-navigation').find('.slick-next');

                $(this).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    infinite: true,
                    autoplay: false,
                    swipe: true,
                    mobileFirst: true,
                    prevArrow: $prevArrow,
                    nextArrow: $nextArrow,

                    responsive: [
                        {
                          breakpoint: 768,
                          settings: "unslick"
                        }
                    ]
                });
            }
        });
    }


})(jQuery);