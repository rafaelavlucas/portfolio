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


    // Heading gets inner Height
    if (window.innerWidth < 799) {
        document.querySelector(".mainHeading").style.height = window.innerHeight + "px";
    }


    // Populate Works Content

    function worksContent() {
        const works = [{
                id: 0,
                title: "daily ui challenge",
                subtitle: "ui design and front-end development",
                label: "personal project",
                img: "assets/teste.jpg",
                alt: "alt",
                tools: [
                    "cenas1",
                    "teste1"
                ],
                description: "rgertgt",
                url: "",
            },
            {
                id: 1,
                title: "quinta da valeira",
                subtitle: "ui design and front-end development",
                label: "website",
                img: "assets/teste.jpg",
                alt: "alt",
                tools: [
                    "cenas2",
                    "teste2"
                ],
                description: "rgertgt",
                url: "",
            },
            {
                id: 2,
                title: "movie app",
                subtitle: "ui design and front-end development",
                label: "personal project",
                img: "assets/teste.jpg",
                alt: "alt",
                tools: [
                    "cenas3",
                    "teste3"
                ],
                description: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by theFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by the",
                url: "",
            }, {
                id: 3,
                title: "catche",
                subtitle: "ui design and front-end development",
                label: "website",
                img: "assets/teste.jpg",
                alt: "alt",
                tools: [
                    "cenas3",
                    "teste3"
                ],
                description: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by theFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by the",
                url: "",
            }, {
                id: 4,
                title: "codepen challenges",
                subtitle: "front-end development",
                label: "personal project",
                img: "assets/teste.jpg",
                alt: "alt",
                tools: [
                    "cenas3",
                    "teste3"
                ],
                description: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by theFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by the",
                url: "",
            }, {
                id: 5,
                title: "2048 game remake",
                subtitle: "css development",
                label: "website",
                img: "assets/teste.jpg",
                alt: "alt",
                tools: [
                    "cenas3",
                    "teste3"
                ],
                description: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by theFar far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by the",
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

    // To Anime Text on Scroll

    function scrollEffectHeading() {
        let scrolled = window.pageYOffset,
            rate = scrolled * 0.15,
            rate2 = scrolled * 0.2;

        document.querySelector(".mainHeading__video").style.transform = 'translateX(' + rate2 + 'px)';
        document.querySelector(".mainHeading__text").style.transform = 'translateX(-' + rate + 'px)';
    }

    function scrollEffectTitles() {

        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y;
                    rate = scrolled * 0.05,
                        entry.target.style.transform = 'translateX(' + rate + 'px)';
                    console.log(entry)
                }
            });
        });
        observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y;
                    rate = scrolled * 0.05,
                        entry.target.style.transform = 'translateX(-' + rate + 'px)';
                }
            });

        });
        observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y;
                    rate = scrolled * 0.3,
                        entry.target.style.transform = 'translateX(-' + rate + 'px)';
                }
            });

        });
        observer4 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let scrolled = entry.intersectionRect.y;
                    rate = scrolled * 0.3,
                        entry.target.style.transform = 'translateX(' + rate + 'px)';
                }
            });

        });
        document.querySelectorAll(".mainTitle.right span").forEach(el => observer.observe(el));
        document.querySelectorAll(".mainTitle.left span").forEach(el => observer2.observe(el));
        document.querySelectorAll(".mainTitle.right .line").forEach(el => observer3.observe(el));
        document.querySelectorAll(".mainTitle.left .line").forEach(el => observer4.observe(el));


    }


    // Anime Modules on Viewport
    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                setTimeout(() => {
                    entry.target.classList.add('anime');
                }, 200);
            }
        });
    });

    function animeModules() {

        document.querySelectorAll('.works__item').forEach(el => observer.observe(el));
        document.querySelectorAll('section').forEach(el => observer.observe(el));
        document.querySelectorAll('.mainTitle').forEach(el => observer.observe(el));
    }

    window.onscroll = function () {
        scrollEffectHeading();
        scrollEffectTitles();
    };

    worksContent();
    worksExpand();
    animeModules();

}