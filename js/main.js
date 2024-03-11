//////////////////////////////////////////////////////////////////
// Кастомные выпадашки на мобильном меню
const mobileSubmenuTogglers = document.querySelectorAll('.mobile-main-menu__menu .submenu-toggler');

mobileSubmenuTogglers.forEach(toggler => {
    toggler.addEventListener('click', function () {
        const submenu = this.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('open');
            this.classList.toggle('submenu-active');
        }
    });
});

//////////////////////////////////////////////////////////////////
// Мобильное меню "Каталог"
const mobMainMenuBody = document.querySelector('.mobile-main-menu__body');
const mobCatalogInvoker = document.querySelector('.mobile-catalog-invoker');
const mobMainMenu = document.querySelector('.main-menu-container');
const mobCatalogMenu = document.querySelector('.catalog-menu-container');
const mobCatalogClose = document.querySelector('.catalog-menu-close');

mobCatalogInvoker.addEventListener('click', (e) => {
    e.preventDefault();
    showMobCatalogMenu();
});

function showMobCatalogMenu() {
    mobCatalogInvoker.classList.add('d-none');
    mobMainMenu.classList.remove('open');
    mobMainMenu.style.animation = 'slideRightReverse 0.5s ease forwards';
    mobCatalogMenu.classList.add('open');
    mobCatalogMenu.style.animation = 'slideLeft 0.5s ease forwards';
}

mobCatalogClose.addEventListener('click', (e) => {
    e.preventDefault();
    hideMobCatalogMenu();
});

function hideMobCatalogMenu() {
    mobCatalogInvoker.classList.remove('d-none');
    mobMainMenu.classList.add('open');
    mobMainMenu.style.animation = 'slideLeftReverse 0.5s ease forwards';
    mobCatalogMenu.classList.remove('open');
    mobCatalogMenu.style.animation = 'slideRight 0.5s ease forwards';
}

//////////////////////////////////////////////////////////////////
// Мобильное меню "Каталог", реализация многоуровневого перехода
const menuArrow = document.querySelector('.catalog-menu-cat-btn');
const menuSection = document.querySelector('.catalog-menu-section');
let subMenu;

const mainMobileLink = menuSection.querySelectorAll('.catalog-menu-item-has-children .catalog-menu-item__link');
mainMobileLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

menuSection.addEventListener('click', (e) => {
    if (e.target.closest('.catalog-menu-item-has-children')) {
        const hasChildren = e.target.closest('.catalog-menu-item-has-children');
        showSubMenu(hasChildren);
    }
});

menuArrow.addEventListener('click', () => {
    hideSubMenu();
});

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.catalog-menu-subs');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('svg').parentNode.childNodes[0].textContent;
    document.querySelector('.catalog-menu-cat-btn').classList.add('active');
    document.querySelector('.catalog-menu-cat-btn__title').innerHTML = menuTitle;
    mobCatalogClose.classList.add('d-none');
}

function hideSubMenu() {
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('active');
    }, 300);
    document.querySelector('.catalog-menu-cat-btn').classList.remove('active');
    document.querySelector('.catalog-menu-cat-btn__title').innerHTML = '';
    mobCatalogClose.classList.remove('d-none');
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
