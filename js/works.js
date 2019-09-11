window.onload = function (e) {


    /* Sticky Go Back */
    var goBack = document.querySelector('.go-back');

    window.addEventListener('scroll', fixedGoBack)
    // calcular a altura do ecrã


    function fixedGoBack() {
        var body = document.querySelector('body')
        window.addEventListener('scroll', fixedGoBack)
        if (window.pageYOffset >= 190) {

            goBack.classList.add('fixed');

        } else {
            goBack.classList.remove('fixed');
        }


        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            goBack.classList.remove('fixed');
            window.removeEventListener('scroll', fixedGoBack)
        } else {
            window.addEventListener('scroll', fixedGoBack)
        }
        console.log(document.querySelector('body').scrollHeight - document.querySelector('body').scrollTop, document.querySelector('body').clientHeight + 270)
    }

}