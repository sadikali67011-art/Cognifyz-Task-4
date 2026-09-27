// ===============================
// Get HTML Elements
// ===============================

const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput =
    document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError =
    document.getElementById("confirmPasswordError");

const successMessage =
    document.getElementById("successMessage");


// ===============================
// Validation Functions
// ===============================

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Name is required.";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");

        return false;
    }

    if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");

        return false;
    }

    nameError.textContent = "";
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");

    return true;
}


function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Email is required.";

        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");

        return false;
    }

    if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");

        return false;
    }

    emailError.textContent = "";
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");

    return true;
}


function validatePhone() {

    const phone = phoneInput.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        phoneError.textContent =
            "Phone number is required.";

        phoneInput.classList.add("invalid");
        phoneInput.classList.remove("valid");

        return false;
    }

    if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Phone number must contain exactly 10 digits.";

        phoneInput.classList.add("invalid");
        phoneInput.classList.remove("valid");

        return false;
    }

    phoneError.textContent = "";
    phoneInput.classList.add("valid");
    phoneInput.classList.remove("invalid");

    return true;
}


function validatePassword() {

    const password = passwordInput.value;

    if (password === "") {

        passwordError.textContent =
            "Password is required.";

        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");

        return false;
    }

    if (password.length < 8) {

        passwordError.textContent =
            "Password must contain at least 8 characters.";

        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");

        return false;
    }

    passwordError.textContent = "";
    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");

    return true;
}


function validateConfirmPassword() {

    const password = passwordInput.value;
    const confirmPassword =
        confirmPasswordInput.value;

    if (confirmPassword === "") {

        confirmPasswordError.textContent =
            "Please confirm your password.";

        confirmPasswordInput.classList.add("invalid");
        confirmPasswordInput.classList.remove("valid");

        return false;
    }

    if (password !== confirmPassword) {

        confirmPasswordError.textContent =
            "Passwords do not match.";

        confirmPasswordInput.classList.add("invalid");
        confirmPasswordInput.classList.remove("valid");

        return false;
    }

    confirmPasswordError.textContent = "";
    confirmPasswordInput.classList.add("valid");
    confirmPasswordInput.classList.remove("invalid");

    return true;
}


// ===============================
// Real-Time Validation
// ===============================

nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

phoneInput.addEventListener("input", validatePhone);

passwordInput.addEventListener("input", () => {

    validatePassword();

    if (confirmPasswordInput.value !== "") {
        validateConfirmPassword();
    }
});

confirmPasswordInput.addEventListener(
    "input",
    validateConfirmPassword
);


// ===============================
// Form Submit
// ===============================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const validName = validateName();
    const validEmail = validateEmail();
    const validPhone = validatePhone();
    const validPassword = validatePassword();
    const validConfirmPassword =
        validateConfirmPassword();

    if (
        validName &&
        validEmail &&
        validPhone &&
        validPassword &&
        validConfirmPassword
    ) {

        // Dynamic DOM Manipulation
        successMessage.innerHTML = `
            <div class="success-box">
                <h3>Registration Successful! 🎉</h3>

                <p>
                    Welcome, ${nameInput.value.trim()}!
                </p>

                <p>
                    Your registration has been
                    successfully submitted.
                </p>
            </div>
        `;

        // Clear form
        form.reset();

        // Remove validation classes
        nameInput.classList.remove("valid");
        emailInput.classList.remove("valid");
        phoneInput.classList.remove("valid");
        passwordInput.classList.remove("valid");
        confirmPasswordInput.classList.remove("valid");

    } else {

        successMessage.innerHTML = "";

    }

});