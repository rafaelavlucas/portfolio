    /* Filters */

    var tagFilter = document.querySelectorAll(".filter"),
        tagFilterAll = document.querySelector(".filter.btn-all"),
        work = document.querySelectorAll(".work"),
        imgContainer = document.querySelector('.image-container');

    tagFilter.forEach(function (el) {
        el.addEventListener("click", filterImages);
    });

    tagFilterAll.addEventListener("click", filterAll);

    function filterAll() {
        work.forEach(function (el) {
            el.style.display = "block";
        });

    }

    function filterImages(el) {
        var btnTarget = el.currentTarget,
            filterWork = btnTarget.dataset.filter,
            filters = document.querySelectorAll("#" + filterWork);


        work.forEach(function (el) {
            el.style.display = "none";
            closeFiltersMobile();
        });

        tagFilter.forEach(function (el) {
            el.classList.remove("active-btn");
        });

        filters.forEach(function (el) {
            el.style.display = "block";
            closeFiltersMobile();
        });

        btnTarget.classList.add("active-btn");



        var label = document.querySelector(".label");

        if (filterWork != "all") {
            label.style.display = "block";
            label.innerText = `[${filterWork}]`;
        } else {
            label.style.display = "none";
        }

        // Call animation of click when Filter
        animeContainers(workImg, "animeWork");

    }

    /* Open Filters mobile */
    var filtersContainer = document.querySelector(".filters-container"),
        filtersContent = document.querySelector(".filters-container .filters"),
        btnFilter = document.querySelector(".btn-filter"),
        closeFilters = document.querySelector(".close-filters"),
        body = document.querySelector("body");

    btnFilter.addEventListener("click", openFiltersMobile);
    closeFilters.addEventListener("click", closeFiltersMobile);

    function openFiltersMobile() {
        filtersContainer.classList.add('mobile');
        body.classList.add('no-scroll');

        setTimeout(function () {
            filtersContainer.classList.add('anime-filters');
            filtersContent.classList.add('anime-tags');
        }, 10);
    }

    function closeFiltersMobile() {
        filtersContainer.classList.remove('anime-filters');
        filtersContent.classList.remove('anime-tags');

        setTimeout(function () {
            filtersContainer.classList.remove('mobile');
            body.classList.remove('no-scroll');
        }, 500);
    }


    /* Category count */
    var workCount = document.querySelectorAll(".work-count");

    /* 
    1 - graphic
    2 - ui
    3 - packaing
    4 - editorial
    5 - illustration
    */

    for (var i = 0; i < workCount.length; i++) {
        workCount[i].innerText = document.querySelectorAll(`.work[data-id="${i}"]`).length
    }

    workCount[0].innerText = `${work.length}`;



    // Animate Works

    var workImg = document.querySelectorAll('.work');

    const anime = (element, animation) => {
        if (element.offsetParent != null) {
            element.classList.add(animation)
        }
    }

    const isInViewport = (element) => {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.bottom >= 0 &&
            bounding.right >= 0 &&
            bounding.top <= document.documentElement.clientHeight &&
            bounding.left <= document.documentElement.clientWidth
        )
    };
    const isModuleVisbibleAnimation = (element, animation) => {
        if (isInViewport(element)) {
            if (window.innerWidth >= 800) {
                anime(element, animation);
            }
        }
    };
    // for viewport
    const animeContainers = (container, animation) => {

        container.forEach(item => {
            isModuleVisbibleAnimation(item, animation);
            if (item.children) {
                [...item.children].forEach(element => {
                    isModuleVisbibleAnimation(element, animation);
                })
            }
        })
    }