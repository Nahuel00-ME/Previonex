document.addEventListener("DOMContentLoaded", () => {
  // --- MENU HAMBURGUESA ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const submenuToggle = document.querySelector(".submenu-toggle");
  const submenuLi = submenuToggle.parentElement;

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active-menu");
  });

  submenuToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      submenuLi.classList.toggle("active-submenu");
    }
  });

  // Cerrar menú si se hace click fuera
  document.addEventListener("click", () => {
    navLinks.classList.remove("active-menu");
    submenuLi.classList.remove("active-submenu");
  });

  navLinks.addEventListener("click", (e) => e.stopPropagation());

  // --- BOTON WHATSAPP ---
  const btnWhatsapp = document.getElementById("btn-whatsapp");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btnWhatsapp.classList.add("show");
    } else {
      btnWhatsapp.classList.remove("show");
    }
  });
});

