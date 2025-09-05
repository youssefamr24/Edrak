document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("productModal");
    const closeBtn = document.querySelector(".close");
    const cards = document.querySelectorAll(".card"); // target entire card

    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            // prevent clicks on the close button from re-opening
            if (e.target.classList.contains("close")) return;

            const imgSrc = card.querySelector("img").src;
            const title = card.querySelector("h3").innerText;
            const desc = card.querySelector("p").innerText;

            modalImage.src = imgSrc;
            modalTitle.innerText = title;
            modalDescription.innerText = desc;

            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
