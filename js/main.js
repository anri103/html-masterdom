// Кастомные выпадашки на мобильном меню
document.addEventListener('DOMContentLoaded', function () {
    const mobileSubmenuTogglers = document.querySelectorAll('.mobile-overlay-menu__menu .submenu-toggler');

    mobileSubmenuTogglers.forEach(toggler => {
        toggler.addEventListener('click', function () {
            const submenu = this.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle('submenu-open');
                this.classList.toggle('submenu-active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileCatalogMenuInvoker = document.querySelector('.mobile-catalog-menu__invoker');
    const mobileOverlayMenuContent = document.querySelector('.mobile-overlay-menu__content');

    if (mobileCatalogMenuInvoker && mobileOverlayMenuContent) {
        mobileCatalogMenuInvoker.addEventListener('click', function() {
            mobileCatalogMenuInvoker.classList.toggle('catalog-menu-active');
            mobileOverlayMenuContent.classList.toggle('catalog-menu-open');
        });

        // mobileOverlayMenuContent.addEventListener('click', function(event) {
        //     if (event.target.classList.contains('catalog-menu-toggle')) {
        //         mobileOverlayMenuContent.classList.toggle('catalog-menu-open');
        //     }
        // });
    }
});



//////////////////////////////////////////////////////////////////
// [ Swiper Sliders ]

var swiperHeroSlider = new Swiper(".swiperHeroSlider", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
        el: ".swiperHeroSlider-pagination",
    },
    navigation: {
        nextEl: ".swiperHeroSlider-next",
        prevEl: ".swiperHeroSlider-prev",
    },
});

var swiperCategoriesCircles = new Swiper(".swiperCategoriesCircles", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 32,
    grabCursor: true,
    freeMode: true,
    slidesOffsetBefore: 12,
    slidesOffsetAfter: 12,
    navigation: {
        nextEl: ".swiperCategoriesCircles-next",
        prevEl: ".swiperCategoriesCircles-prev",
    },
    breakpoints: {
        992: {
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
        },
    },
});

var swiperShopsLocation = new Swiper(".swiperShopsLocation", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperShopsLocation-next",
        prevEl: ".swiperShopsLocation-prev",
    },
});

var swiperBlogSlider = new Swiper(".swiperBlogSlider", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 22,
    grabCursor: true,
    freeMode: true,
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
