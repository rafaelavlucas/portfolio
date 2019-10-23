var works = [{
        categoryId: 2,
        title: "Daily UI Challenge",
        year: "On going",
        category: "UI Design, Front-End Development",
        url: "/dailyui",
        thumb: "images/works/dailyui/dailyui_00.jpg",
        fullClass: true,
        featured: true,
    },
    {
        categoryId: 2,
        title: "Quinta da Valeira Website",
        year: "2019",
        category: "UI Design, Front-End Development",
        thumb: "images/works/valeirawebsite/valeirawebsite_01.jpg",
        url: "works/valeirawebsite.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 2,
        title: "Weather App",
        year: "2019",
        category: "UI Design",
        thumb: "images/works/weatherapp/weatherapp_01.jpg",
        url: "works/weatherapp.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 3,
        title: "Quinta da Valeira",
        year: "2018",
        category: "Label Design & Branding",
        thumb: "images/works/valeira/valeira_09.jpg",
        url: "works/valeira.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 3,
        title: "Quevedo Advent Calendar 2017 / 2018",
        year: "2017-2018",
        category: "Packaging, Graphic Design & Illustration",
        thumb: "images/works/quevedoadvent2018/quevedo_advent2018_03.jpg",
        url: "works/quevedoadvent2018.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 3,
        title: "Quevedo Vintage",
        year: "2017",
        category: "Label Design",
        thumb: "images/works/quevedovintage/quevedo_vintage_01.jpg",
        url: "works/quevedoadvent2018.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 1,
        title: "10",
        year: "2017",
        category: "Graphic Composition",
        thumb: "images/works/10/10_01.jpg",
        url: "works/10.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 1,
        title: "Closer",
        year: "2017",
        category: "Type Poster",
        thumb: "images/works/closerposter/closer_04.jpg",
        url: "works/closerposter.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 1,
        title: "Finca Leyenda Plata - Logo Proposal",
        year: "2016",
        category: "Logo Design",
        thumb: "images/works/fincaleyendaplata/finca_01.jpg",
        url: "works/fincaleyendaplata.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 1,
        title: "Viñedos Ruta Sagrada - Logo Proposal",
        year: "2016",
        category: "Logo Design",
        thumb: "images/works/vinedosrutasagrada/vinedos_00.png",
        url: "works/vinedosrutasagrada.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 3,
        title: "Quevedo Douro Wines rebrand - Q Grande Reserva",
        year: "2016",
        category: "Label Design",
        thumb: "images/works/quevedogreserve/quevedogreserve_04.jpg",
        url: "works/quevedogreserve.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 3,
        title: "Quevedo Douro Wines rebrand",
        year: "2016",
        category: "Label Design",
        thumb: "images/works/quevedodouro/quevedodouro_06.jpg",
        url: "works/quevedodouro.html",
        fullClass: false,
        featured: true,
    },
    {
        categoryId: 5,
        title: "Darwin Vineyards Chalk Illustrations",
        year: "2016",
        category: "Illustration",
        thumb: "images/works/chalkillustrations/chalkillustration_01.jpg",
        url: "works/chalkillustrations.html",
        fullClass: false,
        featured: true,
    },

];

/* 
1 - graphic
2 - ui
3 - packaing
4 - editorial
5 - illustration
*/
var worksContainer = document.querySelector('.image-container');


for (let i = 0; i < works.length; i++) {
    const {
        categoryId,
        title,
        year,
        category,
        thumb,
        url,
        fullClass,
        featured
    } = works[i];

    var template = `<a data-id="${categoryId}" class="work ${fullClass ? "full" : ""}" href="${url}">
    <div class="image">
        <div class="img" style="background-image: url(${thumb})"></div>
        <p class=" overlay-title">${title}</p>
        <p class="overlay-text">${year} / ${category}</p>
    </div>
</a>`

    worksContainer.insertAdjacentHTML('beforeend', template);

}