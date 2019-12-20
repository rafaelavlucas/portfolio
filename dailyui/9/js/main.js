window.addEventListener("load", event => {
    ////////////////
    // Variables
    ////////////////

    const iconTopExpand = document.querySelector('.icon.topExpand'),
        iconBottomExpand = document.querySelector('.icon.bottomExpand'),
        topContent = document.querySelector('.topContent'),
        bottomContent = document.querySelector('.bottomContent'),
        playBtn = document.querySelector('.btnPlay'),
        musicGroups = document.querySelector('.swiper-wrapper.slider-two'),
        swipperWrapper = document.querySelector('.swiper-wrapper.slider-one'),
        imageBg = document.querySelector('.imageBg'),
        next = document.querySelector('.swiper-button-next'),
        prev = document.querySelector('.swiper-button-prev');

    // Songs 
    const songs = [{
            id: 0,
            img: 'covers/feist.jpg',
            artistName: 'Feist',
            songName: 'The Bad in Each Other',
            song: 'songs/song1.mp3'
        },
        {
            id: 1,
            img: 'covers/jain.jpg',
            artistName: 'Jain',
            songName: 'Makeba',
            song: 'songs/song2.mp3'
        },
        {
            id: 2,
            img: 'covers/alice.jpg',
            artistName: 'Alice Phoebe Lou',
            songName: 'Orbit',
            song: 'songs/song3.mp3'
        },
        {
            id: 3,
            img: 'covers/ohland.jpg',
            artistName: 'Oh Land',
            songName: 'Postpone the Bad',
            song: 'songs/song1.mp3'
        },
        {
            id: 4,
            img: 'covers/angele.jpg',
            artistName: 'Angèle',
            songName: 'La Loi de Murphy',
            song: 'songs/song2.mp3'
        },
        {
            id: 5,
            img: 'covers/broods.jpg',
            artistName: 'Broods',
            songName: 'Bridges',
            song: 'songs/song3.mp3'
        },
    ];

    // Music Groups
    const groups = [{
            title: "Songs",
            img: 'covers/img02.jpg'
        },
        {
            title: 'Artists',
            img: 'covers/img04.jpg'
        },
        {
            title: 'Playlists',
            img: 'covers/img03.jpg'
        },
        {
            title: 'Favourites',
            img: 'covers/img01.jpg'
        }
    ];

    // Playlists
    const playlists = [{
            title: "Pop Music",
            img: 'covers/img02.jpg'
        },
        {
            title: 'On the road!',
            img: 'covers/img04.jpg'
        },
        {
            title: 'Christmas Songs',
            img: 'covers/img03.jpg'
        },
        {
            title: 'Best covers',
            img: 'covers/img01.jpg'
        }
    ];

    ////////////////
    // Events
    ////////////////

    iconTopExpand.addEventListener("click", expandTop);
    iconBottomExpand.addEventListener("click", expandBottom);
    playBtn.addEventListener("click", playSong);


    ////////////////
    // Functions
    //////////////// 

    function playSong() {

        if (playBtn.classList.contains('pause')) {
            playBtn.classList.remove('pause');
            document.querySelector('.swiper-slide-active audio').pause();
        } else {
            playBtn.classList.add('pause');
            document.querySelector('.swiper-slide-active audio').play();
        }
        progressBar();
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
        progressBar();
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

    //Swiper Albums

    songs.forEach(function (el) {

        let template = `
        <div class="swiper-slide">
        <div class="settings">
                    <div class="icon heart"></div>
                    <div class="icon plus"></div>
                </div>
        <audio src="${el.song}"></audio>
        <div class="albumContent">
        <div class="albumCover"><img src="${el.img}"></div>
    <p class="artistName">${el.artistName}</p>
    <p class="songName">${el.songName}</p></div>
    <div class="playlistsContent">
    <div class="icon close"></div>
    </div>
    </div>`;

        swipperWrapper.insertAdjacentHTML('beforeend', template);
    });


    playlists.forEach(function (el) {
        let templatePlaylist = `
        <div class="playlist">
        <figure class="playlistBg"><img src="${el.img}"></figure>
        <figure class="playlistThumb"><img src="${el.img}"></figure>
        <p class="playlistTitle">${el.title}</p></div>`;

        var playlistContent = document.querySelectorAll('.playlistsContent');

        playlistContent.forEach(function (el) {
            el.insertAdjacentHTML('beforeend', templatePlaylist);
        })


    });


    var mySwiper = new Swiper(".swiper-container.slider-one", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
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

    // Change Song & Album BG
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
        progressBar();
        closePlaylists();
    }

    function changeBg() {


        setTimeout(() => {
            imageBg.src = document.querySelector('.slider-one .swiper-slide-active img').src;
            imageBg.classList.add('animeBg');
        }, 100);


        setTimeout(() => {
            imageBg.classList.remove('animeBg');
        }, 800);
    }

    // Music Groups

    for (let i = 0; i < groups.length; i++) {
        const {
            title,
            img,
        } = groups[i];


        var template2 =
            `<div class="swiper-slide group">
                <figure><img src="${img}"></figure>
                <p class = "titleGroup">${title}</p>
            </div>`;

        musicGroups.insertAdjacentHTML('beforeend', template2);
    }

    // Add favourites & Playlist

    const heart = document.querySelectorAll('.heart'),
        plus = document.querySelectorAll('.plus'),
        close = document.querySelectorAll('.close');

    heart.forEach(function (el) {
        el.addEventListener("click", addFave)
    })

    plus.forEach(function (el) {
        el.addEventListener("click", openPlaylists)
    })

    close.forEach(function (el) {
        el.addEventListener("click", openPlaylists)
    })

    function addFave(e) {
        if (e.currentTarget.classList.contains('fave')) {
            e.currentTarget.classList.remove('fave');
        } else {
            e.currentTarget.classList.add('fave');
        }
    }

    function openPlaylists(e) {
        if (e.currentTarget.closest('.swiper-slide-active').classList.contains('open')) {
            e.currentTarget.closest('.swiper-slide-active').classList.remove('open');
        } else {
            e.currentTarget.closest('.swiper-slide-active').classList.add('open');
        }
    }

    function closePlaylists() {
        document.querySelector('.swiper-slide-active').classList.remove('open');
    }

    // Song Progress Bar

    function formatTime(seconds) {
        minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
    }

    function progressBar() {
        var songDuration = document.querySelector('.swiper-slide-active audio').duration,
            endTime = document.querySelector('.endTime'),
            songAudio = document.querySelector('.swiper-slide-active audio'),
            currentTime = document.querySelector('.currentTime');

        endTime.innerHTML = formatTime(songDuration);

        songAudio.ontimeupdate = function () {

            var progress = document.querySelector('.progress');
            progress.style.width = ((songAudio.currentTime * 100) / songDuration) + "%"
            currentTime.innerHTML = formatTime(songAudio.currentTime);
        }

    };


    ////////////////
    // Call Functions
    //////////////// 

    changeBg();
    progressBar();

});