const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links > li > a');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
}

// Para abrir submenús en móvil
menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const parentLi = item.parentElement;
    if (parentLi.querySelector('ul')) {
      e.preventDefault(); // Evita que se vaya a la página
      parentLi.classList.toggle('open');
    }
  });
});
