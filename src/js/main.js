$(document).ready(function() {
    preloaderRemove();
    sortCatalogBtn();
    filterPopupInit();
    rangeSliderInit();
    faqCardCollapse();
    select2Init();
    inputLabel();
    tabsAccount();
    accountHistory();
    btnDetail();
    cardPageFavorites();

    function preloaderRemove() {
        $(document).ready(function() {
            window.onload = function () {
                $('#preloader').fadeOut(500, function(){
                    $('#preloader').remove();
                });
            }
        });
    }

    // header sticky
    var previousScroll = 0,
        menuOffset = 120,
        hideShowOffset = 0;

    function headerScroll() {
        $(window).scroll(function() {
            if (!$('.js-header-sticky').hasClass('expanded')) {
              var currentScroll = $(this).scrollTop(),
                  scrollDifference = Math.abs(currentScroll - previousScroll);
              if (currentScroll > menuOffset) {
                if (scrollDifference >= hideShowOffset) {
                  if (currentScroll > previousScroll) {
                    if (!$('.js-header-sticky').hasClass('is-sticky'))
                      $('.js-header-sticky').addClass('is-sticky');
                  } else {
                    if ($('.js-header-sticky').hasClass('is-sticky'))
                      $('.js-header-sticky').removeClass('is-sticky');
                  }
                }
              } else {
                if (currentScroll <= 0){
                  $('.js-header-scroll').removeClass('is-sticky');
                }
              }
              previousScroll = currentScroll;
            }
        });
    }

    headerScroll();

    // header menu toggle
    $('.js-header-nav-toggle').on('click', function (e) {
        $('body').toggleClass('is-menu-opened');
        $(this).toggleClass('is-active');
        $('.header__menu').toggleClass('is-show');
        e.preventDefault();
    });

    // header search toggle
    $('.js-header-search-toggle').on('click', function (e) {
        $(this).toggleClass('is-search-active');
        $('.header__nav-action-search').toggleClass('is-show');
        e.preventDefault();
    });

    // show phone btn scroll
    var header = $('.js-sc-contacts');
    var scrollChange = 340;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= scrollChange) {
            header.addClass('is-show');
        } else {
            header.removeClass("is-show");
        }
    });

    // good card favorites
    $('.js-good-card-favorites').on('click', function (e) {
        $(this).toggleClass('is-favorites-active');
        e.preventDefault();
    });

    // sort btn catalog
    function sortCatalogBtn() {
        var classes = ['is-active-1', 'is-active-2', 'is-active-3'],
            currentClass = 0;
        $('.js-sort-btn').on('click', function (e) {
            $(this).removeClass(classes[currentClass]);
            if (currentClass + 1 < classes.length) {
                currentClass += 1;
            }
            else {
                currentClass = 0;
            }
            $(this).addClass(classes[currentClass]);
            e.preventDefault();
        });
    }

    // range slider init
    function rangeSliderInit() {
        if ($('.js-range-init').length > 0) {
            var $slider = $('.js-range-init').get(0);
            var $min = $('.js-input-amount-min');
            var $max = $('.js-input-amount-max');
            var minVal = 0;
            var maxVal = 3000;
            var gap = 5;

            noUiSlider.create($slider, {
                start: [minVal - gap, maxVal + gap],
                connect: true,
                step: gap,
                range: {
                    'min': minVal - gap,
                    'max': maxVal + gap
                }
            });

            $slider.noUiSlider.on('update', function( values, handle ) {

                var value = Math.floor(values[handle]);

                if (handle) {
                    $max.get(0).value = value;
                } else {
                    $min.get(0).value = value;
                }

                $('.noUi-value-large').text(minVal);
                $('.noUi-value-large:last-child').text(maxVal);

                if ($min.get(0).value <= minVal || $min.get(0).value > maxVal){
                    $min.val(minVal);
                }
                if ($max.get(0).value <= minVal || $max.get(0).value > maxVal){
                    $max.val(maxVal);
                }

            });

            $min.get(0).addEventListener('change', function(){
                $slider.noUiSlider.set([this.value, null]);
            });

            $max.get(0).addEventListener('change', function(){
                $slider.noUiSlider.set([null, this.value]);
            });
        }
    }

    // faq card collapse
    function faqCardCollapse() {
        $('.js-faq-collapse').on('click', function (e) {
            $(this).parents().toggleClass('is-active');
            e.preventDefault();
        });
    }

    // filter popup init
    function filterPopupInit() {
        $('.js-filter-dropdown-main-init, .js-filter-dropdown-close').on('click', function (e) {
            $(this).toggleClass('is-active');
            $('body').toggleClass('is-filter-dropdown-opened');
            $('.filter-dropdown--main').toggleClass('is-show');
            e.preventDefault();
        });
    }

    // btn detail
    function btnDetail() {
        $('.js-btn-detail').on('click', function (e) {
            $(this).toggleClass('is-active');
            e.preventDefault();
        });
    }

    // card page favorites
    function cardPageFavorites() {
        $('.js-card-page-favorites').on('click', function (e) {
            $(this).toggleClass('is-favorites-active');
            e.preventDefault();
        });
    }

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
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    if ($('.js-card-slider-mini-init').length > 0) {
        $('.js-card-slider-mini-init').slick({
            arrows: true,
            infinite: false,
            dots: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: $('.js-card-slider-main-init'),
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        vertical: false,
                        verticalSwiping: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 5,
                        vertical: false,
                        verticalSwiping: false
                    }
                }
            ]
        });
    }

    if ($('.js-card-slider-main-init').length > 0) {
        $('.js-card-slider-main-init').slick({
            arrows: false,
            infinite: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: $('.js-card-slider-mini-init')
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
                                        breakpoint: 1199,
                                        settings: {
                                            slidesToShow: 4,
                                            slidesToScroll: 4,
                                            dots: true
                                        }
                                    },
                                    {
                                        breakpoint: 767,
                                        settings: {
                                            slidesToShow: 3,
                                            slidesToScroll: 3,
                                            dots: true
                                        }
                                    },
                                    {
                                        breakpoint: 576,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2,
                                            dots: true
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

    // input label
    $('.js-input-label').blur(function() {
        if ($(this).val() != '') {
            $(this).next('label').addClass('is-active');
        } else {
            $(this).next('label').removeClass('is-active');
        }
    });

    function inputLabel() {
        if ($('.js-input-label')[0]){
            $('.js-input-label').each(function (){
                if ($(this).val() != '') {
                    $(this).next('label').addClass('is-active');
                } else {
                    $(this).next('label').removeClass('is-active');
                }
            });
        }
    }

    // select2 init
    function select2Init() {
        if ($('.js-select-init')[0]){
            $('.js-select-init').select2({
                minimumResultsForSearch: Infinity,
                width: '100%'
            });
        }
    }

    // tabs account
    function tabsAccount() {
        $('.js-tabs-nav').click(function() {
            if($(this).hasClass('is-active')) {
                event.preventDefault();
            }
            else {
                $('.js-tabs-nav').removeClass('is-active');
                $(this).addClass('is-active');
                $('.js-tabs-content > div').removeClass('is-show');
                var activeTab = $(this).attr('href');
                $(activeTab).addClass('is-show');
                event.preventDefault();
            }
        });
    }

    // tabs account history
    function accountHistory() {
        $('.js-account-history-toggle').on('click', function (e) {
            $(this).parent().toggleClass('is-active');
            e.preventDefault();
        });
    }

    // modal sms
    $('.js-modal-init').on('click', function (e) {
        $('body').toggleClass('is-modal-opened');
        var currentModal = $(this).attr('href');
        $(currentModal).toggleClass('is-show');
        e.preventDefault();
    });

    $('.js-modal-close').on('click', function (e) {
        $('body').removeClass('is-modal-opened');
        $(this).parents('.modal').removeClass('is-show');
        e.preventDefault();
    });
});