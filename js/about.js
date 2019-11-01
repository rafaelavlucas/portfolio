//Jobs

var jobs = [{
        date: "July 2017 — present",
        title: "UI Designer",
        subDate: "— Dec 2017 - present",
        title2: "Graphic Designer",
        subDate2: "— July - Dec 2017",
        description: "Fullsix Portugal, Oeiras",
        extra: ""
    },
    {
        date: "May 2017 — present",
        title: "Graphic Designer, Creative Strategist",
        subDate: "",
        title2: "",
        subDate2: "",
        description: "Quevedo Port Wine",
        extra: "Freelancer"
    },
    {
        date: "October 2015 — May 2017",
        title: "Graphic Designer, Creative Strategist",
        subDate: "",
        title2: "",
        subDate2: "",
        description: "Darwin Bev, Estoril",
        extra: ""
    },
    {
        date: "September 2014 — April 2015",
        title: "Graphic Designer, Photography post-production",
        subDate: "",
        title2: "",
        subDate2: "",
        description: "Colönia Design Studio, Porto",
        extra: "Master's Degree Internship"
    },
    {
        date: "October 2012 — December 2012",
        title: "Photography post-production",
        subDate: "",
        title2: "",
        subDate2: "",
        description: "Deltaphoto, Oeiras",
        extra: ""
    }
];

var jobsSection = document.querySelector('.jobs');

for (let i = 0; i < jobs.length; i++) {
    const {
        date,
        title,
        title2,
        description,
        subDate,
        subDate2,
        extra
    } = jobs[i];

    var template = `
        <div class="timeline-item">
            <label>${date}</label>
            <article>
                    <p class="title">${title} ${subDate ? `<span> ${subDate}</span>` : ""} </p>
                    ${title2 ? `<p class="title">${title2} <span> ${subDate2}</span></p>` : ""} 
                    <p class="description">${description}</p>
                   ${extra ? `<p class="extra">${extra}</p>` : ""}
                </article>
            </div>
    `;

    jobsSection.insertAdjacentHTML('beforeend', template);
}

// Studies

var studies = [{
        date: "February 2018 — 4 days (16 hours)",
        title: "She Codes",
        description: "Coding Workshop for Women"
    },
    {
        date: "2013 — 2015",
        title: "Master's Degree: Graphic Design and Editorial Projects",
        description: "Faculty of Fine Arts, University of Porto"
    },
    {
        date: "2012 — 2013",
        title: "Graphic Design course",
        description: "Restart - Instituto de Criatividade Artes e Novas Tecnologias, Lisbon"
    },
    {
        date: "2009 — 2012",
        title: "Degree: Multimedia Ar",
        description: "Faculty of Fine Arts, University of Lisbon"
    }
];

var studiesSection = document.querySelector('.studies');

for (let i = 0; i < studies.length; i++) {
    const {
        date,
        title,
        description
    } = studies[i];

    var template = `
    <div class="timeline-item">
        <label>${date}</label>
            <article>
                <p class="title">${title}</p>
                <p class="description">${description}</p>
            </article>
        </div>
`;

    studiesSection.insertAdjacentHTML('beforeend', template);
}