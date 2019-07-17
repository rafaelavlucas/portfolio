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

    var btnFilter = document.querySelectorAll(".filter"),
        btnFilterAll = document.querySelector(".btn-all"),
        work = document.querySelectorAll(".work");


    btnFilter.forEach(function (el) {
        el.addEventListener("click", filterImages);
    });

    btnFilterAll.addEventListener("click", showAll);

    function showAll() {

        work.forEach(function (el) {
            el.classList.add("show");
        });
    }

    function filterImages(el) {
        var btnTarget = el.currentTarget;
        var filterWork = btnTarget.dataset.filter;
        var filters = document.querySelectorAll("#" + filterWork);

        work.forEach(function (el) {
            el.classList.remove("show");
        });

        btnFilter.forEach(function (el) {
            el.classList.remove("active-btn");
        });

        filters.forEach(function (el) {
            el.classList.add("show");
        });

        btnTarget.classList.add("active-btn");
    }




}