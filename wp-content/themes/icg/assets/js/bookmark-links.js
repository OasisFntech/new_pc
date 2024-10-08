(function($){

    $(document).ready(function(){
        
        // Bookmark on same page

        $('a[href*="#"]:not([href="#"])').click(function(e) {

            if(this.hash == '#subscribeModal') { return; }

            if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
                
                var hash_target = $('[name=' + this.hash.slice(1) +']');
                var hash_target_string = '[name=' + this.hash.slice(1) + ']';

                if(hash_target.length) {
                    if(($('.icg-animated_hero_module').length || $('.icg-hero_post_module:not(.full-bleed)').length) && $('[data-scroll-container]').length && !isIE() && $(window).width() >= 992) {
                        loco_scroll.scrollTo(hash_target_string, { offset: -130 });
                    } else {
                        $('html,body').stop().animate({
                            scrollTop: hash_target.offset().top - 130
                        }, 'linear');
                    }
                }
            }
        });


    });

    $(window).on('load',function(){
        // Coming to bookmark from different page

        setTimeout(function(){
            var hash = window.location.hash;
        
            if ( hash == '' || hash == '#' || hash == undefined || hash == '#subscribeModal' ) return false;

            var hash_target = $('[name=' + hash.slice(1) +']');
            var hash_target_string = '[name=' + hash.slice(1) + ']';
     
            if (hash_target.length) {

                if(($('.icg-animated_hero_module').length || $('.icg-hero_post_module:not(.full-bleed)').length) && $('[data-scroll-container]').length && !isIE() && $(window).width() >= 992) {
                    loco_scroll.scrollTo(hash_target_string, { offset: -130 });
                } else {
                    $('html,body').stop().animate({
                        scrollTop: hash_target.offset().top - 130 //offsets for fixed header
                    }, 'ease-in');
                }
            }
        }, 250);
    });
    
})(jQuery);
