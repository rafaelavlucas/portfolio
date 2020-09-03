window.onload = function (e) {


    function splitTitle() {
        const titleWord = document.querySelector(".mainHeading__title"),
            titleSplit = titleWord.innerText.split("");


        // Title Split Characters
        setTimeout(() => {
            titleWord.innerHTML = "";
            titleSplit.forEach(function (el) {
                let template = `
              <span>${el}</span>`;
                titleWord.style.opacity = "1";
                titleWord.insertAdjacentHTML("beforeend", template);
            });
        }, 300);
    }


    /*
        function splitDescription() {
            const descriptionWord = document.querySelector(".mainHeading__description--one"),
                descriptionSplit = descriptionWord.innerText.split("");

            //Split Characters

            setTimeout(() => {
                descriptionWord.innerHTML = "";
                descriptionSplit.forEach(function (el) {
                    let template = `
                  <span>${el}</span>`;
                    descriptionWord.style.opacity = "1";
                    descriptionWord.insertAdjacentHTML("beforeend", template);
                });
            }, 1000);

        }

        function splitDescription2() {
            const descriptionWord2 = document.querySelector(".mainHeading__description--two"),
                descriptionSplit2 = descriptionWord2.innerText.split("");

            //Split Characters
            setTimeout(() => {
                descriptionWord2.innerHTML = "";
                descriptionSplit2.forEach(function (el) {
                    let template = `
                  <span>${el}</span>`;
                    descriptionWord2.style.opacity = "1";
                    descriptionWord2.insertAdjacentHTML("beforeend", template);
                });
            }, 1300);
        }

          splitDescription();
        splitDescription2();
    */

    splitTitle();






}