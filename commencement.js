!(function ($) {
    window.onload = function () {
        $('.grad-events').slick({
            infinite: true,
            slidesToShow: 1, 
            slidesToScroll: 1,
            dots: true,
            responsive: [
                {
                breakpoint: 600,
                settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
                }
                },
                {
                breakpoint: 300,
                settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
                }
                }
            ]
        });
        $('.quotes').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            slidesToShow: 3, 
            slidesToScroll: 1,
            mobileFirst: true, 
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
                },
                {
                breakpoint: 300,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
                }
            ]
        });
        $('.previous-events').slick({
            slidesToShow: 3, 
            slidesToScroll: 1,
            mobileFirst: true,
            autoplay: true,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
                }
                },
                {
                breakpoint: 300,
                settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
                }
                }
            ]
        });
        $('.awards').slick({
            arrows: false,
            autoplay: true,
            autoplayspeed: 10000,
            dots: true,
            slidesToShow: 2, 
            slidesToScroll: 1,
            mobileFirst: true,
            pauseOnDotsHover: true,
            pauseOnHover: true,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
                },
                {
                breakpoint: 300,
                settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
                }
                }
            ]
        });

        $(".grad-info").click(function() {
            $('html,body').animate({    
                scrollTop: $(".title-sub").offset().top},
                'slow');
        });

        $(".upcoming").click(function() {
            $('html,body').animate({
                scrollTop: $("#commencementTabs").offset().top},
                'slow');
            });
        };
})(jQuery);