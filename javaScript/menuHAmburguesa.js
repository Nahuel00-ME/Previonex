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
  link.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    // solo móviles → abrir/cerrar submenú
    // Aquí puedes agregar la lógica para abrir/cerrar el submenú en móviles
  } else {
    // desktop → evitar que href="#" haga scroll arriba
    const href = link.getAttribute("href");
    if (!href || href === "#") {
      e.preventDefault();
    }
  }
})
;});
