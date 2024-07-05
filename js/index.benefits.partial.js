const benefitsImage = document.querySelector(".benefits-container");
function toggleOpen() {
  this.classList.toggle("open");
}

benefitsImage.addEventListener('click', toggleOpen);