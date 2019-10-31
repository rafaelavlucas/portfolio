window.onload = function (e) {


    /* Sticky Go Back */
    var goBack = document.querySelector('.go-back');

    window.addEventListener('scroll', fixedGoBack)
    // calcular a altura do ecrã


    function fixedGoBack() {
        var body = document.querySelector('body');

        window.addEventListener('scroll', fixedGoBack)
        if (window.pageYOffset >= 190) {

            goBack.classList.add('fixed');

        } else {
            goBack.classList.add('not-fixed');

            setTimeout(() => {
                goBack.classList.remove('fixed');
                goBack.classList.remove('not-fixed');
            }, 200);
        }


        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            goBack.classList.remove('fixed');
            window.removeEventListener('scroll', fixedGoBack)
        } else {
            window.addEventListener('scroll', fixedGoBack)
        }

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

    function runScroll() {
        scrollTo(document.body, 0, 600);
    }
    var scrollme = document.querySelector("#scrollme");

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





}