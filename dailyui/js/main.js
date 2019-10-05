window.onload = function (e) {

    var nu = 1,
        nm = 1,
        im = 1;



    const items = [{
            url: `${nu++}`,
            name: `${nm++}`,
            image: `assets/img-${im++}.jpeg`,
            desc: "Sign Up"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `assets/img-${im++}.jpeg`,
            desc: "Credit Card Checkout"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `assets/img-${im++}.jpeg`,
            desc: "Landing Page"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `assets/img-${im++}.jpeg`,
            desc: "teste"
        },

        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `assets/img-${im++}.jpeg`,
            desc: "laijito"
        }
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
                    <img src="${img}">
                 </div>
            </a>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    addItems()
}