window.onload = function (e) {


    /* Sticky Go Back */

    var goBack = document.querySelector('.go-back'),
        workDetail = document.querySelector('.work-detail');

    window.addEventListener('scroll', fixedGoBack);

    function fixedGoBack() {
        var body = document.querySelector('body');

        window.addEventListener('scroll', fixedGoBack)
        if (window.pageYOffset >= 190) {

            goBack ? goBack.classList.add('fixed') : "";

        } else {
            goBack ? goBack.classList.add('not-fixed') : "";

            setTimeout(() => {
                goBack ? goBack.classList.remove('fixed') : "";
                goBack ? goBack.classList.remove('not-fixed') : "";
            }, 200);
        }


        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            goBack ? goBack.classList.remove('fixed') : "";
            window.removeEventListener('scroll', fixedGoBack)
        } else {
            window.addEventListener('scroll', fixedGoBack)
        }
    }

    if (workDetail) {
        fixedGoBack();
    }


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
    var toTop = document.getElementById("scrollme");

    toTop.addEventListener("click", function () {
        scrollToTop(600);
    });

    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                } else clearInterval(scrollInterval);
            }, 15);
    }
    /* end Back to top */


    ///////// Animate Modules //////////
    var module = document.querySelectorAll('.content');
    var workImg = document.querySelectorAll('.work');

    function anime(element, animation) {
        $(element).each(function (i, el) {
            var el = $(el);
            if (el.is(':visible')) {
                el.addClass(animation);
            }
        });
    }

    var isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();

        if (bounding.top >= 0 && bounding.top + 50 <= (window.innerHeight || document.documentElement.clientHeight) && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            return true;
        }
    };

    function isModuleVisibleAnimation(el) {

        if (isInViewport(el)) {
            anime(el, 'anime');
            anime($(el).find('.section'), 'anime');
            anime($(el).find('.image-container .work'), 'anime');
        }



    }

    $(module).each(function (i, el) {
        isModuleVisibleAnimation(el);
    })

    $(window).scroll(function (event) {

        if (window.innerWidth >= 799) {
            $(module).each(function (i, el) {
                isModuleVisibleAnimation(el);
            })
        }
    });


}