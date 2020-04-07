// Skills

var skills = [{
        img: "images/icon_wine.svg",
        title: "Wine Labels"
    },
    {
        img: "images/icon_box.svg",
        title: "Packaging"
    },
    {
        img: "images/icon_book.svg",
        title: "Editorial Design"
    },
    {
        img: "images/icon_card.svg",
        title: "Branding"
    },
    {
        img: "images/icon_ui.svg",
        title: "UI Design"
    },
    {
        img: "images/icon_motion.svg",
        title: "Motion Graphics"
    }
];

var rowIcons = document.querySelector('.row-icons');

for (let i = 0; i < skills.length; i++) {
    const {
        img,
        title
    } = skills[i];


    var templateSkills = `
    <div class="icon-section">
        <img src="${img}" alt="${title}">
        <p>${title}</p>
    </div>`;

    rowIcons.insertAdjacentHTML('beforeend', templateSkills);

};

// Social

var social = [{
        img: "images/icons/linkedin.svg",
        title: "linkedin",
        url: "https://www.linkedin.com/in/rafaelalucas"
    },
    {
        img: "images/icons/dribbble.svg",
        title: "dribbble",
        url: "https://dribbble.com/rafaelalucas"
    },
    {
        img: "images/icons/codepen.svg",
        title: "codepen",
        url: "https://codepen.io/rafaelavlucas"
    },
    {
        img: "images/icons/vimeo.svg",
        title: "vimeo",
        url: "https://vimeo.com/rafaelalucas"
    }
];

var socialItems = document.querySelector('.social-items');

for (let i = 0; i < social.length; i++) {
    const {
        img,
        title,
        url,
    } = social[i];


    var templateSocial = `
        <a class="social" href="${url}" target="_blank"  rel="noopener">
            <img src="${img}" alt="${title}">
            <p class="social-title">${title}</p>
        </a>`;

    socialItems.insertAdjacentHTML('beforeend', templateSocial);

}