window.addEventListener("load", event => {

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

            //Swiper Music Goups
            var mySwiper2 = new Swiper(".swiper-container.slider-two", {
                // Optional parameters
                direction: 'horizontal',
                slidesPerView: 'auto',
                draggable: true
            });
        }
    }

    function expandBottom() {
        if (bottomContent.classList.contains('expand')) {
            bottomContent.classList.remove('expand');
        } else {
            bottomContent.classList.add('expand');
        }
    }

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

    var swipperWrapper = document.querySelector('.swiper-wrapper.slider-one');
    songs.forEach(function (el) {
        let template = `
        <div class="swiper-slide">
        <div class="albumCover"><img src="${el.img}"></div>
    <p class="artistName">${el.artistName}</p>
    <p class="songName">${el.songName}</p></div>`;
        swipperWrapper.insertAdjacentHTML('beforeend', template);
    })

    //Swiper Albums
    var mySwiper = new Swiper(".swiper-container.slider-one", {
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


    // Album BG
    const imageBg = document.querySelector('.imageBg'),
        next = document.querySelector('.swiper-button-next'),
        prev = document.querySelector('.swiper-button-prev');

    next.addEventListener("click", changeBg);
    prev.addEventListener("click", changeBg);

    function changeBg() {
        imageBg.src = document.querySelector('.slider-one .swiper-slide-active img').src;
    }

    changeBg();


    // Music Groups
    const musicGroups = document.querySelector('.swiper-wrapper.slider-two'),

        groups = [{
                title: "teste",
                img: 'https://rafaelalucas91.github.io/assets/images/img-18.jpeg'
            },
            {
                title: 'teste',
                img: 'https://rafaelalucas91.github.io/assets/images/img-18.jpeg'
            },
            {
                title: 'teste',
                img: 'https://rafaelalucas91.github.io/assets/images/img-18.jpeg'
            },
            {
                title: 'teste',
                img: 'https://rafaelalucas91.github.io/assets/images/img-18.jpeg'
            }
        ];

    for (let i = 0; i < groups.length; i++) {
        const {
            title,
            img,
        } = groups[i];


        var template2 =
            `<div class="swiper-slide group">
            <img src="${img}">
            <p class="titleGroup">${title}</p>
        </div>`;

        musicGroups.insertAdjacentHTML('beforeend', template2);
    }




});