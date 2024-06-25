document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".visit-us__form form");
  const submitButton = form.querySelector(".visit-us__submit");
  const formGroups = form.querySelectorAll(".visit-us__form-group");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let formIsValid = true;

    formGroups.forEach((group) => {
      const input = group.querySelector("input, textarea");
      if (input.hasAttribute("required") && !input.value.trim()) {
        formIsValid = false;
        group.classList.add("visit-us__form-group--error");
      } else {
        group.classList.remove("visit-us__form-group--error");
      }
    });

    if (formIsValid) {
      const formData = new FormData(form);
      fetch("submit.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            showSuccessMessage();
            form.reset();
          } else {
            showErrorMessage();
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          showErrorMessage();
        });
    }
  });

  function showSuccessMessage() {
    const successMessage = document.createElement("p");
    successMessage.classList.add("visit-us__message", "visit-us__message--success");
    successMessage.textContent = "Form submitted successfully!";
    form.appendChild(successMessage);
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  }

  function showErrorMessage() {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("visit-us__message", "visit-us__message--error");
    errorMessage.textContent = "An error occurred. Please try again.";
    form.appendChild(errorMessage);
    setTimeout(() => {
      errorMessage.remove();
    }, 3000);
  }
});
