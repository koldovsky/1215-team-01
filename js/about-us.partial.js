document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;
  const totalItems = 4;
  let itemsToShow = 3;

  function updateItemsToShow() {
    if (window.innerWidth <= 480) {
      itemsToShow = 1;
    } else if (window.innerWidth <= 768) {
      itemsToShow = 2;
    } else {
      itemsToShow = 3;
    }
  }

  function updateCarousel() {
    updateItemsToShow();
    const itemWidth = carousel.offsetWidth / itemsToShow;
    const newTransform = `translateX(-${currentIndex * itemWidth}px)`;
    carousel.style.transform = newTransform;
    console.log(`Carousel updated: ${newTransform}`);
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - itemsToShow;
    }
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsToShow) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);

  updateCarousel();
});