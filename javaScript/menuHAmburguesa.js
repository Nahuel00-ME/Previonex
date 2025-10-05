const btnWhatsapp = document.getElementById("btn-whatsapp");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnWhatsapp.classList.add("show");
  } else {
    btnWhatsapp.classList.remove("show");
  }
});