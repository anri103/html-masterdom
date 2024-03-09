// Кастомные выпадашки на мобильном меню
const mobileSubmenuTogglers = document.querySelectorAll('.mobile-main-menu__menu .submenu-toggler');

mobileSubmenuTogglers.forEach(toggler => {
    toggler.addEventListener('click', function () {
        const submenu = this.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('submenu-open');
            this.classList.toggle('submenu-active');
        }
    });
});

// Выпадашка "Каталог"

const mobMainMenuBody = document.querySelector('.mobile-main-menu__body');
const mobCatalogInvoker = document.querySelector('.mobile-catalog-invoker');
const mobCatalogClose = document.querySelector('.mobile-catalog-close');
const mobCatalogMenu = document.querySelector('.mobile-catalog-menu__wrapper');
const mobMainMenu = document.querySelector('.mobile-main-menu__wrapper');

mobCatalogInvoker.addEventListener('click', (e) => {
    e.preventDefault();
    showMobCatalogMenu();
});

function showMobCatalogMenu() {
    mobCatalogInvoker.classList.add('d-none');
    mobMainMenu.classList.add('d-none');
    mobCatalogMenu.classList.add('open');
}

mobCatalogClose.addEventListener('click', (e) => {
    e.preventDefault();
    hideMobCatalogMenu();
});

function hideMobCatalogMenu() {
    mobCatalogInvoker.classList.remove('d-none');
    mobMainMenu.classList.remove('d-none');
    mobCatalogMenu.classList.remove('open');
}





const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = document.querySelector('.menu-mobile-arrow');

let subMenu;

window.addEventListener('load', function () {
    mainLinkMobile();
})
window.addEventListener('resize', function () {
    mainLinkMobile();
})

menuSection.addEventListener('click', (e) => {
    // if (!menu.classList.contains('active')) {
    //    return;
    // }
    if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
});

menuArrow.addEventListener('click', () => {
    hideSubMenu();
});

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.menu-subs');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('svg').parentNode.childNodes[0].textContent;
    document.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    document.querySelector('.menu-mobile-header').classList.add('active');
    mobCatalogClose.classList.add('d-none');
}

function hideSubMenu() {
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('active');
    }, 300);
    document.querySelector('.menu-mobile-title').innerHTML = '';
    document.querySelector('.menu-mobile-header').classList.remove('active');
    mobCatalogClose.classList.remove('d-none');
}

function mainLinkMobile() {
    if (window.innerWidth < 1200) {
        const mainMobileLink = menu.querySelectorAll('.menu-item__link');
        mainMobileLink.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        })
    }
}




















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
