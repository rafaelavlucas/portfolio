window.addEventListener("load", event => {


    const data = [{
        day: "teste1",
        steps: "3604",
        time: "1:14",
        distance: "2,14",
        calories: "57",
        height: "200px",
    }, {
        day: "teste2",
        steps: "300",
        time: "3",
        distance: "jvn",
        calories: "200",
        height: "300px",
    }, {
        day: "teste3",
        steps: "300",
        time: "fhrjkevn",
        distance: "jvn",
        calories: "200",
        height: "400px",
    }];

    const icons = ["assets/iconSteps.svg", "assets/iconTime.svg", "assets/iconDistance.svg", "assets/iconCalories.svg"];

    const swiperWrapper = document.querySelector(".swiper-wrapper");

    data.forEach(function (el) {
        let template = `
        <div class="swiper-slide"> 
            <div class="fitness">
                <div class="fitness__top">
                
                <p class="fitness__desc">today</p>
                <p class="fitness__date">${el.day}</p>
               

                </div>
            <div class="fitness__content">
                <div class="fitness__square steps">
                 <span class="icon"></span>
                    <p class="fitness__name">${el.steps}</p>
                    <p class="fitness__desc">Steps</p>  
                    <div class="fitness__bar"></div>
                </div>
                <div class="fitness__square time">
                <span class="icon"></span>
                    <p class="fitness__name">${el.time}</p>
                    <p class="fitness__desc">Time</p>
                    <p class="fitness__small">hours</p>
                    <div class="fitness__bar"></div>
                </div>
                <div class="fitness__square distance">
                <span class="icon"></span>
                    <p class="fitness__name">${el.distance}</p>
                    <p class="fitness__desc">Distance</p>
                    <p class="fitness__small">Km</p>
                    <div class="fitness__bar"></div>
                </div>
                <div class="fitness__square calories">
                <span class="icon"></span>
                    <p class="fitness__name">${el.calories}</p>
                    <p class="fitness__desc">burned</p>
                    <p class="fitness__small">Kcal</p>
                    <div class="fitness__bar"></div>
                </div>
            </div>
        </div>`;

        swiperWrapper.insertAdjacentHTML("beforeend", template);


    });


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: false,

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
    const nextSlider = document.querySelector('.swiper-button-next');

    nextSlider.addEventListener("click", getValues);

    function getValues() {

        const stepsBar = document.querySelector('.fitness__square.steps .fitness__bar'),
            timeBar = document.querySelector('.fitness__square.time .fitness__bar'),
            distanceBar = document.querySelector('.fitness__square.distance .fitness__bar'),
            caloriesBar = document.querySelector('.fitness__square.calories .fitness__bar'),
            stepsValue = document.querySelector('.fitness__square.steps .fitness__name').innerHTML,
            timeValue = document.querySelector('.fitness__square.time .fitness__name').innerHTML,
            distanceValue = document.querySelector('.fitness__square.distance .fitness__name').innerHTML,
            caloriesValue = document.querySelector('.fitness__square.calories .fitness__name').innerHTML,
            barSteps = 8000,
            barTime = 4,
            barDistance = 4,
            barCalories = 400;
        document.querySelectorAll('.fitness__square').forEach(function (el) {
            stepsBar.style.width = parseInt(stepsValue) * 100 / barSteps + "%";
            timeBar.style.width = parseInt(timeValue) * 100 / barTime + "%";
            distanceBar.style.width = parseInt(distanceValue) * 100 / barDistance + "%";
            caloriesBar.style.width = parseInt(caloriesValue) * 100 / barCalories + "%";
        })

    };

    getValues();


});