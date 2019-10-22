window.onload = function (e) {

    var works = [{
            Title: "Title",
            Year: "2019",
            Category: "UI Design",
            Type: "Personal Project",
        }],
        worksContainer = document.querySelector('.image-container'),
        template = `<a id="ui-design" class="work full" href="/dailyui">
    <div class="image big">
        <div class="img" style="background-image: url(images/works/dailyui/dailyui_00.jpg)"></div>
        <p class=" overlay-title">Daily UI Challenge</p>
        <p class="overlay-text">On going / UI Design, Front-End Development</p>
    </div>
</a>`

    worksContainer.insertAdjacentHTML('beforeend', template);

}