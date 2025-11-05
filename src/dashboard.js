"use strict";

const slides = document.querySelectorAll(".hero-bg");
let current = 0;

function changeSlides() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

setInterval(changeSlides, 3000);

// Modals
const overlay = document.getElementById("overlay");
const accountsModal = document.getElementById("accountsModal");
const openAccBtn = document.getElementById("openAccountsBtn");
const paymentModal = document.getElementById("paymentModal");
const paymentModalBtn = document.getElementById("paymentModalBtn");
const closePaymentModalBtn = document.getElementById("closePaymentModalBtn");

// Accounts modal
function openAccModal() {
  overlay.classList.remove("hidden");
  accountsModal.classList.remove("hidden", "translate-y-full");
  document.body.classList.add("overflow-hidden");
}

function closeAccModal() {
  overlay.classList.add("hidden");
  accountsModal.classList.add("translate-y-full");
  document.body.classList.remove("overflow-hidden");
}

openAccBtn.addEventListener("click", openAccModal);
overlay.addEventListener("click", closeAccModal);

// Payments modal
function openPayModal() {
  overlay.classList.remove("hidden");
  paymentModal.classList.remove("hidden");
  paymentModal.classList.add("flex", "flex-col", "gap-4");
  paymentModalBtn.classList.add("hidden");
  closePaymentModalBtn.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closePayModal() {
  overlay.classList.add("hidden");
  paymentModal.classList.add("hidden");
  paymentModalBtn.classList.remove("hidden");
  closePaymentModalBtn.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

paymentModalBtn.addEventListener("click", openPayModal);
closePaymentModalBtn.addEventListener("click", closePayModal);
overlay.addEventListener("click", closePayModal);
