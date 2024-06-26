const form = document.querySelector('.tasting__form form');
const name = document.getElementById('name');
const phoneNumber = document.getElementById('phone-number');

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add('error');
  formGroup.classList.remove('success');
  const small = formGroup.querySelector('.error-message');
  small.innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('error');
  formGroup.classList.add('success');
  const small = formGroup.querySelector('.error-message');
  small.innerText = '';
}

function checkNameLength() {
  const inputValue = name.value.trim();
  if (inputValue.length < 3 || inputValue.length > 30) {
    showError(name, 'Name must be between 3 and 30 characters');
  } else {
    showSuccess(name);
  }
}

function checkPhoneNumberFormat() {
  const inputValue = phoneNumber.value.trim();
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(inputValue)) {
    showError(phoneNumber, 'Phone number must be 10 digits');
  } else {
    showSuccess(phoneNumber);
  }
}

name.addEventListener('input', function() {
  checkNameLength();
});

phoneNumber.addEventListener('input', function() {
  checkPhoneNumberFormat();
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkNameLength();
  checkPhoneNumberFormat();
});
