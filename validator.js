const form = document.querySelector("form");
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const errorPasswordMessage = document.querySelector(".error-password");
const errorEmailMessage = document.querySelector(".error-email");
const successMessage = document.querySelector(".success-message");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    const checkPassword = passwordRegex.test(password.value);
    const checkEmail = emailRegex.test(email.value);

    if (!checkPassword) {
        errorPasswordMessage.classList.remove("error-password");
    } else {
        errorPasswordMessage.classList.add("error-password");
        successMessage.style.display = "none";
    }
    if (!checkEmail) {
        errorEmailMessage.classList.remove("error-email");
    } else {
        errorEmailMessage.classList.add("error-email");
        successMessage.style.display = "none";
    }
    if (checkPassword && checkEmail) {
        successMessage.style.display = "initial";
    }
})