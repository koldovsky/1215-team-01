const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach(function (accordion) {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");
  const toggleLabel = header.querySelector(".toggle-label");

  content.style.display = "none";
  toggleLabel.textContent = "+";

  header.addEventListener("click", function () {
    accordions.forEach(function (acc) {
      const accContent = acc.querySelector(".accordion-content");
      const accToggleLabel = acc.querySelector(".toggle-label");

      if (acc !== accordion) {
        accContent.style.display = "none";
        accToggleLabel.textContent = "+";
      }
    });

    if (content.style.display === "none") {
      content.style.display = "block";
      toggleLabel.textContent = "-";
    } else {
      content.style.display = "none";
      toggleLabel.textContent = "+";
    }
  });
});
