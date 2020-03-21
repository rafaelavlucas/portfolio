window.addEventListener("load", event => {


    const data = [{
        day: "teste1",
        steps: "3,604",
        time: "1:14",
        distance: "2,14",
        calories: "57"
    }, {
        day: "teste2",
        steps: "300",
        time: "fhrjkevn",
        distance: "jvn",
        calories: "200"
    }, {
        day: "teste3",
        steps: "300",
        time: "fhrjkevn",
        distance: "jvn",
        calories: "200"
    }];

    const icons = ["assets/iconSteps.svg", "assets/iconTime.svg", "assets/iconDistance.svg", "assets/iconCalories.svg"];

    const swipperWrapper = document.querySelector(".swiper-wrapper");

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
                    <p class="fitness__name">${el.steps}</p>
                    <p class="fitness__desc">Steps</p>  
                </div>
                <div class="fitness__square time">
                    <p class="fitness__name">${el.time}</p>
                    <p class="fitness__desc">Time</p>
                    <p class="fitness__small">hours</p>
                </div>
                <div class="fitness__square distance">
                    <p class="fitness__name">${el.distance}</p>
                    <p class="fitness__desc">Distance</p>
                    <p class="fitness__small">Km</p>
                </div>
                <div class="fitness__square calories">
                    <p class="fitness__name">${el.calories}</p>
                    <p class="fitness__desc">burned</p>
                    <p class="fitness__small">Kcal</p>
                </div>
            </div>
        </div>`;

        swipperWrapper.insertAdjacentHTML("beforeend", template);

    });


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

});