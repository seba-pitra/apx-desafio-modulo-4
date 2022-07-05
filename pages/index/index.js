const addIntroContent = (params) => {
    const introContainer = document.querySelector(".intro__container");    
    const introTemplate = document.querySelector(".intro__template");
    
    introTemplate.content.querySelector(".intro__title").textContent = params.title;
    introTemplate.content.querySelector(".intro__presentation-title").textContent = params.subtitle;
    
    const introClone = document.importNode(introTemplate.content, true);
    introContainer.appendChild(introClone);
}

const getIntroContent = () => {
    return fetch("https://cdn.contentful.com/spaces/a7g42jv53t31/environments/master/entries?access_token=b865tdNkRKSdC7JEg2IeY6700AzRnC94D9c4CBz42eI&&content_type=bienvenida")
    .then(res => res.json())
    .then(data => {
        const fieldsCollection = data.items.map(item => {
            return {
                title: item.fields.title,
                subtitle: item.fields.subtitle,
            }
        })
        return fieldsCollection;
    })
}

const addAboutMeContent = (params) => {
    const aboutMeContainer = document.querySelector(".about-me__container");
    const aboutMeTemplate = document.querySelector(".about-me__template");

    aboutMeTemplate.content.querySelector(".about-me__img").src = params.aboutMeUrl;
    aboutMeTemplate.content.querySelector(".about-me__title").textContent = params.aboutMeTitle;
    aboutMeTemplate.content.querySelector(".about-me__presentation-text").textContent = params.aboutMeDescription;

    const aboutMeClone = document.importNode(aboutMeTemplate.content, true);  
    aboutMeContainer.appendChild(aboutMeClone);
}

const getAboutMeContent = () => {
    return fetch("https://cdn.contentful.com/spaces/a7g42jv53t31/environments/master/entries?access_token=b865tdNkRKSdC7JEg2IeY6700AzRnC94D9c4CBz42eI&&content_type=presentacion")
    .then(res => res.json())
    .then(data => {
        const picture = data.includes.Asset[0].fields.file.url
        const fieldsCollection = data.items.map(item => {
            return {
                aboutMeUrl: picture,
                aboutMeTitle: item.fields.aboutMeTitle,
                aboutMeDescription: item.fields.aboutMePresentationText,
            }
        })
        return fieldsCollection;
    })
}

const addServicesContent = (params) => {
    const servicesContainer = document.querySelector(".services__container");
    const servicesTemplate = document.querySelector(".services__template");

    servicesTemplate.content.querySelector(".services__img").src = params.imgUrl
    servicesTemplate.content.querySelector(".services__service-title").textContent = params.title
    servicesTemplate.content.querySelector(".services__service-description").textContent = params.description
    
    const servicesClone = document.importNode(servicesTemplate.content, true)
    servicesContainer.appendChild(servicesClone)
}

const getServicesContent = () => {
    return fetch("https://cdn.contentful.com/spaces/a7g42jv53t31/environments/master/entries?access_token=b865tdNkRKSdC7JEg2IeY6700AzRnC94D9c4CBz42eI&&content_type=servicesIndex")
    .then(res => res.json())
    .then(data => {
        const picture = data.includes.Asset[0].fields.file.url;
        const fieldsCollection = data.items.map(item => {
            return {
                imgUrl: picture,
                title: item.fields.servicesIndexTitle,
                description: item.fields.servicesIndexDescription
            }
        })
        return fieldsCollection;
    })
}

const getAllContent = () => {
    getIntroContent().then(content => {
        for (const c of content) {
            addIntroContent(c);
        }
    })

    getAboutMeContent().then(content => {
        for (const c of content) {
            addAboutMeContent(c);
        }
    });

    getServicesContent().then(content => {
        for (const c of content) {
            addServicesContent(c)
        }
    })   
}

const windowBurguer = () => {
    const openWindowButton = document.querySelector(".header__burguer");
    const closeWindowButton = document.querySelector(".x");
    const window = document.querySelector(".intro__burguer");

    const header = document.querySelector(".header__container");

    const introSection = document.querySelector(".intro__container");
    const aboutMeSection = document.querySelector(".about-me");
    const servicesSection = document.querySelector(".services");


    openWindowButton.addEventListener("click", (e) => {
        window.style.display = "inherit";
        header.style.display = "none"
        introSection.style.display = "none";
        aboutMeSection.style.display = "none";
        servicesSection.style.display = "none";
    })

    closeWindowButton.addEventListener("click", () => {
        window.style.display = "none";
        header.style.display = "flex";
        aboutMeSection.style.display = "inherit";
        servicesSection.style.display = "inherit";
        introSection.style.display = "inherit";
    })
} 

const main = () => {
    getAllContent();

    const headerEl = document.querySelector(".intro__header");
    const footerEl = document.querySelector(".footer");
    const formEl = document.querySelector(".contact__container-form");
    
    headerComp(headerEl);
    footerComp(footerEl);
    formComp(formEl);
    
    windowBurguer();
    infoForm(formEl);
}

main();