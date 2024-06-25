const closeButton = document.querySelector(".map__close-button");
const addressBox = document.querySelector(".map__address-box");

closeButton.addEventListener("click", function () {
  addressBox.style.display = "none";
});

