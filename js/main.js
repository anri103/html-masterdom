// const button = document.querySelector('.navbar-desktop__offcanvas-toggle');
// const body = document.querySelector('body');
// const overlayMenu = document.querySelector('.overlay-menu');

// button.addEventListener('click', function(e) {
//   e.preventDefault();
//   button.classList.toggle('js-active');
//   body.classList.toggle('overlay-menu-active');
//   overlayMenu.classList.toggle('js-open');
// });


// const getScrollbarWidth = () => {
//     const outer = document.createElement('div');
//     outer.style.visibility = 'hidden';
//     outer.style.width = '100px';
//     outer.style.position = 'absolute';
//     outer.style.overflow = 'scroll';
//     document.body.appendChild(outer);

//     const inner = document.createElement('div');
//     inner.style.width = '100%';
//     outer.appendChild(inner);

//     const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

//     outer.parentNode.removeChild(outer);

//     return scrollbarWidth;
// };

// const button = document.querySelector('.navbar-desktop__offcanvas-toggle');
// const body = document.querySelector('body');
// const overlayMenu = document.querySelector('.overlay-menu');

// let isOpen = false;

// button.addEventListener('click', function (event) {
//     event.preventDefault();
//     button.classList.toggle('js-active');
//     body.classList.toggle('overlay-menu-active');
//     overlayMenu.classList.toggle('js-open');

//     if (body.classList.contains('overlay-menu-active')) {
//         const scrollbarWidth = getScrollbarWidth();
//         body.style.paddingRight = `${scrollbarWidth}px`;
//     } else {
//         body.style.paddingRight = '';
//     }
// });


// Получаем содержимое первого контейнера
const container1 = document.getElementById('container1');
const contentToCopy = container1.cloneNode(true);

// Удаляем элемент, который нужно исключить (например, с id="exclude")
const elementToExclude = contentToCopy.querySelector('.navbar-desktop__menu-wrapper');
elementToExclude.remove();

// Вставляем оставшееся содержимое во второй контейнер
document.getElementById('container2').appendChild(contentToCopy);


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
