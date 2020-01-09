window.addEventListener("load", event => {
    ////////////////
    // Variables
    ////////////////

    const images = [{
            img: 'assets/img01.png'
        },
        {
            img: 'assets/img02.png'
        },
        {
            img: 'assets/img03.png'
        },
        {
            img: 'assets/img04.png'
        },
        {
            img: 'assets/img05.png'
        },
        {
            img: 'assets/img06.png'
        },

    ];


    ////////////////
    // Events
    ////////////////






    ////////////////
    // Functions
    //////////////// 

    // Populate the images for Swiper

    images.forEach(function (el) {

        let template = `
        <div class="swiper-slide">
        <img src="${el.img}">
     </div>`;

        document.querySelectorAll('.swiper-wrapper').forEach(function (el) {
            el.insertAdjacentHTML('beforeend', template);
        })

    });


    // Make the slider function

    var galleryThumbs = new Swiper('.galleryThumbs', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryMain = new Swiper('.galleryMain', {
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });


});