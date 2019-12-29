window.addEventListener("load", event => {
    ////////////////
    // Variables
    ////////////////

    const content = document.querySelector('.content');


    // Cards Content

    const cards = [{
            label: "Adventure Travel",
            title: "Northern delights: a road trip along Iceland",
            img: "https://images.unsplash.com/photo-1506269351850-0428eaed2193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000"
        },
        {
            label: "Road Trips",
            title: "An epic playlist for your Iceland road trip",
            img: "https://images.unsplash.com/photo-1445882679958-91991ef6832f?ixlib=rb-1.2.1&w=1000"
        },
        {
            label: "Art and Culture",
            title: "Ten unmissable things to do in Reykjavík",
            img: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000"
        }
    ];

    // Social Media

    const social = [{
            icon: "assets/facebook.svg",
            alt: "Facebook"
        },
        {
            icon: "assets/linkedin.svg",
            alt: "Linkedin"
        },
        {
            icon: "assets/twitter.svg",
            alt: "Twitter"
        },
        {
            icon: "assets/instagram.svg",
            alt: "Instagram"
        }
    ];

    // Populate the Cards content with template

    cards.forEach(function (el) {
        const template = `
        <a class="card">
            <figure class="card__imageBg">
                <img src="${el.img}" alt="">
            </figure>
            <article class="card__text">
                <p class="card__label">${el.label}</p>
                <h2 class="card__title">${el.title}</h2>
            </article>
            <div class="card__share">
                <span class="card__icon"></span>
                <div class="card__shareBox">
                    <p class="card__titleShare">Share</p>
                    <p class="card__titleShare--done">Done!</p>
                    <div class="card__shareIcons">
                    </div>
                </div>
            </div>
        </a>`
        content.insertAdjacentHTML('beforeend', template);

    })

    // Populate the Social Icons content with template
    social.forEach(function (el) {
        const template = `
        <figure class="card__socialIcon">
            <img src="${el.icon}" alt="${el.alt}">
        </figure>`;

        const shareIcons = document.querySelectorAll('.card__shareIcons');
        shareIcons.forEach(function (el) {
            el.insertAdjacentHTML('beforeend', template);
        })
    })

    const share = document.querySelectorAll('.card__icon'),
        socialIcon = document.querySelectorAll('.card__socialIcon');


    ////////////////
    // Events
    ////////////////


    share.forEach(function (el) {
        el.addEventListener('click', showShare);
    })

    socialIcon.forEach(function (el) {
        el.addEventListener('click', showDone);
    })


    ////////////////
    // Functions
    //////////////// 

    function showShare(e) {
        var currentCard = e.currentTarget.closest(".card");

        if (currentCard.classList.contains('show')) {
            currentCard.classList.remove('show')
        } else {
            currentCard.classList.add('show')
        }
    }

    function showDone(e) {
        var currentCard = e.currentTarget.closest(".card");

        currentCard.classList.add('complete');

        e.currentTarget.classList.add('active');

        setTimeout(() => {
            currentCard.classList.remove('complete');
            socialIcon.forEach(function (el) {
                el.classList.remove('active')
            })
        }, 2000);

    }

});