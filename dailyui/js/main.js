window.onload = function (e) {

    var dailyUi = 6;

    function addItems(dailyUi) {
        var itemContainer = document.getElementById("dailyui-items");
        for (let i = 1; i <= dailyUi; i++) {

            var template = `
            <a href="../${i}" target="_blank">
                
                    <div class="item">
                        <img src="assets/img-${i}.jpeg">
                    </div>
               
            </a>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    addItems(dailyUi)

}