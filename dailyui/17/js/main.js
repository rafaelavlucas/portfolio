window.addEventListener("load", event => {

    const cta = document.querySelector('.cta'),
        container = document.querySelector('.container');


    cta.addEventListener("click", printReceipt);

    function printReceipt() {
        container.classList.add('anime');
        cta.innerHTML = "";
    }

});