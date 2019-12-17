window.addEventListener("load", event => {

    // Songs 
    let counter = 0;
    const songs = [{
            id: 0,
            img: 'https://rafaelalucas91.github.io/assets/images/img-46.jpeg',
            artistName: 'teste1',
            songName: 'teste2'
        },
        {
            id: 1,
            img: 'https://rafaelalucas91.github.io/assets/images/img-47.jpeg',
            artistName: 'teste3',
            songName: 'teste4'
        },

        {
            id: 2,
            img: 'https://rafaelalucas91.github.io/assets/images/img-48.jpeg',
            artistName: 'teste5',
            songName: 'teste6'
        },
    ];


    var swipperWrapper = document.querySelector('.swiper-wrapper');
    songs.forEach(function (el) {
        let template = `
        <div class="swiper-slide">
        <div class="albumCover"><img src="${el.img}"></div>
    <p class="artistName">${el.artistName}</p>
    <p class="songName">${el.songName}</p></div>`;
        swipperWrapper.insertAdjacentHTML('beforeend', template);

    })



    //Swiper


    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 800,
        allowTouchMove: false,
        effect: 'coverflow',

        coverflowEffect: {
            rotate: 40,
            slideShadows: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });


    //BG

    const imageBg = document.querySelector('.imageBg'),
        next = document.querySelector('.swiper-button-next'),
        prev = document.querySelector('.swiper-button-prev');

    next.addEventListener("click", changeBg);
    prev.addEventListener("click", changeBg);

    function changeBg() {
        imageBg.src = document.querySelector('.swiper-slide-active img').src;
    }

    changeBg();


    //Expand Top & Bottom

    var iconTopExpand = document.querySelector('.icon.topExpand'),
        iconBottomExpand = document.querySelector('.icon.bottomExpand'),
        topContent = document.querySelector('.topContent'),
        bottomContent = document.querySelector('.bottomContent');



    iconTopExpand.addEventListener("click", expandTop);
    iconBottomExpand.addEventListener("click", expandBottom);


    function expandTop() {
        if (topContent.classList.contains('expand')) {
            topContent.classList.remove('expand');
        } else {
            topContent.classList.add('expand');
        }
    }

    function expandBottom() {
        if (bottomContent.classList.contains('expand')) {
            bottomContent.classList.remove('expand');
        } else {
            bottomContent.classList.add('expand');
        }
    }


});