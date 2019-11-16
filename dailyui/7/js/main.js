window.addEventListener("load", event => {

    var icon = document.querySelector('.icon'),
        left = document.querySelector('.left');


    icon.addEventListener('click', expand);

    function expand() {
        if (left.classList.contains('show')) {
            left.classList.remove('show')
        } else {
            left.classList.add('show')
        }
    }
});