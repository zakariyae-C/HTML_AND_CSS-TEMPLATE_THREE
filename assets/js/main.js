const loginFormBtn = document.getElementById("login-form-open"),
  signupFormBtn = document.getElementById("signup-form-open"),
  loginSignup = document.querySelector(".login-signup"),
  formContainer = document.querySelector(".form-container"),
  formCloseBtn = document.querySelector(".form-close"),
  signupBtn = document.getElementById("signup"),
  loginBtn = document.getElementById("login"),
  pwShowHide = document.querySelectorAll(".pw-hide");
/* Stat Show login automaticaly */
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    if (loginSignup.classList.length === 1) {
      loginSignup.classList.add("show-login");
      document.body.style.overflow = "hidden";
    }
  }, 2000);
});
/* End Show login automaticaly */
/*Start Show login and signup pop-up*/
loginFormBtn.addEventListener("click", () => {
  if (loginSignup.classList.length === 1) {
    loginSignup.classList.add("show-login");
    document.body.style.overflow = "hidden";
  }
});
signupFormBtn.addEventListener("click", () => {
  if (loginSignup.classList.length === 1) {
    loginSignup.classList.add("show-signup");
    document.body.style.overflow = "hidden";
  }
});
/*End Show login and signup pop-up*/
/*Start CLick on close button to close the form*/
formCloseBtn.addEventListener("click", () => {
  loginSignup.classList.remove("show-login", "show-signup");
  document.body.style.overflow = "";
});
/*End CLick on close button to close the form*/
/*Start Click outside to close this pop-up*/
loginSignup.addEventListener("click", (event) => {
  if (event.target === loginSignup) {
    loginSignup.classList.remove("show-login", "show-signup");
    document.body.style.overflow = "";
  }
});
/*End Click outside to close this pop-up*/
/*Start Change from login to signup and the opposit is right*/
signupBtn.addEventListener("click", (event) => {
  event.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  formContainer.classList.remove("active");
});
/*End Change from login to signup and the opposit is right*/
/* Start pwShowHide */
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});
/* End pwShowHide */

/* Start Show nav burgerMenu */
document.querySelector(".burger-menu").addEventListener("click", () => {
  document.querySelector(".burger-menu").classList.toggle("active");
});
/* End Show nav burgerMenu */
