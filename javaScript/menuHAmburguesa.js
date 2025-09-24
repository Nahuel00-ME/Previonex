document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const serviciosItem = document.querySelector(".nav-links li:nth-child(2) > a");
  const serviciosLi = serviciosItem.parentElement;

  // Toggle menú hamburguesa
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Toggle submenú en "Servicios"
  serviciosItem.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Evita que navegue directo
      serviciosLi.classList.toggle("open");
    }
  });
});
