document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const serviciosLink = document.querySelector(".submenu-toggle");
    const serviciosLi = serviciosLink.parentElement;

    // Estado inicial del submenú
    let submenuAbierto = false;

    // Toggle menú hamburguesa en móvil
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Si el submenú estaba abierto, mantenerlo así
        if (submenuAbierto && window.innerWidth <= 768) {
            serviciosLi.classList.add("open");
        }
    });

    // Toggle submenú "Servicios" en móvil
    serviciosLink.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            
            // Alternar estado del submenú
            submenuAbierto = !submenuAbierto;
            serviciosLi.classList.toggle("open");
        }
    });

    // Cierra menú al hacer click en cualquier link normal en móvil
    navLinks.querySelectorAll("a:not(.submenu-toggle)").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("active");
                submenuAbierto = false;
                serviciosLi.classList.remove("open");
            }
        });
    });

    // Resetea menú y submenú al cambiar tamaño de ventana
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            serviciosLi.classList.remove("open");
            submenuAbierto = false;
        }
    });
});