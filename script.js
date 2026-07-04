const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const notifyForm = document.querySelector(".notify-form");
const formMessage = document.querySelector(".form-message");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

notifyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(notifyForm).get("email");

  if (!email) {
    formMessage.textContent = "Digite seu e-mail para receber as novidades.";
    return;
  }

  formMessage.textContent = "Pronto. Vamos avisar quando a abertura estiver próxima.";
  notifyForm.reset();
});
