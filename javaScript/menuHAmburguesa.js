document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navContainer = document.querySelector(".nav-container");
    const serviciosLink = document.querySelector(".submenu-toggle");
    const serviciosLi = serviciosLink.parentElement;

    hamburger.addEventListener("click", () => {
        navContainer.classList.toggle("active");
    });

    serviciosLink.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            serviciosLi.classList.toggle("open");
        }
    });
});