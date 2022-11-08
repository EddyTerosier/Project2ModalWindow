"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// QUERYSELECTORALL pour selectionner plusieurs éléments qui ont la meme classe
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
// .classList.remove = retirer une classe séléctionner à un élément ( sans point devant)
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
const closeModal = function (){
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown",function(e){
    if (e.key === "Escape") {
      if (!modal.classList.contains("hidden")) {
        closeModal();
      }
    }
  } )
}
