window.onload = function (e) {


    // Sticky menu 

    var menuNav = document.querySelector('nav .navigation');

    window.onscroll = function () {

        if (window.pageYOffset >= 70) {
            menuNav.classList.add('sticky');

        } else {
            menuNav.classList.add('sticky-out');

            setTimeout(function () {
                menuNav.classList.remove('sticky');
                menuNav.classList.remove('sticky-out');
            }, 200);
        }
    }



    var nu = 1,
        nm = 1,
        im = 1,
        folder = "img";



    const items = [{
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.png`,
            desc: "Sign Up"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.png`,
            desc: "Credit Card Checkout"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.png`,
            desc: "Landing Page"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/placeholder.jpg`,
            desc: "teste"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/placeholder.jpg`,
            desc: "teste"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/placeholder.jpg`,
            desc: "teste"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/placeholder.jpg`,
            desc: "teste"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/placeholder.jpg`,
            desc: "teste"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/placeholder.jpg`,
            desc: "teste"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/placeholder.jpg`,
            desc: "teste"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/placeholder.jpg`,
            desc: "teste"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/placeholder.jpg`,
            desc: "teste"
        },
    ];

    function addItems() {
        var itemContainer = document.getElementById("dailyui-items");

        for (let i = 0; i => items.length; i++) {
            var name = items[i].name,
                img = items[i].image,
                desc = items[i].desc,
                url = items[i].url;

            var template = `
            <a href="${url}" target="_blank">
                <div class="item">
                    <article>
                        <h3 class="name">${name}</h3>
                        <p class="desc">${desc}</p>
                    </article>
                    <div class="image"> 
                        <img src="${img}">
                    </div>
                 </div>
            </a>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    addItems()



}