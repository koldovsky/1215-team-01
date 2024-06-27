  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach(function(accordion) {
    const header = accordion.querySelector('.accordion-header');
    const content = accordion.querySelector('.accordion-content');
    const toggleLabel = header.querySelector('.toggle-label');

    // Initial state setup
    content.style.display = 'none'; // Hide content initially
    toggleLabel.textContent = '+'; // Set initial toggle label

    // Toggle accordion on header click
    header.addEventListener('click', function() {
      // Close all accordions except the current one
      accordions.forEach(function(acc) {
        const accContent = acc.querySelector('.accordion-content');
        const accToggleLabel = acc.querySelector('.toggle-label');

        if (acc !== accordion) {
          accContent.style.display = 'none';
          accToggleLabel.textContent = '+';
        }
      });

      // Toggle current accordion
      if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleLabel.textContent = '-'; // Change label to minus sign when expanded
      } else {
        content.style.display = 'none';
        toggleLabel.textContent = '+'; // Change label back to plus sign when collapsed
      }
    });
  });
