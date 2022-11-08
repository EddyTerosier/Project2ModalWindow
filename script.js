"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");

// QUERYSELECTORALL pour selectionner plusieurs éléments qui ont la meme classe
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    // .classList.remove = retirer une classe séléctionner à un élément ( sans point devant)
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
