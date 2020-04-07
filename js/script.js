window.onload = function (e) {

    const sections = [{
            title: "Portfolio",
            image: ["assets/portfolio1.jpg", "assets/portfolio2.jpg", "assets/portfolio3.jpg", "assets/portfolio4.jpg", "assets/portfolio5.jpg", "assets/portfolio6.jpg"],
            description: "Seleccion of works, featuring UI Design, branding, packaging and others. Get to know me!",
            url: "/portfolio",
            button: "enter",
            class: ""
        },
        {
            title: "Daily UI",
            image: ["assets/dailyui1.jpg", "assets/dailyui2.jpg", "assets/dailyui3.jpg", "assets/dailyui4.jpg", "assets/dailyui5.jpg", "assets/dailyui6.jpg"],
            description: "Daily UI Challenge progress, all designed and coded by myself.",
            url: "/dailyui",
            button: "enter",
            class: ""
        },
        {
            title: "Showreel",
            image: ["assets/showreel1.jpg", "assets/showreel2.jpg", "assets/showreel3.jpg", "assets/showreel4.jpg", "assets/showreel5.jpg", "assets/showreel6.jpg"],
            description: "Quick way to check most of my UI designs and interactions, all coded by me.",
            url: "#",
            button: "watch",
            class: "video"
        },
    ];

    const social = [{
            name: "Linkedin",
            icon: "assets/linkedin.svg",
            url: "https://www.linkedin.com/in/rafaelalucas",
        },
        {
            name: "Codepen",
            icon: "assets/codepen.svg",
            url: "https://codepen.io/rafaelavlucas",
        },
        {
            name: "Dribbble",
            icon: "assets/dribbble.svg",
            url: "https://dribbble.com/rafaelalucas",
        },
    ];

    const documents = [{
            name: "download CV",
            icon: "assets/download.svg",
            url: "assets/RafaelaLucas-CV.pdf",
        },
        {
            name: "send email",
            icon: "assets/email.svg",
            url: "mailto: rafaelavlucas@gmail.com",
        },
    ];
    const intro = document.querySelector('.intro'),
        socialItems = document.querySelector('.social');


    // Add the Intro Sections
    sections.forEach(function (el) {
        const randomImage = Math.floor(Math.random() * el.image.length);
        const template = `
        <a class="introItem ${el.class}" href="${el.url}" target="_blank">
            <figure class="introItem__image">
                    <img src="${el.image[randomImage]}" alt="">
            </figure>
            <div class="introItem__content">
                <h2 class="introItem__title">${el.title}</h2>
                <p class="introItem__text">${el.description}</p>
                <div class="introItem__button"><p>${el.button}</p><span></span></div>
            </div>
        </a>
        `;

        intro.insertAdjacentHTML("beforeend", template);

    })

    //Animate Intro Section on Hover
    const introItem = document.querySelectorAll('.introItem');
    introItem.forEach(function (el) {
        el.addEventListener("mouseover", animeIn);
        el.addEventListener("mouseleave", animeOut);
    })

    function animeIn(e) {
        introItem.forEach(function (el) {
            el.style.opacity = "0.5";
            el.style.transform = "scale(0.95)";
        });
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1)";
    };

    function animeOut() {
        introItem.forEach(function (el) {
            el.style.opacity = "1";
            el.style.transform = "scale(1)";
        });

    };


    // Add Social Media on footer

    social.forEach(function (el) {
        const template = ` 
        <a class="social__item" href="${el.url}" target="_blank">
        <img class="social__icon icon" src="${el.icon}" alt="${el.name}">
        </a>
        `;

        socialItems.insertAdjacentHTML("beforeend", template);
    })

    documents.forEach(function (el) {
        const template = ` 
        <a class="documents__item" href="${el.url}" target="_blank">
        <p class="documents__name">${el.name}</p>
        <img class="documents__icon icon" src="${el.icon}" alt="${el.name}">
        </a>
        `;

        document.querySelector('.documents').insertAdjacentHTML("beforeend", template);
    })

    // Make the wrapper 100vh on mobile
    if (window.innerWidth <= 899) {
        document.querySelector('#wrapper').style.height = window.innerHeight + "px";
    }


    //open Modal

    const btnVideo = document.querySelector('.video'),
        modalVideo = document.querySelector('.modal'),
        iconCloseVideo = document.querySelector('.modal__icon');

    btnVideo.addEventListener("click", openVideo);

    iconCloseVideo.addEventListener("click", closeVideo);


    function openVideo() {
        setTimeout(() => {
            modalVideo.classList.add('open');

        }, 300);

        body.style.overflow = "hidden";
    }

    function closeVideo() {
        modalVideo.classList.remove('open');
        body.style.overflow = "visible";
    };
    document.querySelector('.modal').style.height = window.innerHeight + "px";

};