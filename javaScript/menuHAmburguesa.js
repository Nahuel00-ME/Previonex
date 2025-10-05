document.addEventListener("DOMContentLoaded", () => {
  // --- MENU HAMBURGUESA ---
  const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        
        // Cerrar todos los submenús cuando se abre/cierra el menú principal
        document.querySelectorAll('.has-submenu').forEach(item => {
            item.classList.remove('active-submenu');
        });
    });

    // Manejar cada submenu individualmente
    submenuToggles.forEach(toggle => {
        const submenuLi = toggle.parentElement;
        
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                // Cerrar otros submenús abiertos
                document.querySelectorAll('.has-submenu').forEach(item => {
                    if (item !== submenuLi) {
                        item.classList.remove('active-submenu');
                    }
                });
                
                // Alternar el submenu actual
                submenuLi.classList.toggle('active-submenu');
            }
        });
    });

    // Cerrar menús al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            document.querySelectorAll('.has-submenu').forEach(item => {
                item.classList.remove('active-submenu');
            });
        }
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

