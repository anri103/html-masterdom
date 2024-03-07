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

const mobileCatalogMenuInvoker = document.querySelector('.mobile-catalog-menu__invoker');
const mobileOverlayMenuContent = document.querySelector('.mobile-overlay-menu__content');

mobileCatalogMenuInvoker.addEventListener('click', (e) => {
    e.preventDefault();
    toggleCatalogMenu();
    mobileCatalogMenuInvoker.classList.toggle('invoker--active');
});

function toggleCatalogMenu() {
    mobileOverlayMenuContent.classList.toggle('catalog--open');
}










// const body = document.body;
// const header = document.querySelector('.header');
// const stickyHeader = header.offsetTop;
// const headerHeight = header.offsetHeight;
const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const burger = document.querySelector('[data-burger]');
let subMenu;

window.addEventListener('load', function () {
    mainLinkMobile();
 })
 window.addEventListener('resize', function () {
    mainLinkMobile();
 })

menuSection.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) {
       return;
    }
    if (e.target.closest('.menu-item-has-children')) {
       const hasChildren = e.target.closest('.menu-item-has-children');
       showSubMenu(hasChildren);
    }
 });
 menuArrow.addEventListener('click', () => {
    hideSubMenu();
 });
 
 burger.addEventListener('click', (e) => {
    toggleMenu();
    burger.classList.toggle('burger--active');
 });
 
 function toggleMenu() {
    menu.classList.toggle('active');
    // header.classList.add('header-fixed');
    // header.classList.toggle('active-head');
    // body.classList.toggle('stop-scroll');
 }
 
 function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.menu-subs');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('svg').parentNode.childNodes[0].textContent;
    menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    menu.querySelector('.menu-mobile-header').classList.add('active');
 }
 function hideSubMenu() {
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
       subMenu.classList.remove('active');
    }, 300);
    menu.querySelector('.menu-mobile-title').innerHTML = '';
    menu.querySelector('.menu-mobile-header').classList.remove('active');
 }
 window.onresize = function () {
    if (this.innerWidth < 1200) {
       if (menu.classList.contains('active')) {
          toggleMenu();
       }
    }
 };
 
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
