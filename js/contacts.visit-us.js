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
              alert("Form submitted successfully!");
              form.reset();
            } else {
              alert("An error occurred. Please try again.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
          });
      } else {
        alert("Please fill in all required fields.");
      }
    });
  });
  