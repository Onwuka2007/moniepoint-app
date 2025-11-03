"use strict";

const phoneInput = document.getElementById("login-form-phone-num");
const submitBtn = document.getElementById("login-form-submit-btn");

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
  const error = document.querySelector(".errormssg");

  if (username === "manny") {
    error.textContent = "";
    window.location.href = "./dashboard.html";
    form.reset();
  } else {
    error.textContent = "⚠️Enter valid username";
  }
});
