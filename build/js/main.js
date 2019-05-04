$( document ).ready(function() {

    // ease scroll on header link
    $('.scrolling').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500, 'linear');
        }
        return false;
    });


    $('#slider-header').slick({

            infinite: true,
            autoplay: true,
            fade: true,
            cssEase: 'linear',
            speed: 500,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            appendDots: ".slider-nav",
            arrows: true,
            appendArrows: ".slider-nav",
            prevArrow: "<buttton class='slick-prev slick-arrow'><i class='fas fa-arrow-up'></i></buttton>",
            nextArrow: "<buttton class='slick-next slick-arrow'><i class='fas fa-arrow-down'></i></buttton>"
        });

        $('#slider-complete').slick({
            infinite: true,
            autoplay: true,
            cssEase: 'linear',
            speed: 500,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendDots: ".complete-slider-nav",
            arrows: true,
            appendArrows: ".complete-slider-nav",
            prevArrow: "<buttton class='slick-prev slick-arrow'><i class='fas fa-arrow-left'></i></buttton>",
            nextArrow: "<buttton class='slick-next slick-arrow'><i class='fas fa-arrow-right'></i></buttton>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 630,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $(function () {

            $('[data-tab]').on('click', function (e) {
                $(this).addClass('active').siblings('[data-tab]').removeClass('active');
                $('.content').siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
                e.preventDefault();
            })

        });


    $('.map-title').on('click', function() {
       $(this).addClass('d-none');
       $('.map').addClass('open');

    });


    // $('.mob-nav').on(toggle(
    //     function() {
    //         $('.nav').addClass('open-nav');
    //     });

    //

    var nav = $('.nav');

    $('.mob-nav').on('click', function() {

        if( nav.hasClass('open-nav')) {
            nav.removeClass('open-nav')
        }
        else {
            nav.removeClass('open-nav');
            nav.addClass('open-nav');
        }
    });

    var submenu_ul = $('.submenu-ul');
    var submenu_i = $('.fa-chevron-circle-down');


    $('.submenu').on('click', function() {

        if( submenu_ul.hasClass('open-submenu')) {
            submenu_ul.removeClass('open-submenu');
            submenu_i.removeClass('circle-down-rotate');

        }
        else {
            submenu_ul.removeClass('open-submenu');
            submenu_ul.addClass('open-submenu');
            submenu_i.addClass('circle-down-rotate');
        }
    });
});



