"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");

// QUERYSELECTORALL pour selectionner plusieurs éléments qui ont la meme classe
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}
