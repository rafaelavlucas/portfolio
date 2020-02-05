window.addEventListener("load", event => {

    const toggle = document.querySelector('.toggle'),
        wrapper = document.querySelector('.wrapper');

    toggle.addEventListener("click", addOn);

    function addOn() {
        if (toggle.classList.contains("on")) {
            toggle.classList.remove("on");
            toggle.dataset.theme = "";
            wrapper.classList.remove("active");
        } else {

            wrapper.classList.add("active");
            setTimeout(() => {
                toggle.dataset.theme = "on";
                toggle.classList.add("on");
            }, 200);
        }

    };

});