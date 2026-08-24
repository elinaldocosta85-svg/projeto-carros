const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu a");
const formulario = document.querySelector("#formulario");
const mensagemForm = document.querySelector("#mensagem-form");
const ano = document.querySelector("#ano");

menuToggle.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    menuToggle.setAttribute("aria-expanded", aberto);
    menuToggle.textContent = aberto ? "×" : "☰";
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("aberto");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.querySelector("#nome").value.trim();

    mensagemForm.textContent =
        `Obrigado, ${nome || "visitante"}! Sua mensagem foi preenchida com sucesso.`;

    formulario.reset();
});

ano.textContent = new Date().getFullYear();
