window.addEventListener("load", event => {

    var toggle = document.querySelector('.toggle'),
        calculator = document.querySelector('.calculator');

    toggle.addEventListener("click", changeMode);

    function changeMode() {

        if (toggle.classList.contains('off')) {
            toggle.classList.remove('off');

            calculator.classList.remove('flip-out');
            setTimeout(() => {
                calculator.classList.remove('flip-in');
                calculator.setAttribute('data-theme', 'light')
            }, 500);

        } else {
            toggle.classList.add('off');
            calculator.classList.add('flip-in');
            setTimeout(() => {
                calculator.classList.remove('flip-in');
                calculator.classList.add('flip-out');
                calculator.setAttribute('data-theme', 'dark')
            }, 500);


        }
    }

});