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
// Мега меню на десктопе

const megaMenuItems = document.querySelectorAll('.has-mega-menu');

megaMenuItems.forEach(item => {
    const navLink = item.querySelector('.nav-link');
    const megaMenu = item.querySelector('.mega-menu');

    item.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!megaMenu.matches(':hover')) {
                navLink.classList.remove('active');
                megaMenu.classList.remove('active');
            }
        }, 100);
    });

    item.addEventListener('mouseenter', () => {
        navLink.classList.add('active');
        megaMenu.classList.add('active');
    });
});

// Табы внутри мега меню на десктопе

const megaMenus = document.querySelectorAll('.mega-menu');

megaMenus.forEach(megaMenu => {
    const navTabs = megaMenu.querySelectorAll('.mega-menu__nav-tabs a');
    const tabPanes = megaMenu.querySelectorAll('.mega-menu__tab-pane');

    navTabs.forEach(tab => {
        tab.addEventListener('mouseover', () => {
            const targetTabId = tab.getAttribute('data-nav-tab');

            navTabs.forEach(navTab => {
                navTab.classList.remove('active');
            });
            tab.classList.add('active');

            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetTabId) {
                    pane.classList.add('active');
                }
            });
        });
    });
});

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

const mobileSubmenuTogglers = document.querySelectorAll('.submenu-toggler');

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

invokerCatalogBtn.addEventListener('click', function () {
    catalogContainer.classList.add('open');
    catalogContainer.style.animation = 'slideLeft 0.5s ease forwards';
});

closeCatalogBtn.addEventListener('click', function () {
    setTimeout(() => {
        catalogContainer.classList.remove('open');
    }, 300);
    catalogContainer.style.animation = 'slideRight 0.5s ease forwards';
});

document.querySelectorAll('.catalog-menu-item__link').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const subsBlock = link.nextElementSibling;
        subsBlock.classList.add('open');
        subsBlock.style.animation = 'slideLeft 0.5s ease forwards';
    });
});

document.querySelectorAll('.catalog-menu-subs-close').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const subsBlock = btn.parentElement;
        setTimeout(() => {
            subsBlock.classList.remove('open');
        }, 300);
        subsBlock.style.animation = 'slideRight 0.5s ease forwards';
    });
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

const wishlistBtn = document.querySelectorAll('.js-toggle-active');

wishlistBtn.forEach(function (button) {
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
    loop: true,
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

// product-item page

var swiperProductGalleryThumbs = new Swiper(".swiperProductGalleryThumbs", {
    slidesPerView: 4,
    spaceBetween: 12,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 6,
            spaceBetween: 12,
        },
    },
});
var swiperProductGalleryHero = new Swiper('.swiperProductGalleryHero', {
    slidesPerView: 1,
    spaceBetween: 12,
    grabCursor: true,
    thumbs: {
        swiper: swiperProductGalleryThumbs,
    },
    breakpoints: {
        992: {
            slidesPerView: 1,
            spaceBetween: 22,
        },
    },
});

// catalog page

var swiperRecommendProduct = new Swiper(".swiperRecommendProduct", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    freeMode: true,
    slidesOffsetBefore: 22,
    slidesOffsetAfter: 22,
    navigation: {
        nextEl: ".swiperRecommendProduct-next",
        prevEl: ".swiperRecommendProduct-prev",
    },
    breakpoints: {
        992: {
            spaceBetween: 22,
        },
    },
});

var swiperRecommendProduct02 = new Swiper(".swiperRecommendProduct02", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev",
    },
    breakpoints: {
        992: {
            spaceBetween: 22,
        },
    },
});

// Слайдер пользователей

var swiperUserCommentary = new Swiper(".swiperUserCommentary", {
    slidesPerView: 3.8,
    spaceBetween: 12,
    grabCursor: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
    },
});

// Слайдер коллекций

var swiperProductCollection = new Swiper(".swiperProductCollection", {
    slidesPerView: "auto",
    spaceBetween: 22,
    grabCursor: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiperProductCollection-next",
        prevEl: ".swiperProductCollection-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        992: {
            spaceBetween: 34,
        },
    },
});

