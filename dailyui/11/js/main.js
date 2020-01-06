window.addEventListener("load", event => {
    ////////////////
    // Variables
    ////////////////

    const btnUpload = document.querySelector('.btnUpload'),
        btnTry = document.querySelector('.btnTry'),
        btnAnother = document.querySelector('.btnAnother'),
        card = document.querySelector('.cardUpload'),
        cardError = document.querySelector('.cardError'),
        cardSuccess = document.querySelector('.cardSuccess'),
        fileInput = document.querySelector(".inputFile"),
        uploadIcon = document.querySelector(".uploadIcon"),
        fileReturn = document.querySelector(".fileReturn");


    ////////////////
    // Events
    ////////////////

    btnUpload.addEventListener('click', flipCards);
    btnTry.addEventListener('click', flipCards2);
    btnAnother.addEventListener('click', flipCards3);


    // To Add the file name when Upload

    uploadIcon.addEventListener("click", function (event) {
        fileInput.focus();
        return false;
    });

    fileReturn.addEventListener("click", function (event) {
        fileInput.focus();
    });

    fileInput.addEventListener("change", function (event) {
        fileReturn.innerHTML = this.value.replace(/C:\\fakepath\\/i, '');
        btnUpload.disabled = false;
        uploadIcon.style.visibility = "hidden";
        fileReturn.classList.add('show');
    });


    ////////////////
    // Functions
    //////////////// 


    function flipCards() {
        card.classList.add('flipOut');
        cardError.classList.add('flipIn');
        document.querySelector('body').style.backgroundColor = "white";

        setTimeout(() => {
            uploadIcon.style.visibility = "visible";
            btnUpload.disabled = true;
            fileReturn.innerHTML = "";
            fileReturn.classList.remove('show');
        }, 600);
    }

    function flipCards2() {
        cardSuccess.style.visibility = "visible";
        card.style.visibility = "hidden";

        setTimeout(() => {
            cardSuccess.classList.add('flipIn');
            cardError.classList.add('flipOut');
            cardError.style.visibility = "hidden";
            document.querySelector('body').style.backgroundColor = "white";

        }, 400);
    }

    function flipCards3() {
        card.style.visibility = "visible";
        card.classList.remove('flipIn');
        cardError.classList.remove('flipOut');
        cardError.classList.remove('flipIn');


        setTimeout(() => {
            cardSuccess.style.zIndex = "-1";
        }, 300);

        setTimeout(() => {
            cardSuccess.classList.remove('flipIn');
            card.classList.remove('flipOut');
            cardSuccess.style.visibility = "hidden";
            document.querySelector('body').style.backgroundColor = "#FF9E81";
        }, 400);

        setTimeout(() => {
            cardSuccess.style.zIndex = "2";
            cardError.style.visibility = "visible";
        }, 800);
    }

});