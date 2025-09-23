// Elementos principales
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle menú hamburguesa
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Submenú "Servicios"
const serviciosLink = document.querySelector(".nav-links li:nth-child(2) > a");
const serviciosSubmenu = document.querySelector(".nav-links li:nth-child(2) ul");

serviciosLink.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault(); // evita navegación
    serviciosSubmenu.classList.toggle("open");
  }
});
