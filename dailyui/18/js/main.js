window.addEventListener("load", event => {


    const data = [{
        day: "teste1",
        steps: "3604",
        time: "1.14",
        distance: "2.14",
        calories: "57",
    }, {
        day: "teste2",
        steps: "300",
        time: "3",
        distance: "jvn",
        calories: "200",
    }, {
        day: "teste3",
        steps: "300",
        time: "fhrjkevn",
        distance: "jvn",
        calories: "200",
    }];


    const stepsValue = 8000,
        timeValue = 4,
        distanceValue = 10,
        caloriesValue = 400;

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
                    <div class="fitness__bar">
                        <span class="fitness__barValue" style="width: ${el.steps * 100 / stepsValue}%"></span>
                   </div>
                </div>
                <div class="fitness__square time">
                <span class="icon"></span>
                    <p class="fitness__name">${el.time}</p>
                    <p class="fitness__desc">Time</p>
                    <p class="fitness__small">hours</p>
                    <div class="fitness__bar">
                        <span class="fitness__barValue" style="width: ${el.time * 100 / timeValue}%"></span>
                    </div>
                </div>
                <div class="fitness__square distance">
                <span class="icon"></span>
                    <p class="fitness__name">${el.distance}</p>
                    <p class="fitness__desc">Distance</p>
                    <p class="fitness__small">Km</p>
                    <div class="fitness__bar">
                        <span class="fitness__barValue" style="width: ${el.distance * 100 / distanceValue}%"></span>
                    </div>
                </div>
                <div class="fitness__square calories">
                <span class="icon"></span>
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
    }





});