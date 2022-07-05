const formComp = function(el) {
    const componentEl = document.createElement("div");

    componentEl.innerHTML = `
    <form action="" method="post" class="contact__form">
        <div class="contact__form-container-item">
            <label for="name" class="contact__form-name-label">NOMBRE</label>
            <input type="text" class="contact__form-name" name="name">
        </div>
        <div class="contact__form-container-item">
            <label for="email" class="contact__form-email-label">EMAIL</label>
            <input type="email" class="contact__form-email" name="email">
        </div>
        <div class="contact__form-container-item">
            <label for="message" class="contact__form-textarea-label">MENSAJE</label>
            <textarea name="textarea" cols="30" rows="10" class="contact__form-message"></textarea>
        </div>
        <button class="contact__form-button">Enviar</button>
    </form>
    `
    el.appendChild(componentEl);
}

const infoForm = (form) => {
    const formEl = form.querySelector(".contact__form")
    
    formEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const objectData = Object.fromEntries(formData.entries());

        const sendForm = await fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                "to": "sebastian.pitra10@gmail.com",
                "message": `Nombre de usuario:${objectData.name},Email:${objectData.email}, Mensaje:${objectData.textarea}`
            }),
        })
        
        const res = await sendForm.json();
        return res; 
    })
}