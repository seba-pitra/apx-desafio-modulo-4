const addServicesContent = (params) => {
    const servicesContainer = document.querySelector(".services__container-elements");
    const servicesTemplate = document.querySelector(".services__template");

    servicesTemplate.content.querySelector(".services__img").src = params.imgUrl
    servicesTemplate.content.querySelector(".service__item-title").textContent = params.title
    servicesTemplate.content.querySelector(".service__description").textContent = params.description
    
    const servicesClone = document.importNode(servicesTemplate.content, true)
    servicesContainer.appendChild(servicesClone)
}

const getServicesContent = () => {
    return fetch("https://cdn.contentful.com/spaces/a7g42jv53t31/environments/master/entries?access_token=b865tdNkRKSdC7JEg2IeY6700AzRnC94D9c4CBz42eI&&content_type=services")
    .then(res => res.json())
    .then(data => {
        const picture = data.includes.Asset[0].fields.file.url;
        const fieldsCollection = data.items.map(item => {
            return {
                imgUrl: picture,
                title: item.fields.servicesTitle,
                description: item.fields.servicesDescription
            }
        })
        return fieldsCollection;
    })
}

const windowBurguer = () => {
    const openWindowButton = document.querySelector(".header__burguer");
    const closeWindowButton = document.querySelector(".x");
    const window = document.querySelector(".intro__burguer");

    const header = document.querySelector(".header__container");
    const servicesSection = document.querySelector(".services__container");


    openWindowButton.addEventListener("click", (e) => {
        window.style.display = "inherit";
        header.style.display = "none"
        servicesSection.style.display = "none"
    })

    closeWindowButton.addEventListener("click", () => {
        window.style.display = "none";
        header.style.display = "flex";
        servicesSection.style.display = "inherit"
    })
} 

const main = () => {
    const headerEl = document.querySelector(".header");
    const footerEl = document.querySelector(".footer")
    headerComp(headerEl)
    footerComp(footerEl)

    getServicesContent().then(content => {
        for (const c of content) {
            addServicesContent(c)
        }
    })
    
    windowBurguer();
}

main();