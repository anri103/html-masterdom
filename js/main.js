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

const invokerCatalogBtn = document.querySelector('.mobile-catalog-menu-invoker');
const closeCatalogBtn = document.querySelector('.mobile-catalog-menu-close');
const catalogContainer = document.querySelector('.mobile-collapse-menu__catalog-container');

invokerCatalogBtn.addEventListener('click', function() {
    catalogContainer.classList.add('open');
    catalogContainer.style.animation = 'slideLeft 0.5s ease forwards';
});

closeCatalogBtn.addEventListener('click', function() {
    setTimeout(() => {
        catalogContainer.classList.remove('open');
    }, 300);
    catalogContainer.style.animation = 'slideRight 0.5s ease forwards';
});

document.querySelectorAll('.catalog-menu-item__link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const subsBlock = link.nextElementSibling;
    subsBlock.classList.add('open');
    subsBlock.style.animation = 'slideLeft 0.5s ease forwards';
  });
});

document.querySelectorAll('.catalog-menu-subs-close').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const subsBlock = btn.parentElement;
    setTimeout(() => {
        subsBlock.classList.remove('open');
    }, 300);
    subsBlock.style.animation = 'slideRight 0.5s ease forwards';
  });
});

//////////////////////////////////////////////////////////////////
// На странице каталога кнопка, раскрывающая все фильтры

const hiddenSmartfilterBtn = document.getElementById('btn-toggle-hidden-smartfilter-wrapper');
const spanToChange = hiddenSmartfilterBtn.querySelector('span');

hiddenSmartfilterBtn.addEventListener('click', () => {
    const buttonText = spanToChange.textContent;
    
    if (buttonText === 'Все фильтры') {
        spanToChange.textContent = 'Свернуть фильтры';
    } else {
        spanToChange.textContent = 'Все фильтры';
    }
});

//////////////////////////////////////////////////////////////////
// Кнопка "Нравится" у товаров

const likeButtons = document.querySelectorAll('.product-item__like-btn');

likeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
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
