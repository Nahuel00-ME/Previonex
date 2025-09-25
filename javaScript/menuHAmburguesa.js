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
});

