document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const serviciosItem = document.querySelector(".nav-links li:nth-child(2) > a");
  const serviciosLi = serviciosItem.parentElement;
  
  // Toggle menú hamburguesa
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("active");
    
    // Cerrar submenú si está abierto
    if (serviciosLi.classList.contains("open")) {
      serviciosLi.classList.remove("open");
    }
  });
  
  // Toggle submenú en "Servicios"
  serviciosItem.addEventListener("click", (e) => {
    // Solo en móvil
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Evita que navegue
      
      // Alternar clase open
      serviciosLi.classList.toggle("open");
      
      // Cerrar menú principal si el submenú se abre
      if (serviciosLi.classList.contains("open")) {
        navLinks.classList.remove("active");
      }
    }
  });
  
  // Manejar redimensionamiento de ventana
  window.addEventListener("resize", () => {
    // Si la ventana se hace más grande que 768px
    if (window.innerWidth > 768) {
      // Cerrar todo
      navLinks.classList.remove("active");
      serviciosLi.classList.remove("open");
    }
  });
});
