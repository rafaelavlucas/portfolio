window.onload = function (e) {

    /*
        function splitTitle() {
            const titleWord = document.querySelector(".mainHeading__title"),
                titleSplit = titleWord.innerText.split("");


            // Title Split Characters
            setTimeout(() => {
                titleWord.innerHTML = "";
                titleSplit.forEach(function (el) {
                    let template = `
                  <span>${el}</span>`;
                    titleWord.style.opacity = "1";
                    titleWord.insertAdjacentHTML("beforeend", template);
                });
            }, 300);
        }


        
            function splitDescription() {
                const descriptionWord = document.querySelector(".mainHeading__description--one"),
                    descriptionSplit = descriptionWord.innerText.split("");

                //Split Characters

                setTimeout(() => {
                    descriptionWord.innerHTML = "";
                    descriptionSplit.forEach(function (el) {
                        let template = `
                      <span>${el}</span>`;
                        descriptionWord.style.opacity = "1";
                        descriptionWord.insertAdjacentHTML("beforeend", template);
                    });
                }, 1000);

            }

            function splitDescription2() {
                const descriptionWord2 = document.querySelector(".mainHeading__description--two"),
                    descriptionSplit2 = descriptionWord2.innerText.split("");

                //Split Characters
                setTimeout(() => {
                    descriptionWord2.innerHTML = "";
                    descriptionSplit2.forEach(function (el) {
                        let template = `
                      <span>${el}</span>`;
                        descriptionWord2.style.opacity = "1";
                        descriptionWord2.insertAdjacentHTML("beforeend", template);
                    });
                }, 1300);
            }

              splitDescription();
            splitDescription2();
            splitTitle();

            // Tilt Word Super
    const wordSuper = document.querySelector(".mainHeading__description--super");

    wordSuper.addEventListener("mouseover", tiltSuper)
    wordSuper.addEventListener("mouseout", tiltSuper)

    function tiltSuper() {
        if (wordSuper.classList.contains("tilt")) {
            setTimeout(() => {
                //wordSuper.classList.remove("tilt")
            }, 9000);
        } else {
            wordSuper.classList.add("tilt")
        }
    };
        */




    // Populate Works Content

    function worksContent() {
        const works = [{
                id: 0,
                title: "daily ui challenge",
                subtitle: "ui design and front-end development",
                label: "personal project",
                img: "assets/img_dailyui.jpg",
                alt: "alt",
                tools: [
                    "Figma", "HTML 5", "SASS", "Vanilla JS", "Chrome DevTools", "Github"
                ],
                description: "Daily UI is a series of daily design challenges and I decided to do this on my spare time, to improve my skills as a designer, and on top of that, as a coder. I usually start designing on Figma, and then I develop everything by myself. I think it's a good exercise, to know what I can improve in my design process, that will facilitate and favor my coding process.",
                url: "",
            },
            {
                id: 1,
                title: "quinta da valeira",
                subtitle: "ui design and front-end development",
                label: "website",
                img: "assets/img_valeira.jpg",
                alt: "alt",
                tools: [
                    "Figma", "HTML 5", "SASS", "Vanilla JS", "Chrome DevTools", "Github", "SEO"
                ],
                description: "Quinta da Valeira is a Premium Port Wine Brand based in the Douro Valley. I was responsible for the concept, reponsive User Interface Design, front-end development and SEO of this brand's website. It has a simple and clean design but with a couple of animations and interactions that help the user to have a better and more interesting experience.",
                url: "",
            },
            {
                id: 2,
                title: "movie app",
                subtitle: "ui design and front-end development",
                label: "personal project",
                img: "assets/img_movie.jpg",
                alt: "alt",
                tools: [
                    "HTML 5", "SASS", "Vanilla JS", "Chrome DevTools", "Github"
                ],
                description: "Movie. is a search engine mainly for movies. It started as an exercise in one of the Javascript classes at the company I work for, and I decided to bring it back to life again to improve it with some of the skills I've been acquiring since I finish those classes!",
                url: "",
            }, {
                id: 3,
                title: "catche",
                subtitle: "ui design and front-end development",
                label: "website",
                img: "assets/img_catche.jpg",
                alt: "alt",
                tools: [
                    "Figma", "HTML 5", "SASS", "Vanilla JS", "Chrome DevTools", "Github"
                ],
                description: "Website proposal for a concept brand named Catche. The brand's identity design was first created and then the website was designed directly with code. It was a personal project to help me pratice.",
                url: "",
            }, {
                id: 4,
                title: "codepen challenges",
                subtitle: "front-end development",
                label: "personal project",
                img: "assets/img_codepen.jpg",
                alt: "alt",
                tools: [
                    "HTML 5", "SASS", "Vanilla JS"
                ],
                description: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by theFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by the",
                url: "",
            }, {
                id: 5,
                title: "2048 game remake",
                subtitle: "css development",
                label: "website",
                img: "assets/img_2048.jpg",
                alt: "alt",
                tools: [
                    "SASS",
                    "HTML 5"
                ],
                description: "2048 game It's a puzzle game where the objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048. This project was made with my friend João Bairrada that build all the code and logic behind the game. I was resposible for the design and CSS Development including all the animations and micro-interactions.",
                url: "",
            }
        ];


        works.forEach(function (el) {

            let template = `
    <div class="works__item">
        <h4 class="works__title">${el.title} <span>${el.title}</span></h4>
        <h5 class="works__subtitle">${el.subtitle}</h5>
        <small class="works__label">${el.label}</small>
        <figure class="works__img"><img src="${el.img}" alt="${el.alt}"></figure>
        <div class="works__info">
            <div class="works__detail">
                <h6 class="works__subtitle2">tools and languages</h6>
                <div class="works__tools"></div>
            </div>
            <div class="works__detail">
                <h6 class="works__subtitle2">about project</h6>
                <p class="works__description">${el.description}</p>
            </div>
            <div class="works__link">
                <a href="${el.url}">view work</a>
            </div>
        </div>
    </div>`;

            document.querySelector(".works__list").insertAdjacentHTML("beforeend", template)

            el.tools.forEach(function (cenas) {
                let template2 = `<span>${cenas}</span>`;

                document.querySelectorAll(".works__tools")[el.id].insertAdjacentHTML("beforeend", template2);

            })
        })
    }

    // Open and Close Works

    function worksExpand() {
        const workItem = document.querySelectorAll(".works__item");
        document.querySelector("body").addEventListener("click", closeWork)

        workItem.forEach(function (el) {
            el.addEventListener("click", openWork);

        });

        function openWork(e) {
            const currentInfo = e.currentTarget.querySelector('.works__info');

            workItem.forEach(function (el) {
                el.classList.remove("openWork");
                el.querySelector('.works__info').style.height = "0";
            });

            currentInfo.style.height = currentInfo.scrollHeight + 'px'
            e.currentTarget.classList.add("openWork");
        }

        function closeWork(e) {
            if (e.target.closest(".works__item")) {
                return
            }
            workItem.forEach(function (el) {
                el.classList.remove("openWork");
                el.querySelector('.works__info').style.height = "0";
            });
        }
    }

    // To Anime Things on Scroll

    function scrollEffectHeading() {
        let scrolled = window.pageYOffset,
            rate = scrolled * 0.15,
            rate2 = scrolled * 0.2;

        //document.querySelector(".mainHeading__video").style.transform = 'translateX(' + rate2 + 'px)';
        document.querySelector(".mainHeading__text").style.transform = 'translateX(-' + rate + 'px)';
    }

    function scrollEffectTitles() {

        // Title Right
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y,
                        rate = scrolled * 0.05;
                    entry.target.style.transform = 'translateX(' + rate + 'px)';
                }
            });
        });
        // Title Left
        observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y;
                    rate = scrolled * 0.05,
                        entry.target.style.transform = 'translateX(-' + rate + 'px)';
                }
            });
        });
        // Line Right
        observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y,
                        rate = scrolled * 0.2;
                    entry.target.style.transform = 'translateX(-' + rate + 'px)';
                }
            });
        });
        // Line Left
        observer4 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y,
                        rate = scrolled * 0.2;
                    entry.target.style.transform = 'translateX(' + rate + 'px)';
                }
            });
        });
        document.querySelectorAll(".mainTitle.right span").forEach(el => observer.observe(el));
        document.querySelectorAll(".mainTitle.left span").forEach(el => observer2.observe(el));
        document.querySelectorAll(".mainTitle.right .line").forEach(el => observer3.observe(el));
        document.querySelectorAll(".mainTitle.left .line").forEach(el => observer4.observe(el));
    }

    function scrollEffectImg() {

        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y,
                        rate = scrolled * 0.05;
                    entry.target.style.transform = 'translateY(-' + rate + 'px)';
                }
            });
        });

        observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y,
                        rate = scrolled * 0.1;
                    entry.target.style.transform = 'translateY(' + rate + 'px)';
                }
            });
        });

        document.querySelectorAll(".about__img").forEach(el => observer.observe(el));
        document.querySelectorAll(".about__textContent").forEach(el => observer2.observe(el));

    }

    // Anime Modules on Viewport

    function animeModules() {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    setTimeout(() => {
                        entry.target.classList.add('anime');
                    }, 200);
                }
            });
        });

        document.querySelectorAll('.works__item').forEach(el => observer.observe(el));
        document.querySelectorAll('section').forEach(el => observer.observe(el));
        document.querySelectorAll('.mainTitle').forEach(el => observer.observe(el));
        document.querySelectorAll('.about__img img').forEach(el => observer.observe(el));
    }


    // Heading gets inner Height 
    if (window.innerWidth < 799) {
        document.querySelector(".mainHeading").style.height = window.innerHeight + "px";
    }

    //Call all functions
    worksContent();
    worksExpand();
    animeModules();


    window.onscroll = function () {
        scrollEffectHeading();
        scrollEffectTitles();
        scrollEffectImg();
    };


}