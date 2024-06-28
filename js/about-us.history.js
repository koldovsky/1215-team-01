const carousel = document.querySelector('.winemaking-process__carousel');
const slides = Array.from(document.querySelectorAll('.winemaking-process__slide'));
const leftControl = document.querySelector('.winemaking-process__carousel-control--left');
const rightControl = document.querySelector('.winemaking-process__carousel-control--right');
const totalSlides = slides.length;

const firstSlideClone = slides[0].cloneNode(true);
const secondSlideClone = slides[1].cloneNode(true);
const thirdSlideClone = slides[2].cloneNode(true);
const lastSlideClone = slides[totalSlides - 1].cloneNode(true);

let currentIndex = 1; 
let isTransitioning = false;
let slidesToShow = 3;

carousel.appendChild(firstSlideClone);
carousel.appendChild(secondSlideClone);
carousel.appendChild(thirdSlideClone); 
carousel.insertBefore(lastSlideClone, slides[0]);

function updateCarousel() {
  const slideWidth = 100 / slidesToShow;
  const offset = -currentIndex * slideWidth;
  carousel.style.transition = isTransitioning ? 'transform 0.5s ease-in-out' : 'none';
  carousel.style.transform = `translateX(${offset}%)`;
}

function handleTransitionEnd() {
  isTransitioning = false;
  if (currentIndex === 0) {
    currentIndex = totalSlides;
    carousel.style.transition = 'none';
    updateCarousel();
  } else if (currentIndex === totalSlides + 1) {
    currentIndex = 1;
    carousel.style.transition = 'none';
    updateCarousel();
  }
}

leftControl.addEventListener('click', () => {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex--;
  updateCarousel();
});

rightControl.addEventListener('click', () => {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex++;
  updateCarousel();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1305) {
    slidesToShow = 3;
  } else if (window.innerWidth > 812) {
    slidesToShow = 2;
  } else {
    slidesToShow = 1;
  }
  updateCarousel();
});

const toggleButtons = document.querySelectorAll('.winemaking-process__button');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const isVisible = details.style.display === 'block';


    details.style.display = isVisible ? 'none' : 'block';

    button.textContent = isVisible ? '+' : '-';
    });
});

carousel.addEventListener('transitionend', handleTransitionEnd);

updateCarousel();
