emailjs.init({
  publicKey: "5Zsz1brrfa9gcUYHX",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_u68lkn7", "template_ya0v3tg", form)
    .then(() => {
      alert("✔ ¡Mensaje enviado!");
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("❌ Error al enviar.");
    });
});
