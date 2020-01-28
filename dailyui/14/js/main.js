window.addEventListener("load", event => {

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;



    let countDown = new Date('Mar 30, 2020 00:00:00').getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;


            setTimeout(() => {
                document.getElementById('days').innerText = Math.floor(distance / (day)),
                    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            }, 500);


        }, second)

    document.querySelector('body').style.height = window.innerHeight + "px";

});