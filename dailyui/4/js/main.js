window.addEventListener("load", event => {

    // flip Calcuclator
    var toggle = document.querySelector('.toggle'),
        calculator = document.querySelector('.calculator');

    toggle.addEventListener("click", changeMode);

    function changeMode() {

        if (toggle.classList.contains('off')) {
            toggle.classList.remove('off');
            calculator.classList.add('flip-in');
            setTimeout(() => {
                calculator.classList.remove('flip-in');
                calculator.classList.add('flip-out');
                calculator.setAttribute('data-theme', 'light')
            }, 200);
            setTimeout(() => {
                calculator.classList.remove('flip-out');
            }, 300);


        } else {
            toggle.classList.add('off');
            calculator.classList.add('flip-in');
            setTimeout(() => {
                calculator.classList.remove('flip-in');
                calculator.classList.add('flip-out');
                calculator.setAttribute('data-theme', 'dark')

            }, 200);

            setTimeout(() => {
                calculator.classList.remove('flip-out');
            }, 300);


        }
    }


    // get numbers

    var input = document.querySelector('input'),
        key = document.querySelectorAll('.key'),
        currentKey = key.target;


    key.forEach(function (el) {
        el.addEventListener('click', getNumbers);
    })

    console.log(key.innerText)

    function getNumbers(e) {
        var currentKey = e.currentTarget;

        input.value = currentKey.innerHTML;

    }

});