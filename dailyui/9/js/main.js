window.addEventListener("load", event => {

    //Expand Top & Bottom

    var iconTopExpand = document.querySelector('.icon.topExpand'),
        iconBottomExpand = document.querySelector('.icon.bottomExpand'),
        topContent = document.querySelector('.topContent'),
        bottomContent = document.querySelector('.bottomContent'),
        playBtn = document.querySelector('.play');

    // Songs 
    let counter = 0;
    const songs = [{
            id: 0,
            img: 'https://rafaelalucas91.github.io/assets/images/img-46.jpeg',
            artistName: 'teste1',
            songName: 'teste2',
            song: '../songs/song1.mp3'
        },
        {
            id: 1,
            img: 'https://rafaelalucas91.github.io/assets/images/img-47.jpeg',
            artistName: 'teste3',
            songName: 'teste4',
            song: '../songs/song2.mp3'
        },

        {
            id: 2,
            img: 'https://rafaelalucas91.github.io/assets/images/img-48.jpeg',
            artistName: 'teste5',
            songName: 'teste6',
            song: '../songs/song3.mp3'
        },
    ];

    iconTopExpand.addEventListener("click", expandTop);
    iconBottomExpand.addEventListener("click", expandBottom);
    playBtn.addEventListener("click", playSong);

    function playSong() {

        if (playBtn.classList.contains('pause')) {
            playBtn.classList.remove('pause');
            document.querySelector('.swiper-slide-active audio').pause();
        } else {
            playBtn.classList.add('pause');
            document.querySelector('.swiper-slide-active audio').play();
        }
    }

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
        albumSize();
    }

    function expandBottom() {
        if (bottomContent.classList.contains('expand')) {
            bottomContent.classList.remove('expand');
        } else {
            bottomContent.classList.add('expand');
        }
        albumSize();
    }

    // change Album size

    function albumSize() {

        const albumContent = document.querySelectorAll('.albumContent');

        if (topContent.classList.contains('expand') && bottomContent.classList.contains('expand')) {

            albumContent.forEach(function (el) {
                el.classList.add('small');
            })
        } else {
            albumContent.forEach(function (el) {
                el.classList.remove('small');
            })
        }
    }

    var swipperWrapper = document.querySelector('.swiper-wrapper.slider-one');
    songs.forEach(function (el) {
        let template = `
        <div class="swiper-slide">
        <audio src="${el.song}"></audio>
        <div class="albumContent">
        <div class="albumCover"><img src="${el.img}"></div>
    <p class="artistName">${el.artistName}</p>
    <p class="songName">${el.songName}</p></div></div>`;
        swipperWrapper.insertAdjacentHTML('beforeend', template);
    })

    //Swiper Albums
    var mySwiper = new Swiper(".swiper-container.slider-one", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
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

    next.addEventListener("click", changeSong);
    prev.addEventListener("click", changeSong);

    function changeSong() {

        if (playBtn.classList.contains('pause')) {
            document.querySelectorAll('audio').forEach(function (el) {
                el.pause()
            });
            document.querySelector('.swiper-slide-active audio').play();
        }
        changeBg();

    }

    function changeBg() {
        imageBg.src = document.querySelector('.slider-one .swiper-slide-active img').src;
        imageBg.classList.add('animeBg');

        setTimeout(() => {
            imageBg.classList.remove('animeBg');
        }, 800);
    }

    changeBg();


    // Music Groups
    const musicGroups = document.querySelector('.swiper-wrapper.slider-two'),

        groups = [{
                title: "Songs",
                img: 'https://rafaelalucas91.github.io/assets/images/img-19.jpeg'
            },
            {
                title: 'Artists',
                img: 'https://rafaelalucas91.github.io/assets/images/img-20.jpeg'
            },
            {
                title: 'Playlists',
                img: 'https://rafaelalucas91.github.io/assets/images/img-18.jpeg'
            },
            {
                title: 'Favourites',
                img: 'https://rafaelalucas91.github.io/assets/images/img-30.jpeg'
            }
        ];

    for (let i = 0; i < groups.length; i++) {
        const {
            title,
            img,
        } = groups[i];


        var template2 =
            `<div class="swiper-slide group">
            <figure>
                <img src="${img}">
            </figure>
            <p class="titleGroup">${title}</p>
        </div>`;

        musicGroups.insertAdjacentHTML('beforeend', template2);
    }






});