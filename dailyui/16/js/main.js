window.addEventListener("load", event => {

    const videos = [{
            name: "Showreel",
            img: "assets/img_reel.jpg",
            video: "https://player.vimeo.com/video/389042215"

        },
        {
            name: "10 — Animated Layers",
            img: "assets/img_10.jpg",
            video: "https://player.vimeo.com/video/276869996"
        }, {
            name: "Chalk Illustration",
            img: "assets/img_chalk.jpg",
            video: "https://player.vimeo.com/video/277650563"
        }
    ];

    const videosContent = document.querySelector('.videos__content');

    videos.forEach(function (el) {
        const template = `
            <div class="videos__item" data-video="${el.video}">
            <p class="videos__name">${el.name}</p> 
            <i class="videos__play"> <img src="assets/play.svg" alt = "" ></i>
            <img class="videos__image" src="${el.img}" alt = "" >
            </div>`;
        videosContent.insertAdjacentHTML('beforeend', template);

    });


    const videoItem = document.querySelectorAll('.videos__item'),
        modalVideo = document.querySelector('.modal'),
        iconCloseVideo = document.querySelector('.modal__icon'),
        videoFrame = document.querySelector('.modal__video iframe');



    videoItem.forEach(function (el) {
        el.addEventListener("click", openVideo);
    })

    iconCloseVideo.addEventListener("click", closeVideo);


    function openVideo(e) {
        const videoSrc = e.currentTarget.dataset.video;

        videoFrame.src = videoSrc;

        setTimeout(() => {
            modalVideo.classList.add('open');
        }, 400);

    }

    function closeVideo() {

        modalVideo.classList.remove('open');
        videoFrame.src = "";

    }
});