// Слайдер каталогов

var swiperProductCatalog = new Swiper(".swiperProductCatalog", {
    slidesPerView: "auto",
    spaceBetween: 22,
    grabCursor: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiperProductCatalog-next",
        prevEl: ".swiperProductCatalog-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        992: {
            spaceBetween: 34,
        },
    },
});

// Слайдер подборки товаров

var swiperFeaturedProducts = new Swiper(".swiperFeaturedProducts", {
    slidesPerView: 2,
    spaceBetween: 18,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperFeaturedProducts-next",
        prevEl: ".swiperFeaturedProducts-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 34,
        },
    },
});

// Готовые решения

var swiperReadyMadeSolutions = new Swiper(".swiperReadyMadeSolutions", {
    slidesPerView: 1,
    spaceBetween: 18,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperReadyMadeSolutions-next",
        prevEl: ".swiperReadyMadeSolutions-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 22,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 34,
        },
    },
});

var swiperProductSertification = new Swiper(".swiperProductSertification", {
    slidesPerView: 2,
    spaceBetween: 18,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperProductSertification-next",
        prevEl: ".swiperProductSertification-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 34,
        },
    },
});

var swiperShopHero = new Swiper(".swiperShopHero", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 22,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiperShopHero-next",
        prevEl: ".swiperShopHero-prev",
    },
});

var swiperShopBrands = new Swiper(".swiperShopBrands", {
    slidesPerView: 2.15,
    spaceBetween: 32,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 7,
        },
    },
});

var swiperDesignersCircles = new Swiper(".swiperDesignersCircles", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 32,
    grabCursor: true,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev",
    },
});

var swiperSolutionItemGallery = new Swiper(".swiperSolutionItemGallery", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
    },
});

var swiperDesignerWork = new Swiper(".swiperDesignerWork", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 22,
        },
        992: {
            spaceBetween: 22,
        },
    },
});

var swiperCollectionItemHero = new Swiper(".swiperCollectionItemHero", {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
        nextEl: ".swiperCollectionItemHero-next",
        prevEl: ".swiperCollectionItemHero-prev",
    },
});

// swiperAbout

var swiperAbout = new Swiper('.swiperAbout', {
    spaceBetween: 12,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
});

/////////////

swiperAbout.on('transitionEnd', () => {
    const activeIndex = swiperAbout.activeIndex;
    const accordionButtons = document.querySelectorAll('#accordionAbout .accordion-button');
    const accordionCollapses = document.querySelectorAll('#accordionAbout .accordion-collapse');

    accordionButtons.forEach((button, index) => {
        if (index === activeIndex) {
            button.setAttribute('aria-expanded', 'true');
            button.classList.remove('collapsed');
            accordionCollapses[index].classList.add('show');
        } else {
            button.setAttribute('aria-expanded', 'false');
            button.classList.add('collapsed');
            accordionCollapses[index].classList.remove('show');
        }
    });
});

document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        swiperAbout.slideTo(target);
    });
});

var swiperProfileOrderCardGoodsList = new Swiper(".swiper-profile-order-card-goods-list", {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 12,
    grabCursor: true,
    freeMode: false,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 22,
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

//////////////////////////////////////////////////////////////////
// Табы на странице "Товара"

document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.custom-tab-nav-js .nav-link');
    let tabContents = document.querySelectorAll('.product-tab');
    let reviewLink = document.querySelector('.product-tab-link-js');
    let reviewsTab = document.getElementById('product-tab-reviews');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            if (!tab.classList.contains('active')) {
                tabs.forEach((node) => {
                    node.classList.remove('active');
                });
                tab.classList.add('active');

                tabContents.forEach((content) => {
                    content.classList.remove('show');
                });
                tabContents[index].classList.add('show');
            }
        });
    });

    reviewLink.addEventListener('click', (e) => {
        e.preventDefault();

        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tabs[2].classList.add('active');

        tabContents.forEach((content) => {
            content.classList.remove('show');
        });
        reviewsTab.classList.add('show');

        window.scrollTo({
            top: reviewsTab.offsetTop - 200,
            behavior: 'smooth'
        });
    });
});

