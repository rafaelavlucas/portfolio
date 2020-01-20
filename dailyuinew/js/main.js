window.onload = function (e) {


    // Sticky menu 

    var menuNav = document.querySelector('nav .navigation');

    window.onscroll = function () {

        if (window.pageYOffset >= 100) {
            menuNav.classList.add('sticky');

        } else {
            menuNav.classList.add('sticky-out');

            setTimeout(function () {
                menuNav.classList.remove('sticky');
                menuNav.classList.remove('sticky-out');
            }, 200);
        }
    }


    // Add Works

    var nu = 1,
        nm = 1,
        im = 1,
        folder = "img",
        total = 88;


    const items = [{
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Sign Up",
            color: "#786acd"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Credit Card Checkout",
            color: "#98111f"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Landing Page",
            color: "#8fb9c8"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Calculator [in progress...]",
            color: "#1a9991"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "App Icon",
            color: "#4d4d4d"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Profile",
            color: "#ff896e"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Settings",
            color: "#6442ca"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "404 Page",
            color: "#4e3767"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Music Player",
            color: "#ffbf0d"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Social Share",
            color: "#359ed2"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Flash Message",
            color: "#f39e87"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "E-Commerce Shop (Single Item)",
            color: "#F3615C"
        },

    ];

    const itemEmpty = [{
        name: `${nm}`,
        image: `${folder}/placeholder.jpg`,
        desc: "Coming soon"
    }];

    const itemContainer = document.getElementById("dailyui-items");


    function addItems() {

        for (let i = 0; i < items.length; i++) {
            var name = items[i].name,
                img = items[i].image,
                desc = items[i].desc,
                url = items[i].url,
                color = items[i].color;

            var template = `
            <a href="${url}" target="_blank"  rel="noopener">
                <div class="item">
                    <div class="description">
                    <div class="itemBg" style="background-color:${color}c2"></div>
                    <article>
                        <h3 class="name">${name}</h3>
                        <p class="desc">${desc}</p>
                    </article>
                    </div>
                    <div class="image"> 
                        <img src="${img}">
                    </div>
                 </div>
            </a>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    function addEmpty(total) {

        for (let i = 0; i < total; i++) {
            var name2 = itemEmpty[0].name++,
                img2 = itemEmpty[0].image,
                desc2 = itemEmpty[0].desc;

            var template = `
            <div class="empty">
                <div class="item">
                    <article>
                        <h3 class="name">${name2}</h3>
                        <p class="desc">${desc2}</p>
                    </article>
                    <div class="image"> 
                        <img src="${img2}">
                    </div>
                    </div>
                 </div>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    addItems()

    addEmpty(total);

    console.log(total)
}