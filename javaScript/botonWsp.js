document.addEventListener("DOMContentLoaded", () => {
  const btnWhatsapp = document.getElementById("btn-whatsapp");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { // aparece después de 200px de scroll
      btnWhatsapp.classList.add("show");
    } else {
      btnWhatsapp.classList.remove("show");
    }
  });
});
