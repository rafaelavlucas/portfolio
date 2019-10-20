window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
            name: "Teste 1",
            role: "UI Designer",
            desc: "bigger text here",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            website: "website",
            email: "email",
            linkedin: "linkedin",
            dribbble: "dribbble",
        },
        {
            name: "Teste 2",
            role: "ui designer",
            desc: "bigger text here",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            website: "website",
            email: "email",
            linkedin: "linkedin",
            dribbble: "dribbble",
        },
        {
            name: "Teste 3",
            role: "ui designer",
            desc: "bigger text here",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            website: "website",
            email: "email",
            linkedin: "linkedin",
            dribbble: "dribbble",
        },
        {
            name: "Teste 4",
            role: "ui designer",
            desc: "bigger text here",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            website: "website",
            email: "email",
            linkedin: "linkedin",
            dribbble: "dribbble",
        },
    ];

    /* Social Icons */
    var icons = [{
        iWebsite: "/assets/link.svg",
        iEmail: "assets/email.svg",
        iLinkedin: "assets/linkedin.svg",
        iDribbble: "assets/dribbble.svg",
    }];

    var iWebsite = icons[0].iWebsite,
        iEmail = icons[0].iEmail,
        iLinkedin = icons[0].iLinkedin,
        iDribbble = icons[0].iDribbble;


    /* Function to populate the team members */
    function addTeam() {
        for (let i = 0; i < team.length; i++) {

            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                desc = team[i].desc,
                photo = team[i].photo,
                website = team[i].website,
                email = team[i].email,
                linkedin = team[i].linkedin,
                dribbble = team[i].dribbble;

            /* Template for the Team Cards */
            var template = `
                <div class="swiper-slide">
                <span class="bg"></span>
                <span class="more"></span>
                <figure class="photo"><img src="${photo}"></figure>
                    <article class="text">
                        <p class="name">${name}</p>
                        <p class="role">${role}</p> 
                        <p class="desc">${desc}</p> 
                    </article>
                    <div class="social">
                    <a class="icon" href="${website}"><img src="${iWebsite}"></a>
                    <a class="icon" href="${email}"><img src="${iEmail}"></a>
                    <a class="icon" href="${linkedin}"><img src="${iLinkedin}"></a>
                    <a class="icon" href="${dribbble}"><img src="${iDribbble}"></a>

                    </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();



    /* Swiper Settings */

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: true,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 40,
        threshold: 10,


        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1120: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        }
    });

    /* Show More */

    var btnShow = document.querySelectorAll('.more');


    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }

    }


    /* end */
});