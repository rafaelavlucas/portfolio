window.addEventListener("load", event => {

    const button = document.querySelector('.messageBox__button'),
        messageBox = document.querySelector('.messageBox'),
        chat = document.querySelector('.messageBox__chat'),
        input = document.querySelector('input'),
        btn = document.querySelector('.messageBox__btnSend');

    const messages = [{
            text: "ok!",
            hour: "15:02",
            person: "me"

        },
        {
            text: "do you want to go to the movies tonight?!",
            hour: "16:30",
            person: "you"
        },
        {
            text: "yes, sure! what time?",
            hour: "16:35",
            person: "me"
        }
    ];

    button.addEventListener('click', openBox);

    input.addEventListener("keypress", function (e) {
        var key = e.which || e.keycode;
        if (key === 13) addMessage();
    });

    btn.addEventListener("click", addMessage);


    messages.forEach(function (el) {
        var template = `
        <div class="messageBox__message ${el.person}">
        <p class="messageBox__text">${el.text}</p>
        <p class="messageBox__date">${el.hour}</p>
        </div>
            `;

        chat.insertAdjacentHTML("beforeend", template);
    });

    function addMessage() {
        let value = input.value,
            hours = new Date().getHours(),
            minutes = new Date().getMinutes();


        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        let time = hours + ':' + minutes;

        const template = `
            <div class="messageBox__message me">
            <p class="messageBox__text">${value}</p>
            <p class="messageBox__date">${time}</p>
            </div>
            `;

        if (input.value != "") {
            chat.insertAdjacentHTML("beforeend", template);
            input.value = "";
        }
        chat.scrollTop = chat.scrollHeight;

    }

    function openBox() {

        if (messageBox.classList.contains('openBox')) {
            messageBox.classList.remove('openBox')
        } else {
            messageBox.classList.add('openBox')
        }
    }



});