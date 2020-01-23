window.addEventListener("load", event => {

    const button = document.querySelector('.messageBox__button'),
        messageBox = document.querySelector('.messageBox');


    button.addEventListener('click', openBox);


    function openBox(event) {

        var teste1 = event.currentTarget;
        var teste2 = event.currentTarget;

        if (messageBox.classList.contains('openBox')) {
            messageBox.classList.remove('openBox')
        } else {
            messageBox.classList.add('openBox')
        }
    }

});