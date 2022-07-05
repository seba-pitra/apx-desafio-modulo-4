const windowBurguer = () => {
    const openWindowButton = document.querySelector(".header__burguer");
    const closeWindowButton = document.querySelector(".x");
    const window = document.querySelector(".intro__burguer");

    const header = document.querySelector(".header__container");
    const contactSection = document.querySelector(".contact");


    openWindowButton.addEventListener("click", (e) => {
        window.style.display = "inherit";
        header.style.display = "none"
        contactSection.style.display = "none"
    })

    closeWindowButton.addEventListener("click", () => {
        window.style.display = "none";
        header.style.display = "flex";
        contactSection.style.display = "inherit"
    })
} 

const main = () => {
    const headerEl = document.querySelector(".header");
    const footerEl = document.querySelector(".footer");
    const formEl = document.querySelector(".contact__container-form");

    headerComp(headerEl)
    footerComp(footerEl);
    formComp(formEl);

    windowBurguer();
    infoForm(formEl)
}

main();