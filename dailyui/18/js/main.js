window.addEventListener("load", event => {

    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    var day = d.getDate();
    var dayNumber = days[d.getDay()];
    var today = days[d.getDay()] + ", " + months[d.getMonth()] + " ";

    const data = [{
            day: today + day,
            steps: "4414",
            time: "0.54",
            distance: "2.74",
            calories: "68",

        }, {
            day: today + (day - 1),
            steps: "5682",
            time: "1.14",
            distance: "3.38",
            calories: "86",
        }, {
            day: today + (day - 2),
            steps: "24404",
            time: "2.40",
            distance: "9.05",
            calories: "222",
        }, {
            day: today + (day - 3),
            steps: "7770",
            time: "1.44",
            distance: "4.67",
            calories: "117",
        }, {
            day: today + (day - 4),
            steps: "10599",
            time: "2.12",
            distance: "6.27",
            calories: "156",
        },
        {
            day: today + (day - 5),
            steps: "11161",
            time: "1.52",
            distance: "7.26",
            calories: "181",
        }, {
            day: today + (day - 6),
            steps: "3740",
            time: "0.46",
            distance: "2.23",
            calories: "57",
        }
    ];

    const stepsValue = 15000,
        timeValue = 3,
        distanceValue = 5,
        caloriesValue = 200;

    const icons = ["assets/iconSteps.svg", "assets/iconTime.svg", "assets/iconDistance.svg", "assets/iconCalories.svg"];

    const swiperWrapper = document.querySelector(".swiper-wrapper");

    data.forEach(function (el) {
        let template = `
        <div class="swiper-slide"> 
            <div class="fitness">
                <div class="fitness__top">
                    
                    <p class="fitness__date">${el.day}</p>
                </div>

            <div class="fitness__content">
                <div class="fitness__square steps">
                 <span class="iconBig"></span>
                    <p class="fitness__name">${el.steps}</p>
                    <p class="fitness__desc">Steps</p>  
                    <div class="fitness__bar">
                        <span class="fitness__barValue" style="width: ${el.steps * 100 / stepsValue}%"></span>
                   </div>
                </div>
                <div class="fitness__square time">
                <span class="iconBig"></span>
                    <p class="fitness__name">${el.time}</p>
                    <p class="fitness__desc">Time</p>
                    <p class="fitness__small">hours</p>
                    <div class="fitness__bar">
                        <span class="fitness__barValue" style="width: ${el.time * 100 / timeValue}%"></span>
                    </div>
                </div>
                <div class="fitness__square distance">
                <span class="iconBig"></span>
                    <p class="fitness__name">${el.distance}</p>
                    <p class="fitness__desc">Distance</p>
                    <p class="fitness__small">Km</p>
                    <div class="fitness__bar">
                        <span class="fitness__barValue" style="width: ${el.distance * 100 / distanceValue}%"></span>
                    </div>
                </div>
                <div class="fitness__square calories">
                <span class="iconBig"></span>
                    <p class="fitness__name">${el.calories}</p>
                    <p class="fitness__desc">burned</p>
                    <p class="fitness__small">Kcal</p>
                    <div class="fitness__bar">
                        <span class="fitness__barValue" style="width: ${el.calories * 100 / caloriesValue}%"></span>
                    </div>
                </div>
            </div>
        </div>`;

        swiperWrapper.insertAdjacentHTML("beforeend", template);

    });




    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: false,
        effect: 'coverflow',
        speed: 400,

        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    if (window.innerWidth <= 460) {
        document.querySelector('.container').style.height = window.innerHeight + "px";
        document.querySelector('.wrapper').style.height = window.innerHeight + "px";
    }




    for (let i = 0; i < data.length; i++) {

        const {
            steps
        } = data[i]

        var height = steps * 100 / stepsValue;

        document.querySelectorAll(".swiper-pagination-bullet")[i].style.height = height + "%";
    }


});