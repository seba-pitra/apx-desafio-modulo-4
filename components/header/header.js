const headerComp = function(el) {
    const componentEl = document.createElement("div");

    componentEl.innerHTML = `
    <div class="header__container">
        <a href="./index.html">
            <img src="./images/logo1.png" class="header__logo">
        </a>
        <div class="header__burguer">
            <div class="burguer__item"></div>
            <div class="burguer__item"></div>
            <div class="burguer__item"></div>
        </div>
        <div class="intro__container-header-desktop">
                <h4 class="header-desktop-item">
                   <a class="burguer-link" href="portfolio.html">Portfolio</a>
                </h4>
                <h4 class="header-desktop-item">
                   <a class="burguer-link" href="services.html">Servicios</a>
                </h4>
                <h4 class="header-desktop-item">
                   <a class="burguer-link" href="contact.html">Contacto</a>
                </h4>
        </div>
    </div>
    <div class="intro__burguer">
        <h1 class="x">X</h1>
        <div class="burguer__container">
            <h1 class="burguer-title">
                <a class="burguer-link" href="portfolio.html">Portfolio</a>
            </h1>
            <h1 class="burguer-title">
                <a class="burguer-link" href="services.html">Servicios</a>
            </h1>
            <h1 class="burguer-title">
                <a class="burguer-link" href="contact.html">Contacto</a>
            </h1>
        </div>
    </div>
    `;

    el.appendChild(componentEl);
}