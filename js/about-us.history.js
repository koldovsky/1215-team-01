document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.winemaking-process__slide');
    const leftButton = document.querySelector('.winemaking-process__carousel-control--left');
    const rightButton = document.querySelector('.winemaking-process__carousel-control--right');
    const buttons = document.querySelectorAll('.winemaking-process__button');
    let currentIndex = 0;
  
    function showSlides(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlides(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlides(currentIndex);
    }
  
    leftButton.addEventListener('click', prevSlide);
    rightButton.addEventListener('click', nextSlide);
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const details = this.nextElementSibling;
        if (details.style.display === 'block') {
          details.style.display = 'none';
        } else {
          details.style.display = 'block';
        }
      });
    });
  
    showSlides(currentIndex);
  });
