window.onload = function (e) {


    // Sticky menu 

    var menuNav = document.querySelector('.mainNav'),
        itemContainer = document.querySelector(".dailyItems");

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
        total = 82;


    const items = [{
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Sign Up",
            color: "#8988cc"
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
            color: "#6aa0b6"
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
            color: "#b0b0b3"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Profile",
            color: "#e28473"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Settings",
            color: "#8160de"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "404 Page",
            color: "#61378a"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Music Player",
            color: "#e2a902"
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
            color: "#62ccb9"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "E-Commerce Shop (Single Item)",
            color: "#F3615C"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Direct Messaging",
            color: "#60c4c7"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Countdown Timer",
            color: "#fe9014"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "On/Off Switch",
            color: "#1db0b9"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Pop-Up / Overlay",
            color: "#5d48c9"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Email Receipt",
            color: "#435072"
        },
        {
            url: `${nu++}`,
            name: `${nm++}`,
            image: `${folder}/dailyui-${im++}.jpg`,
            desc: "Analytics Chart",
            color: "#70d3b2"
        },
    ];

    const itemEmpty = [{
        name: `${nm}`,
        image: `${folder}/placeholder.jpg`,
        desc: "Coming soon",
        color: "#000000"
    }];


    function addItems() {

        for (let i = 0; i < items.length; i++) {
            var name = items[i].name,
                img = items[i].image,
                desc = items[i].desc,
                url = items[i].url,
                color = items[i].color;

            var template = `
            <a href="${url}" target="_blank"  rel="noopener" class="dailyItem">
            
                    <div class="dailyItem__content">
                    <div class="dailyItem__itemBg" style="background-color:${color}f0"></div>
                    <article class="dailyItem__text">
                        <h3 class="dailyItem__name">#${name}</h3>
                        <p class="dailyItem__desc">${desc}</p>
                    </article>
                    </div>
                    <div class="dailyItem__image"> 
                        <img src="${img}">
                    </div>
                
            </a>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    function addEmpty(total) {

        for (let i = 0; i < total; i++) {
            var name2 = itemEmpty[0].name++,
                img2 = itemEmpty[0].image,
                desc2 = itemEmpty[0].desc,
                color2 = itemEmpty[0].color;

            var template = `
            <div class="dailyItem">
                    <div class="dailyItem__content">
                    <div class="dailyItem__itemBg" style="background-color:${color2}70"></div>
                    <article class="dailyItem__text">
                        <h3 class="dailyItem__name">#${name2}</h3>
                        <p class="dailyItem__desc">${desc2}</p>
                    </article>
                    </div>
                    <div class="dailyItem__image"> 
                        <img src="${img2}">
                    </div>
            </div>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    addItems();

    addEmpty(total);

}