//////////////////////////////////////////////////////////////////
// Enable bootstrap popovers and tooltips
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//////////////////////////////////////////////////////////////////
// Сетка на странице "Готовые решения"

const solutions = document.querySelectorAll('[id^="tab-solutions"]');

solutions.forEach((solution) => {
    const rows = solution.querySelectorAll('.row');

    rows.forEach((row) => {
        const cols = row.querySelectorAll(".col");

        cols.forEach((col, index) => {
            if (index > 2) {
                col.style.display = "none"; // Скрываем все элементы col, начиная с четвертого
            }
        });

        if (cols.length > 3) {
            const button = document.createElement("button");
            button.textContent = "Посмотреть все";
            button.classList.add("btn", "show-more-button");
            row.parentNode.appendChild(button);

            let isHidden = true; // Переменная для отслеживания состояния отображения элементов col

            button.addEventListener("click", function () {
                cols.forEach((col, index) => {
                    if (index > 2) {
                        col.style.display = isHidden ? "block" : "none"; // Переключаем отображение элементов col
                    }
                });

                isHidden = !isHidden; // Инвертируем значение переменной isHidden
                button.classList.toggle("active"); // Добавляем или удаляем класс active
            });
        }
    });
});

//////////////////////////////////////////////////////////////////
// Кнопка "Назад"

function goBack() {
    window.history.back();
}

//////////////////////////////////////////////////////////////////
// Страница "Оформление заказа"

document.addEventListener('DOMContentLoaded', function () {
    var allRadioCards = document.querySelectorAll('.checkout-radio-card');

    allRadioCards.forEach(function (card) {
        card.addEventListener('click', function () {
            if (!card.classList.contains('disabled')) {
                var radioInput = card.querySelector('.checkout-radio-card__radio-input');
                var radioGroupName = radioInput.getAttribute('name');

                document.querySelectorAll('input[name="' + radioGroupName + '"]').forEach(function (input) {
                    var parentCard = input.closest('.checkout-radio-card');
                    if (parentCard !== card) {
                        parentCard.querySelectorAll('input').forEach(function (input) {
                            if (input.type === 'checkbox') {
                                input.checked = false; // Снятие флага с checkbox
                            } else if (input.type === 'radio') {
                                input.checked = false; // Снятие флага с radio
                            }
                            input.value = ''; // Очистка значения поля input
                        });
                    }
                });

                radioInput.checked = true;
            }
        });

        card.querySelectorAll('input').forEach(function (input) {
            if (card.classList.contains('disabled')) {
                input.setAttribute('disabled', 'disabled');
            } else {
                input.removeAttribute('disabled');
            }
        });
    });
});

// Функция инициализации для проверки высоты текста и скрытия кнопки, если текст короткий
function initializeTextBlocks() {
    document.querySelectorAll(".hide-text-block").forEach((block) => {
        const hideTextContent = block.querySelector(".hide-text-content");
        const hideButton = block.querySelector(".toggle-hide-text");

        // Проверяем, нужно ли показывать кнопку
        if (hideTextContent.scrollHeight <= 90) { // 90px — начальная высота видимого текста
            hideButton.style.display = "none";
        } else {
            hideButton.style.display = "inline-block";
        }
    });
}

// Обработчик клика для кнопок
document.addEventListener("click", (event) => {
    const hideButton = event.target.closest(".toggle-hide-text");

    if (!hideButton) return;

    const hideTextContent = hideButton.previousElementSibling; // Блок текста перед кнопкой

    // Анимация раскрытия и скрытия текста
    if (hideTextContent.classList.contains("js-collapsed")) {
        // Раскрытие текста
        hideTextContent.style.height = `${hideTextContent.scrollHeight}px`; // Полная высота текста
        hideTextContent.classList.remove("js-collapsed");
        hideButton.classList.add("js-active");
    } else {
        // Скрытие текста
        hideTextContent.style.height = "90px"; // Возвращаем начальную видимую высоту
        hideTextContent.classList.add("js-collapsed");
        hideButton.classList.remove("js-active");
    }
});

// Запускаем проверку при загрузке страницы
document.addEventListener("DOMContentLoaded", initializeTextBlocks);
