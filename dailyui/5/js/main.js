window.addEventListener("load", event => {

    var container = document.querySelector('.container');

    var theme = ["", "dark", "light"];


    for (let i = 0; i < theme.length; i++) {


        var template = `<div class="icon-app">
<div class="icon" data-theme="${theme[i]}">
    <div class="actions">
        <span class="multiply"></span>
        <span class="divide"></span>
        <span class="minus"></span>
        <span class="plus"></span>
    </div>
</div>
</div>`;


        container.insertAdjacentHTML('beforeend', template);

    }





});