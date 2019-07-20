window.onload = function (e) {

    /* Open Menu bar */

    var iconMenu = document.querySelector('.iconmenu'),
        iconOpen = document.querySelector('.iconopen'),
        navBar = document.querySelector('.nav');

    iconMenu.addEventListener('click', openNav);

    function openNav() {

        if (iconOpen.classList.contains('close')) {
            iconOpen.classList.remove('close');
        } else {
            iconOpen.classList.add('close');
        }

        if (navBar.classList.contains('navshow')) {
            navBar.classList.remove('navshow');
        } else {
            navBar.classList.add('navshow');
        }
    };
    /* end Open Menu bar */


    /* Dynamic footer Year */

    document.getElementById("year").innerHTML = new Date().getFullYear();
    /* end Dynamic footer Year */


    /* Back to top */

    function runScroll() {
        scrollTo(document.body, 0, 600);
    }
    var scrollme;
    scrollme = document.querySelector("#scrollme");
    scrollme.addEventListener("click", runScroll, false);

    function scrollTo(element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop == to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    };
    /* end Back to top */




    /* Filters */

    var tagFilter = document.querySelectorAll(".filter"),
        tagFilterAll = document.querySelector(".btn-all"),
        work = document.querySelectorAll(".work");


    tagFilter.forEach(function (el) {
        el.addEventListener("click", filterImages);

    });

    tagFilterAll.addEventListener("click", All);

    function All() {
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

        //workCount.forEach(function (el) {
        //  el.innerText = `${filterWork.length}`;
        // });

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
        closeFilters = document.querySelector(".close-filters");

    btnFilter.addEventListener("click", openFiltersMobile);
    closeFilters.addEventListener("click", closeFiltersMobile);

    function openFiltersMobile() {
        filtersContainer.classList.add('mobile');

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



    /* Sticky Go Back */




}