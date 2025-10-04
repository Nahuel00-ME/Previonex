document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const serviciosLink = document.querySelector(".submenu-toggle");
  const serviciosLi = serviciosLink.parentElement;

  // Hamburguesa
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navContainer.classList.toggle("active");
  });

  // Submenú solo en móvil
  serviciosLink.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      serviciosLi.classList.toggle("open");
    }
  });
});
