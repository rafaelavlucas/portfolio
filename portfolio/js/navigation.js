// Main Nav

var nav = document.querySelector('nav');

var templateNav = ` 
    <div class="iconmenu">
        <div class="iconopen">
            <span></span>
        </div>
    </div>
    <div class="nav">
        <div class="menu">
            <a class="menu-item" href="../index.html">home</a>
            <a class="menu-item" href="../works.html">works</a>
            <a class="menu-item" href="../about.html">about</a>
        </div>
    </div>`;

nav.insertAdjacentHTML('beforeend', templateNav);


// Footer

var footer = document.querySelector('footer');

var templateFooter = ` 
<p>design and code by:</p>
<p>Rafaela Lucas / <span id="year"></span></p>`;


footer.insertAdjacentHTML('beforeend', templateFooter);