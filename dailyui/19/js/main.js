window.addEventListener("load", event => {


    const songs = [{
            title: "Break My Heart",
            artist: "Dua Lipa",
            image: "assets/dualipa.jpg",
            number: "1",
            plays: "340",
            score: "+3",
            totalPlays: "5432",
            hearts: "1452",
            class: "featured up"
        },
        {
            title: "Now I'm In It",
            artist: "HAIM",
            image: "assets/haim.jpg",
            number: "2",
            plays: "284",
            score: "+3",
            totalPlays: "4663",
            hearts: "1349",
            class: "list up"
        },
        {
            title: "Come Over",
            artist: "Dagny",
            image: "assets/dagny.jpg",
            number: "3",
            plays: "226",
            score: "+1",
            totalPlays: "4080",
            hearts: "582",
            class: "list up"
        },
        {
            title: "Why So Serious",
            artist: "Alice Merton",
            image: "assets/alicemerton.jpg",
            number: "4",
            plays: "185",
            score: "-2",
            totalPlays: "2683",
            hearts: "325",
            class: "list down"
        },
        {
            title: "Tu Me Regardes",
            artist: "Angèle",
            image: "assets/angele.jpg",
            number: "5",
            plays: "104",
            score: "-1",
            totalPlays: "1462",
            hearts: "238",
            class: "list down"
        },
    ];


    const songsContainer = document.querySelector(".songs");

    songs.forEach(function (el) {
        let template = `
        <div class="itemSong ${el.class}">
        <div class="itemSong__content">
        <span class="itemSong__number">${el.number}</span>
        <figure class="itemSong__image"><img src="${el.image}" alt=""></figure>
        <div class="itemSong__info">
            <div class="itemSong__text">
                <p class="itemSong__title">${el.title}</p>
                <p class="itemSong__artist">${el.artist}</p>
            </div>

            <p class="itemSong__plays">${el.plays}</p>

            <div class="itemSong__moreInfo">
                <div class="itemSong__moreItem">
                    <i class="itemSong__icon score"></i>
                    <p class="itemSong__iconLabel">${el.score}</p>
                </div>

                <div class="itemSong__counters">
                    <div class="itemSong__moreItem">
                        <i class="itemSong__icon heart"></i>
                        <p class="itemSong__iconLabel">${el.hearts}</p>
                    </div>
                    <div class="itemSong__moreItem">
                        <i class="itemSong__icon play"></i>
                        <p class="itemSong__iconLabel">${el.totalPlays}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>`;

        songsContainer.insertAdjacentHTML("beforeend", template);

    });

    const itemSong = document.querySelectorAll('.itemSong.list');

    itemSong.forEach(function (el) {
        el.addEventListener("mouseover", animeIn);
        el.addEventListener("mouseleave", animeOut);
    });

    function animeIn(e) {
        itemSong.forEach(function (el) {
            el.style.height = "8.70%";

            el.classList.add('animeIn');
        });
        e.currentTarget.style.height = "20%";

    };

    function animeOut() {
        itemSong.forEach(function (el) {
            el.style.height = "64px";
            el.classList.remove('animeIn');
        });

    };


    let template2 = `
    <div class="categories">
    <p>Songs</p>
    <p>Plays</p>
    </div>`;

    document.querySelector('.itemSong').insertAdjacentHTML("afterend", template2)

    if (window.innerWidth <= 460) {
        //document.querySelector('.container').style.height = window.innerHeight + "px";
        document.querySelector('.wrapper').style.height = window.innerHeight + "px";
    }





});