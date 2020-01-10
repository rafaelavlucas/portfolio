window.addEventListener("load", event => {

    function productHeading() {
        ////////////////
        // Variables
        ////////////////

        const product = {
            value: 125,
            images: [{
                    img: 'assets/img01.png'
                },
                {
                    img: 'assets/img02.png'
                },
                {
                    img: 'assets/img03.png'
                },
                {
                    img: 'assets/img04.png'
                },
                {
                    img: 'assets/img05.png'
                },
                {
                    img: 'assets/img06.png'
                }
            ]
        }

        const btn = document.querySelector('.btn'),
            maxQuantity = 5,
            itemNumber = document.querySelector('.itemNumber'),
            inputQuantity = document.querySelector('.inputQuantity'),
            plus = document.querySelector('.plus'),
            minus = document.querySelector('.minus');

        let = priceFinal = document.querySelector('.priceFinal'),
            priceOriginal = document.querySelector('.priceOriginal'),
            discount = null;


        ////////////////
        // Events
        ////////////////

        btn.addEventListener('click', addItem);
        plus.addEventListener("click", plusQuantity);
        minus.addEventListener("click", minusQuantity);

        ////////////////
        // Functions
        //////////////// 

        // Calculate the Discount

        function getDisccount() {
            priceOriginal.innerText = product.value + "€";
            discount = product.value - (product.value * (30 / 100));
            priceFinal.innerText = discount + "€";
        }
        getDisccount();


        // Calculate the the Prices with discounts

        function getPrice() {
            priceFinal.innerText = discount * inputQuantity.value + "€";
            priceOriginal.innerText = product.value * inputQuantity.value + "€";
        }

        // Update the prices with the quantity counter

        function plusQuantity() {
            if (inputQuantity.value < maxQuantity) {
                inputQuantity.value == inputQuantity.value++;
            }
            getPrice();
        }

        function minusQuantity() {
            if (inputQuantity.value > 1) {
                inputQuantity.value == inputQuantity.value--;
            }
            getPrice();
        }

        // Add items to sopping cart

        function addItem() {
            itemNumber.style.display = "flex";
            itemNumber.innerHTML = inputQuantity.value;
        }

        // Populate the images for Swiper

        product.images.forEach(function (el) {

            let template = `
                <div class="swiper-slide">
                    <img src="${el.img}">
                </div>`;

            document.querySelectorAll('.swiper-wrapper').forEach(function (el) {
                el.insertAdjacentHTML('beforeend', template);
            })
        });


        // Make the slider function

        var galleryThumbs = new Swiper('.galleryThumbs', {
            spaceBetween: 0,
            slidesPerView: 'auto',
            loop: false,
            allowTouchMove: false,
            allowSlidePrev: false,
            allowSlideNext: false,

        });

        var galleryMain = new Swiper('.galleryMain', {
            spaceBetween: 20,
            slidesPerView: 'auto',
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }

    productHeading();

});