document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".buscador-input");
    const searchResults = document.getElementById("searchResults");


    const cards = document.querySelectorAll("article[data-bs-toggle='modal']");


    const items = [...cards].map(card => {
        const titulo = card.querySelector("h3, h6")?.textContent.trim();
        const imagen = card.querySelector("img")?.src;
        const modal = card.getAttribute("data-bs-target");

        return { titulo, imagen, modal };
    });

    searchInput.addEventListener("input", () => {
        const texto = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (texto.length === 0) {
            searchResults.style.display = "none";
            return;
        }

        const filtrados = items.filter(item =>
            item.titulo.toLowerCase().includes(texto)
        );

        if (filtrados.length === 0) {
            searchResults.innerHTML = "<p class='p-2 text-light'>Sin resultados...</p>";
            searchResults.style.display = "block";
            return;
        }

        filtrados.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("result-item");

            div.innerHTML = `
        <img src="${item.imagen}">
        <span>${item.titulo}</span>
      `;

            div.addEventListener("click", () => {
                const modalEl = document.querySelector(item.modal);
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            });

            searchResults.appendChild(div);
        });

        searchResults.style.display = "block";
    });

    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target)) {
            searchResults.style.display = "none";
        }
    });
});
