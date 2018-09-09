$(function () {
    $("a.short-menu").click(function () {
        $(".mobileNavLinks").fadeIn();
        return false;
    });
    $("a.close-menu").click(function () {
        $(".mobileNavLinks").fadeOut();
        return false;
    });
    $("a.buttonWhite").click(function () {
        $(".contactFormWrapper").slideDown("slow");
        return false;
    });
    $("a.buttonClose").click(function () {
        $(".contactFormWrapper").slideUp("slow");
        return false;
    });
    $("a.scrollDown").click(function () {
        $('html, body').animate({
            scrollTop: $("section.about").offset().top
        }, 500);
        return false;
    });
    $("a.scrollUp").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);
            }
        });
        $('.counter').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object && !$(this).data('data-counter-started')) {

                $(this).countTo({ speed: 500, refreshInterval: 30 });
                $(this).data('data-counter-started', true);
            }
        });
        if ($(this).scrollTop() > 0) {
            $('a.scrollUp').fadeIn();
        } else {
            $('a.scrollUp').fadeOut();
        }
    });
    $('.progressive-image').unveil(-100);    
});

$(window).bind("resize", function () {
    /*
     * ukoliko smo kliknuli na menu icon, i mobilna navigacija se pojavila,
     * prilikom resize-a prozora u browseru, svi elementi ce se vratiti na svoju prvobitnu poziciju
     */
    $(".mobileNavLinks").css("display", "none");
});