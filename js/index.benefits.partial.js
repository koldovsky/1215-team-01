let benefitsImage = document.querySelector(".benefits__image-container");
function toggleOpen() {
  this.classList.toggle("open");
}

benefitsImage.addEventListener('click', toggleOpen);