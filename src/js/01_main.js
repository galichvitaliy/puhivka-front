$('.btn_order_btn').on('click', function () {
    $('.popup_1').fadeIn("fast");
    $('body').toggleClass('body_popup');
});
$('.popup_close_mob, .popup_close').on('click', function () {
    $('.popup_1').fadeOut("fast");
    $('body').removeClass('body_popup');
});



$('.menu_btn').on('click', function () {
    $('.header__sec1').toggleClass('menu_m_active');
    $('body').toggleClass('body_m_fix');
});
$('.menu_close').on('click', function () {
    $('.header__sec1').removeClass('menu_m_active');
    $('body').removeClass('body_m_fix');
});



var swiper = new Swiper(".main_slider", {
    // navigation: false,
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    pagination: {
        el: ".main_m_b__pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});


var swiper = new Swiper(".catalog_slider", {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: 700,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    breakpoints: {
        0: {
            navigation: {
                nextEl: '.card_slid_next1, .card_slid_next2',
                prevEl: '.card_slid_prev1, .card_slid_prev2',
            },
        },
        768: {
            navigation: {
                nextEl: '.card_slid_next2',
                prevEl: '.card_slid_prev2',
            },
        },
    },
});

$('.faq__btn').on('click', function () {
    $(this).parent().toggleClass('faq_active');
});






// product slider
var galleryThumbs = new Swiper('.prodslider1', {
    observer: true,
    observeParents: true,
    slidesPerView: 6,
    spaceBetween: 21,
    mousewheel: true,
    freeMode: true,
    pagination: {
        el: ".prodslider2_pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            freeMode: true,
            watchSlidesProgress: true,
            autoHeight: true,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            freeMode: true,
            watchSlidesProgress: true,
            autoHeight: true,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            freeMode: true,
            watchSlidesProgress: true,
            autoHeight: true,
            spaceBetween: 21,
        },
        1500: {
            slidesPerView: 6,
            slidesPerGroup: 1,
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            freeMode: true,
            watchSlidesProgress: true,
            autoHeight: true,
            spaceBetween: 21,
        },
    },
})

var galleryMain = new Swiper('.prodslider2', {
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
})





$('.p_s_n_2, .plans_slider__next').on('click', function () {
    $('.p_s_1').removeClass('p_s_active');
    $('.plans_slider__prev').removeClass('p_s_b_active');
    $('.plans_slider__next').addClass('p_s_b_active');
    $('.p_s_2').addClass('p_s_active');
    $('.p_s_n_2').removeClass('plans_slider__nav_active');
    $('.p_s_n_1').addClass('plans_slider__nav_active');
});
$('.p_s_n_1, .plans_slider__prev').on('click', function () {
    $('.p_s_1').addClass('p_s_active');
    $('.plans_slider__prev').addClass('p_s_b_active');
    $('.plans_slider__next').removeClass('p_s_b_active');
    $('.p_s_2').removeClass('p_s_active');
    $('.p_s_n_2').addClass('plans_slider__nav_active');
    $('.p_s_n_1').removeClass('plans_slider__nav_active');
});



var lightbox = new PhotoSwipeLightbox({
    gallery: '.plans_slider__wrap',
    children: 'a',
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe 
});
lightbox.init();
