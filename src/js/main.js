$(document).ready(function() {
    // header menu toggle
    $('.js-header-nav-toggle').on('click', function (e) {
        $('body').toggleClass('is-menu-opened');
        $(this).toggleClass('is-active');
        $('.header__menu').toggleClass('is-show');
        e.preventDefault();
    });

    // slick slider init
    if ($('.js-main-slider-init').length > 0) {
        $('.js-main-slider-init').slick({
            autoplay: true,
            arrows: false,
            infinite: true,
            dots: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: $('.main-slider__dots')
        });
    }

    if ($('.js-promotions-slider-init').length > 0) {
        $('.js-promotions-slider-init').slick({
            arrows: false,
            infinite: true,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        dots: true
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        });
    }

    if ($('.js-goods-slider-init').length > 0) {
        $('.js-goods-slider-init').slick({
            arrows: false,
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    goodsSliderMobileInit();
    function goodsSliderMobileInit() {
        if ($('.js-goods-slider-mobile-init')[0]){
            $(window).on('load resize orientationchange', function() {
                $('.js-goods-slider-mobile-init').each(function(){
                    var $carousel = $(this);
                    if ($(window).width() > 991) {
                        if ($carousel.hasClass('slick-initialized')) {
                            $carousel.slick('unslick');
                        }
                    }
                    else {
                        if (!$carousel.hasClass('slick-initialized')) {
                            $carousel.slick({
                                arrows: false,
                                infinite: true,
                                dots: true,
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                responsive: [
                                    {
                                        breakpoint: 767,
                                        settings: {
                                            slidesToShow: 3
                                        }
                                    },
                                    {
                                        breakpoint: 576,
                                        settings: {
                                            slidesToShow: 2
                                        }
                                    }
                                ]
                            });
                        }
                    }
                });
            });
        }
    }
});