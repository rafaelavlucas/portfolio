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



    // Works

    const works = [{
            title: "title",
            subtitle: "subtitle",
            label: "website",
            img: "assets/teste.jpg",
            alt: "alt",
            tools: "tools",
            description: "rgertgt",
            url: "",
        },
        {
            title: "title",
            subtitle: "subtitle",
            label: "website",
            img: "assets/teste.jpg",
            alt: "alt",
            tools: "tools",
            description: "rgertgt",
            url: "",
        },
        {
            title: "title",
            subtitle: "subtitle",
            label: "website",
            img: "assets/teste.jpg",
            alt: "alt",
            tools: "tools",
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
                <div class="works__toolsItems">${el.tools}</div>
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

    })

    const workItem = document.querySelectorAll(".works__item");

    workItem.forEach(function (el) {
        el.addEventListener("click", openWork);

    });

    function openWork(e) {
        const cenas = e.currentTarget.querySelector('.works__info').scrollHeight;
        workItem.forEach(function (el) {
            el.classList.remove("openWork");
            el.querySelector('.works__info').style.height = "0";
        });

        e.currentTarget.querySelector('.works__info').style.height += cenas + "px";
        e.currentTarget.classList.add("openWork");


        console.log(e.currentTarget.closest('.works__item'))
    }


}