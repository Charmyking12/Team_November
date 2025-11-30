// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // When the element is visible in the viewport, add the 'show' class
            entry.target.classList.add('show');
        }
    });
});

// Find all elements with the class "hidden" (We added this class to your cards in the HTML)
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));