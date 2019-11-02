var works = [{
        title: "Quevedo Special Reserve Decanter",
        year: "2018",
        category: "Graphic Design & Packaging",
        url: "archive/quevedodecanter.html",
        thumb: "images/works/quevedodecanter/quevedodecanter_01.jpg",
    },
    {
        title: "Portobay Animated Icons",
        year: "2018",
        category: "Motion Graphics",
        url: "archive/portobayicons.html",
        thumb: "images/works/portobayicons/portobayicons.gif",
    },
    {
        title: "Circles Animation",
        year: "2017",
        category: "Motion Graphics",
        url: "archive/circlesanimation.html",
        thumb: "images/works/circlesanimation/circlesanimation.gif",
    },
    {
        title: "Solero Video Case",
        year: "2017",
        category: "Graphic Design & Illustration",
        url: "archive/solero.html",
        thumb: "images/works/solero/solero_03.jpg",
    },
    {
        title: "Quevedo T-Shirt 2017",
        year: "2017",
        category: "Illustration",
        url: "archive/quevedotshirt2017.html",
        thumb: "images/works/quevedotshirt2017/quevedotshirt2017_05.jpg",
    },
    {
        title: "Quevedo Business Cards",
        year: "2017",
        category: "Brand Identity",
        url: "archive/quevedocards.html",
        thumb: "images/works/quevedocards/quevedocards_05.jpg",
    },
    {
        title: "Prowein 2016 Poster",
        year: "2016",
        category: "Graphic Design",
        url: "archive/prowein2016.html",
        thumb: "images/works/prowein2016/prowein2016_01.jpg",
    },
    {
        title: "Fauna’s New Year postcard",
        year: "2015",
        category: "Arts & Crafts",
        url: "archive/faunapostcard.html",
        thumb: "images/works/faunapostcard/fauna_02.jpg",
    },
    {
        title: "Darwin Vineyards' Thank you Card",
        year: "2015",
        category: "Illustration",
        url: "archive/thankyoucard.html",
        thumb: "images/works/thankyoucard/thankyou_01.jpg",
    },
    {
        title: "Journal",
        year: "2014",
        category: "Editorial Design",
        url: "archive/journal.html",
        thumb: "images/works/journal/journal_01.jpg",
    },
    {
        title: "Crossline Type",
        year: "2014",
        category: "Type Design",
        url: "archive/crosslinefont.html",
        thumb: "images/works/crosslinefont/crosslinefont_02.jpg",
    },
    {
        title: "All The Buildings That I Can See From My Bedroom Window",
        year: "2014",
        category: "Illustration",
        url: "archive/allthebuildings.html",
        thumb: "images/works/allthebuildings/allthebuildings_00.jpg",
    },
    {
        title: "Twist Magazine",
        year: "2013",
        category: "Editorial Design",
        url: "archive/twistmagazine.html",
        thumb: "images/works/twistmagazine/twistmag_02.jpg",
    },
    {
        title: "Mouro",
        year: "2013",
        category: "Branding & Packaging",
        url: "archive/mouro.html",
        thumb: "images/works/mouro/mouro_11.jpg",
    },
    {
        title: "Better Off",
        year: "2013",
        category: "Illustration",
        url: "archive/betteroff.html",
        thumb: "images/works/betteroff/betteroff_01.jpg",
    },

];

var archive = document.querySelector('.archive');


for (let i = 0; i < works.length; i++) {
    const {
        title,
        year,
        category,
        thumb,
        url,
    } = works[i];


    var template = `<a class="work" href="${url}">
    <div class="image">
        <div class="img" style="background-image: url(${thumb})"></div>
        <p class=" overlay-title">${title}</p>
        <p class="overlay-text">${year} / ${category}</p>
    </div>
</a>`;

    archive.insertAdjacentHTML('beforeend', template);



}