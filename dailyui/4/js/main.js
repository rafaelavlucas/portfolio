window.addEventListener("load", event => {

    var toggle = document.querySelector('.toggle'),
        calculator = document.querySelector('.calculator');

    toggle.addEventListener("click", changeMode);

    function changeMode() {

        if (toggle.classList.contains('off')) {
            toggle.classList.remove('off');
            calculator.setAttribute('data-theme', 'light')
        } else {
            toggle.classList.add('off');
            calculator.setAttribute('data-theme', 'dark')
        }
    }

});