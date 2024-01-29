'use strict';

const registrForm = document.querySelector('form.login-form');

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    } else { 
        const customerData = {
            email: email.trim(),
            password: password.trim()
        }
        console.log(customerData);
    }
        form.reset();
}

registrForm.addEventListener("submit", handleSubmit);

const placeholdersInfo = document.querySelectorAll("input");

placeholdersInfo.forEach(placeholderInfo => {
    placeholderInfo.addEventListener("focus", () => {
        placeholderInfo.setAttribute("placeholder", "Type area");
        placeholderInfo.classList.add("active");
    });

    placeholderInfo.addEventListener("blur", () => {
        placeholderInfo.removeAttribute("placeholder");
        placeholderInfo.classList.remove("active");
    });
});