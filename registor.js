const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const togglePasswordConfirm = document.querySelector("#togglePasswordConfirm");
const passwordConfirm = document.querySelector("#passwordConfirm");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    const eyeIcon = this.querySelector(".fa-eye-slash");
    eyeIcon.classList.toggle("fa-eye");
});

togglePasswordConfirm.addEventListener("click", function () {
    // toggle the type attribute
    const type = passwordConfirm.getAttribute("type") === "password" ? "text" : "password";
    passwordConfirm.setAttribute("type", type);

    // toggle the icon
    const eyeIcon = this.querySelector(".fa-eye-slash");
    eyeIcon.classList.toggle("fa-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});