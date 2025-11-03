"use strict";

const phoneInput = document.getElementById("login-form-phone-num");
const submitBtn = document.getElementById("login-form-submit-btn");

const numForm = document.getElementById("login-form");

phoneInput.addEventListener("input", () => {
  const valid = phoneInput.value.trim().length === 10;

  submitBtn.disabled = !valid;

  if (valid) {
    submitBtn.classList.remove(
      "bg-gray-300",
      "text-gray-500",
      "cursor-not-allowed"
    );
    submitBtn.classList.add("bg-blue-600", "text-white", "cursor-pointer");
  } else {
    submitBtn.classList.add(
      "bg-gray-300",
      "text-gray-500",
      "cursor-not-allowed"
    );
    submitBtn.classList.remove("bg-blue-600", "text-white", "cursor-pointer");
  }
});

numForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = phoneInput.value.trim();
  let error = document.querySelector(".errormssg");

  if (num === "8131163888") {
    window.location.href = "./dashboard.html";
    numForm.reset();
  } else {
    error.textContent = "⚠️ Phone number not recognised.";
  }
});

// switch tabs
const phoneLogin = document.getElementById("phone-num-login");
const usernameLogin = document.getElementById("username-login");
// const tabs = document.getElementById("tabs");
const tabBtn = document.getElementById("tab-btn");
const usernameBtn = document.getElementById("username-btn");
const phoneLoginBtn = document.getElementById("phoneLogin-btn");

usernameBtn.addEventListener("click", () => {
  phoneLogin.classList.add("hidden");
  usernameLogin.classList.remove("hidden");
  phoneLoginBtn.classList.remove("active-tab");
  usernameBtn.classList.add("active-tab");
});

phoneLoginBtn.addEventListener("click", () => {
  phoneLogin.classList.remove("hidden");
  usernameLogin.classList.add("hidden");
  phoneLoginBtn.classList.add("active-tab");
  usernameBtn.classList.remove("active-tab");
});

//username error message
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const errUser = document.querySelector(".errorUsername");
  if (username === "manny") {
    errUser.textContent = "";
    window.location.href = "./dashboard.html";
    form.reset();
  } else {
    errUser.textContent = "⚠️Enter valid username";
  }
});
