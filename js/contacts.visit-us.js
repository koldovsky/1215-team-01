const form = document.querySelector(".visit-us__form form");
const fullName = document.getElementById("full-name");
const phoneNumber = document.getElementById("phone-number");
const email = document.getElementById("email");
const submitButton = form.querySelector(".visit-us__submit");

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
  const small = formGroup.querySelector(".visit__error-message");
  small.innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error");
  formGroup.classList.add("success");
  const small = formGroup.querySelector(".error-message");
  small.innerText = "";
}

function checkFullNameLength() {
  const inputValue = fullName.value.trim();
  if (inputValue.length < 3 || inputValue.length > 30) {
    showError(fullName, "Full name must be between 3 and 30 characters");
    return false;
  } else {
    showSuccess(fullName);
    return true;
  }
}

function checkPhoneNumberFormat() {
  const inputValue = phoneNumber.value.trim();
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(inputValue)) {
    showError(phoneNumber, "Phone number must be 10 digits");
    return false;
  } else {
    showSuccess(phoneNumber);
    return true;
  }
}

function checkEmailFormat() {
  const inputValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputValue)) {
    showError(email, "Invalid email format");
    return false;
  } else {
    showSuccess(email);
    return true;
  }
}

fullName.addEventListener("input", function () {
  validateForm();
});

phoneNumber.addEventListener("input", function () {
  validateForm();
});

email.addEventListener("input", function () {
  validateForm();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (checkFullNameLength() && checkPhoneNumberFormat() && checkEmailFormat()) {
    form.submit();
  }
});

function validateForm() {
  if (checkFullNameLength() && checkPhoneNumberFormat() && checkEmailFormat()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
