window.addEventListener("load", event => {
    ////////////////
    // Variables
    ////////////////

    const card = document.querySelector('.card'),
        share = document.querySelector('.card__icon');

    ////////////////
    // Events
    ////////////////

    share.addEventListener('click', showShare);


    ////////////////
    // Functions
    //////////////// 

    function showShare() {
        if (card.classList.contains('show')) {
            card.classList.remove('show')
        } else {
            card.classList.add('show')
        }


    }

});