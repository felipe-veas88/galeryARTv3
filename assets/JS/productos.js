// productos.js

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".artwork img");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const closeModal = document.getElementById("closeModal");
  const closeButton = document.getElementById("closeButton");
  const deleteImage = document.getElementById("deleteImage");
  let currentImage = null;

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImage.src = item.src;
      const card = item.closest(".card");
      const title = card.querySelector(".card-title").textContent;
      const text = card.querySelector(".card-text").textContent;
      modalTitle.textContent = `Título: ${title}`;
      modalText.textContent = `Autor: ${text}`;
      currentImage = item;
    });
  });

  const closeModalFunction = () => {
    modal.style.display = "none";
    modalImage.src = "";
    modalTitle.textContent = "";
    modalText.textContent = "";
  };

  closeModal.addEventListener("click", closeModalFunction);
  closeButton.addEventListener("click", closeModalFunction);

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModalFunction();
    }
  });

  deleteImage.addEventListener("click", () => {
    if (currentImage) {
      currentImage.closest(".artwork").remove();
      closeModalFunction();
    }
  });
});
