/**
 * Created by Alex on 04/09/2014.
 */
/**
 * Created by Alex on 04/09/2014.
 */
(function($) {

    $.fn.showDown = function() {
        var header         = $("body .navbar"),
            headerHeight   = header.height();

        $(window).scroll(function() {
            posScroll = $(document).scrollTop();
            if( posScroll >= headerHeight ){
                // Action on scroll down
                header.slideDown("slow");
            } else {
                // Action on scroll up
                header.hide();
            }
        });
    };

})(jQuery);


