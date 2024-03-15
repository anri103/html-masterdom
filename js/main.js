//////////////////////////////////////////////////////////////////
// [ Fixed headers ]

window.onscroll = function () {
    const windowScroll = window.scrollY;
    let fixedMenu;

    if (window.innerWidth >= 992) {
        // Для десктопов
        fixedMenu = document.querySelector('.fixed-header-desktop');
        if (fixedMenu) {
            if (windowScroll > 200) {
                fixedMenu.classList.add('js-fixed');
            } else {
                fixedMenu.classList.remove('js-fixed');
            }
        }
    } else {
        // Для мобильных устройств
        fixedMenu = document.querySelector('.fixed-header-mobile');
        if (fixedMenu) {
            if (windowScroll > 100) {
                fixedMenu.classList.add('js-fixed');
            } else {
                fixedMenu.classList.remove('js-fixed');
            }
        }
    }
};

//////////////////////////////////////////////////////////////////
// Клик по кнопкам, вызывающим всплывающие меню

const mobileToggle = document.querySelector('.navbar-mobile__offcanvas-toggle');
const desktopToggle = document.querySelector('.navbar-desktop__offcanvas-toggle');

function toggleOverflow(isExpanded) {
    document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
}

function handleToggleClick(e) {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    toggleOverflow(isExpanded);
}

mobileToggle.addEventListener('click', handleToggleClick);
desktopToggle.addEventListener('click', handleToggleClick);

//////////////////////////////////////////////////////////////////
// Кастомные выпадашки на мобильном меню

const mobileSubmenuTogglers = document.querySelectorAll('.mobile-main-menu-section .submenu-toggler');

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

const mobMainMenuBody = document.querySelector('.mobile-collapse-menu__body');
const mobCatalogInvoker = document.querySelector('.mobile-catalog-menu-invoker');
const mobMainMenu = document.querySelector('.mobile-collapse-menu__menu-container');
const mobCatalogMenu = document.querySelector('.mobile-collapse-menu__catalog-container');
const mobCatalogClose = document.querySelector('.mobile-catalog-menu-close');

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
const menuSection = document.querySelector('.mobile-catalog-menu-section');
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
// Кнопка "Нравится" у товаров

const likeButtons = document.querySelectorAll('.product-item__like-btn');

likeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        } else {
            button.classList.add('active');
        }
    });
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
    spaceBetween: 22,
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
    // slidesOffsetBefore: 12,
    // slidesOffsetAfter: 12,
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

Fancybox.bind("[fancybox-dialog]", {});
