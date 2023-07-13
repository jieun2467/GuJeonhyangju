var swiper = new Swiper(".main_banner", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".insta", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".insta-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});