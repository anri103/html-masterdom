//////////////////////////////////////////////////////////////////
// [ Swiper Sliders ]

var swiperHeroSlider = new Swiper(".swiperHeroSlider", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiperHeroSlider-next",
        prevEl: ".swiperHeroSlider-prev",
    },
});

var swiperCategoriesCircles = new Swiper(".swiperCategoriesCircles", {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 32,
    grabCursor: true,
    slidesOffsetBefore: 12,
    slidesOffsetAfter: 12,
    navigation: {
        nextEl: ".swiperCategoriesCircles-next",
        prevEl: ".swiperCategoriesCircles-prev",
    },
    breakpoints: {
        // 768: {
        //     slidesPerView: 3,
        // },
        992: {
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
        },
    },
});

var swiperPopularProductsNav = new Swiper(".swiperPopularProductsNav", {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    centerInsufficientSlides: false,
    slidesOffsetBefore: 12,
    slidesOffsetAfter: 12,
    breakpoints: {
        992: {
            centerInsufficientSlides: true,
            spaceBetween: 32,
            slidesOffsetBefore: 12,
            slidesOffsetAfter: 12,
        },
    },
});

var swiperShopsLocation = new Swiper(".swiperShopsLocation", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
});

var swiperBlogSliderNav = new Swiper(".swiperBlogSliderNav", {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    centerInsufficientSlides: false,
    slidesOffsetBefore: 12,
    slidesOffsetAfter: 12,
    breakpoints: {
        992: {
            centerInsufficientSlides: true,
            spaceBetween: 32,
            slidesOffsetBefore: 12,
            slidesOffsetAfter: 12,
        },
    },
});

var swiperBlogSlider = new Swiper(".swiperBlogSlider", {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 22,
    grabCursor: true,
    slidesOffsetBefore: 12,
    slidesOffsetAfter: 12,
    navigation: {
        nextEl: ".swiperBlogSlider-next",
        prevEl: ".swiperBlogSlider-prev",
    },
    breakpoints: {
        992: {
            spaceBetween: 34,
        },
    },
});



//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        type: "classic",
    },
    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ["close"],
        },
    },
});