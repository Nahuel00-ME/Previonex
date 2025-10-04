document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  const messageDiv = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        messageDiv.textContent = "✅ Formulario enviado con éxito";
        messageDiv.className = "form-message success";
        form.reset();
      } else {
        messageDiv.textContent = "❌ Hubo un error al enviar el formulario.";
        messageDiv.className = "form-message error";
      }
    } catch (error) {
      messageDiv.textContent = "❌ Error de conexión. Inténtalo más tarde.";
      messageDiv.className = "form-message error";
    }
  });
});
setTimeout(() => { messageDiv.textContent = ""; messageDiv.className = "form-message"; }, 5000);
