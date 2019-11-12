    /* Filters */

    var tagFilter = document.querySelectorAll(".filter"),
        tagFilterAll = document.querySelector(".filter.btn-all"),
        work = document.querySelectorAll(".work"),
        ze = document.querySelector('.image-container');

    tagFilter.forEach(function (el) {
        el.addEventListener("click", filterImages);
    });

    tagFilterAll.addEventListener("click", filterAll);

    function filterAll() {
        work.forEach(function (el) {
            el.classList.remove("hide");

        });
    }

    function filterImages(el) {
        var btnTarget = el.currentTarget,
            filterWork = btnTarget.dataset.filter,
            filters = document.querySelectorAll("#" + filterWork);


        work.forEach(function (el) {
            el.classList.add("hide");
            closeFiltersMobile();
        });

        tagFilter.forEach(function (el) {
            el.classList.remove("active-btn");
        });

        filters.forEach(function (el) {
            el.classList.remove("hide");
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