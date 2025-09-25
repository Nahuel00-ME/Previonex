document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const serviciosLink = document.querySelector(".submenu-toggle");
    const serviciosLi = serviciosLink.parentElement;

    // 👉 Toggle menú hamburguesa
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // 👉 Toggle submenú en móvil
    serviciosLink.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // evita salto
            navLinks.classList.add("active"); // Activa el menú principal
            serviciosLi.classList.toggle("open");
        }
    });

    // 👉 Cierra menú al clickear un link normal en móvil
    navLinks.querySelectorAll("a:not(.submenu-toggle)").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("active");
            }
        });
    });

    // 👉 Cierra menú al hacer clic fuera
    document.addEventListener("click", (e) => {
        const target = e.target;
        
        // Si el clic es fuera del menú y del botón hamburguesa
        if (!target.closest('.nav-links') && !target.closest('.hamburger')) {
            navLinks.classList.remove("active");
            
            // También cierra cualquier submenú abierto
            serviciosLi.classList.remove("open");
        }
    });

    // 👉 Manejo de redimensionamiento de ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            serviciosLi.classList.remove("open");
        }
    });
});