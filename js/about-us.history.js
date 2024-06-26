const carousel = document.querySelector('.winemaking-process__carousel');
let slidesPerView = getSlidesPerView();
let currentIndex = slidesPerView;

setupCarousel();

function setupCarousel() {
  const slides = Array.from(document.querySelectorAll('.winemaking-process__slide'));
  const carouselInner = document.querySelector('.winemaking-process__carousel .winemaking-process__carousel-inner');

  slides.forEach(slide => {
    if (slide.classList.contains('clone')) {
          slide.remove();
        }
  });

  const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
  const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

  carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

  updateCarousel();
}

function cloneSlide(slide) {
  const clone = slide.cloneNode(true);
  clone.classList.add('clone');
  return clone;
}

function updateCarousel() {
  const carouselInner = document.querySelector('.winemaking-process__carousel .winemaking-process__carousel-inner');
  carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
}

  document.querySelector('.winemaking-process__carousel-control--left').addEventListener('click', () => {
      if (--currentIndex < 0) {
          currentIndex = slides.length - slidesPerView * 2 - 1;
          const carouselInner = document.querySelector('.winemaking-process__carousel .winemaking-process__carousel-inner');
          carouselInner.style.transition = 'none';
          updateCarousel();
          requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                  carouselInner.style.transition = '';
              });
          });
      }
      updateCarousel();
  });

  document.querySelector('.winemaking-process__carousel-control--right').addEventListener('click', () => {
      const slides = document.querySelectorAll('.winemaking-process__slide');
      if (++currentIndex >= slides.length - slidesPerView) {
          currentIndex = slidesPerView;
          const carouselInner = document.querySelector('.winemaking-process__carousel .winemaking-process__carousel-inner');
          carouselInner.style.transition = 'none';
          updateCarousel();
          requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                  carouselInner.style.transition = '';
              });
          });
      }
      updateCarousel();
  });

  window.addEventListener('resize', () => {
      slidesPerView = getSlidesPerView();
      setupCarousel();
  });


    function getSlidesPerView() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
          return 3;
      } else if (screenWidth >= 768) {
          return 2;
      } else {
          return 1; 
      }
    }
