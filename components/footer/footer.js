const footerComp = function(el) {
    const footerEl = document.createElement("div");

    footerEl.innerHTML = `
    <div class="footer_container">
        <h1 class="footer__title">Seba</h1>
        <div class="footer__socials-networks-container">
        <div class="social-network-container">
            <img src="../../images/instagram-logoo.jpg" alt="" class="instagram-logo">
            <a class="footer__text" href="https://www.instagram.com/sebapitraa/">Instagram</a>
        </div>
        <div class="social-network-container">
            <img src="../../images/logo-linkedin-blanco.jpg" alt="" class="linkedin-logo">
            <a class="footer__text-linkdin" href="https://linkedin.com">Linkedin</a>
        </div>
        <div class="social-network-container">
            <img src="../../images/github-logo.jpg" alt="">
            <a class="footer__text" href="https://github.com/seba-pitra">Github</a>
        </div>
        </div>
    </div>
    `;

    el.appendChild(footerEl);
}