document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const serviciosLink = document.querySelector(".submenu-toggle");
  const serviciosLi = serviciosLink.parentElement;

  // Toggle menú hamburguesa en móvil
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Toggle submenú "Servicios" en móvil
  serviciosLink.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // evita que el link redireccione
      serviciosLi.classList.toggle("open"); // abre/cierra submenú
    }
  });

  // Cierra menú al hacer click en cualquier link normal en móvil
  navLinks.querySelectorAll("a:not(.submenu-toggle)").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active"); // cierra menú hamburguesa
      }
    });
  });

  // Resetea menú y submenú al cambiar tamaño de ventana
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      serviciosLi.classList.remove("open");
    }
  });
});
