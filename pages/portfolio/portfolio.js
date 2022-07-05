const addPortfolioContent = (params) => {
    const portfolioContainer = document.querySelector(".portfolio__container-elements");
    const portfolioTemplate = document.querySelector(".portfolio__template");

    portfolioTemplate.content.querySelector(".portfolio__item-img").src = params.imgUrl
    portfolioTemplate.content.querySelector(".portfolio__item-title").textContent = params.title
    portfolioTemplate.content.querySelector(".portfolio__item-description").textContent = params.description
    portfolioTemplate.content.querySelector(".portfolio__item-link").href = params.link
    
    const templateClone = document.importNode(portfolioTemplate.content, true)
    portfolioContainer.appendChild(templateClone)
}

const getPortfolioContent = () => {
    return fetch("https://cdn.contentful.com/spaces/a7g42jv53t31/environments/master/entries?access_token=b865tdNkRKSdC7JEg2IeY6700AzRnC94D9c4CBz42eI&&content_type=portfolio")
    .then(res => res.json())
    .then(data => {
        const picture = data.includes.Asset[0].fields.file.url;
        const fieldsCollection = data.items.map(item => {
            return {
                imgUrl: picture,
                title: item.fields.portfolioTitle,
                description: item.fields.portfolioDescription,
                link: item.fields.portfolioLink
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
    const portfolioSection = document.querySelector(".portfolio__container");


    openWindowButton.addEventListener("click", (e) => {
        window.style.display = "inherit";
        header.style.display = "none"
        portfolioSection.style.display = "none";
    })

    closeWindowButton.addEventListener("click", () => {
        window.style.display = "none";
        header.style.display = "flex";
        portfolioSection.style.display = "flex";
    })
} 

const main = () => {
    const headerEl = document.querySelector(".header");
    const footerEl = document.querySelector(".footer");
    
    getPortfolioContent().then(content => {
        for (const c of content) {
            addPortfolioContent(c)
        }
    })
    
    headerComp(headerEl);
    footerComp(footerEl);
    windowBurguer();
} 

main();