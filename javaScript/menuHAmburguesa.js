document.addEventListener("DOMContentLoaded", () => {
    // --- MENU HAMBURGUESA ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const submenuToggle = document.querySelector(".submenu-toggle");
    const submenuLi = submenuToggle.parentElement;

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("active-menu");
        
        // Si el menú se cierra, también cerramos el submenu
        if (!navLinks.classList.contains("active-menu")) {
            submenuLi.classList.remove("active-submenu");
        }
    });

    submenuToggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            submenuLi.classList.toggle("active-submenu");
        }
    });

    // Manejar click fuera solo cuando el menú está abierto
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove("active-menu");
            submenuLi.classList.remove("active-submenu");
        }
    });
});