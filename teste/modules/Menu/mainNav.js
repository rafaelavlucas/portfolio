window.addEventListener("load", event => {
    const mainNav = document.querySelector(".mainNav"),
        menuItemFirst = document.querySelectorAll(".mainNav__menuItem--first"),
        menuItemSecond = document.querySelectorAll(".mainNav__menuItem--second"),
        innerContent = document.querySelector(".mainNav__innerContent"),
        secondLevel = document.querySelectorAll(".mainNav__secondLevel"),
        thirdLevel = document.querySelectorAll(".mainNav__thirdLevel"),
        iconMenu = document.querySelector(".mainNav__iconMenu"),
        iconBackLevel1 = document.querySelectorAll(".mainNav__iconBack--level1"),
        iconBackLevel2 = document.querySelectorAll(".mainNav__iconBack--level2");

    // Events
    if (window.innerWidth > 760) {
        // Desktop
        menuItemFirst.forEach(function (el) {
            el.addEventListener("mouseover", openSecondLevel);
        });

        document.querySelector("body").addEventListener("mouseover", closeSecondLevel)
    } else {
        // Mobile
        menuItemFirst.forEach(function (el) {
            el.querySelector("a").style.pointerEvents = "none";
            el.addEventListener("click", openSecondLevel);
        });

        menuItemSecond.forEach(function (el) {
            el.querySelector("a").style.pointerEvents = "none";
            el.addEventListener("click", openThirdLevel);
        });

        iconBackLevel1.forEach(function (el) {
            el.addEventListener("click", goBackLevel1)
        });
        iconBackLevel2.forEach(function (el) {
            el.addEventListener("click", goBackLevel2)
        });

    }

    iconMenu.addEventListener("click", openMenuMobile);


    // Open and Close Second Level on Desktop

    function openSecondLevel(e) {

        const targetLink = e.currentTarget,
            target = targetLink.dataset.target,
            matchItems = document.querySelector("#" + target);

        menuItemFirst.forEach(function (el) {
            el.classList.remove("active");
        });

        secondLevel.forEach(function (el) {
            el.classList.remove("show");
            if (window.innerWidth > 760) {
                el.style.height = "0px";
                innerContent.classList.remove("show")
            }
        });

        matchItems.classList.add("show");
        innerContent.classList.add("show")

        if (window.innerWidth > 760) {
            matchItems.style.height = matchItems.scrollHeight + "px";
        }

        targetLink.classList.add("active");
    }

    function closeSecondLevel(e) {

        if (e.target.closest(".mainNav__menuItem")) {
            return
        } else if (e.target.closest(".mainNav__innerContent")) {
            return
        }
        secondLevel.forEach(function (el) {
            el.classList.remove("show");
            el.style.height = "0px";
        });
    }

    // Open Menu Mobile
    function openMenuMobile() {

        if (mainNav.classList.contains("openMobile")) {
            mainNav.classList.remove("openMobile")
            goBackLevel1();
            goBackLevel2();

        } else {
            mainNav.classList.add("openMobile")
        }
    }

    function openThirdLevel(e) {
        const targetLink = e.currentTarget,
            target = targetLink.dataset.target,
            matchItems = document.querySelector("#" + target);

        // secondLevel.forEach(function (el) {
        //     if (window.innerWidth > 760) {
        //         el.style.height = "0px";
        //         innerContent.classList.remove("show")
        //     }
        // });

        matchItems.classList.add("show");
        innerContent.classList.add("show")

        if (window.innerWidth > 760) {
            matchItems.style.height = matchItems.scrollHeight + "px";
        } else {

        }

        targetLink.classList.add("active");
    }

    // Go Back levels on Mobile
    function goBackLevel1() {
        secondLevel.forEach(function (el) {
            el.classList.remove("show");
        });
        innerContent.classList.remove("show");
    }

    function goBackLevel2() {
        thirdLevel.forEach(function (el) {
            el.classList.remove("show");
        });
    }


    // Sticky Nav Bar
    window.onscroll = function () {
        fixedBar();
    }

    function fixedBar() {
        if (window.pageYOffset >= 40) {
            mainNav.classList.add("fixedBar");

        } else {
            mainNav.classList.remove("fixedBar");
        }

    }




});