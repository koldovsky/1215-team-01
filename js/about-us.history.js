
const toggleButtons = document.querySelectorAll('.winemaking-process__button');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const isVisible = details.style.display === 'block';

      // Приховати або показати текст
    details.style.display = isVisible ? 'none' : 'block';

      // Змінити текст кнопки
    button.textContent = isVisible ? '+' : '-';
    });
});
