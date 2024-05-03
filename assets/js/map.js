document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {        
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7721.21545604251!2d-90.48422818947212!3d14.621408324654409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a2fabad2e0af%3A0xe8d63dcd9cc53f58!2sSanta%20Rosita%2C%20Cdad.%20de%20Guatemala!5e0!3m2!1ses-419!2sgt!4v1713281713346!5m2!1ses-419!2sgt"></iframe>
        `;
    }, 1500);
})