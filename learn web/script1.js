// script.js

// Select the navbar element
const navbar = document.querySelector('.navbar');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
  // Check the scroll position
  if (window.scrollY > 50) { // If scrolled more than 50px
    navbar.classList.add('fixed-top'); // Add the fixed-top class
  } else {
    navbar.classList.remove('fixed-top'); // Remove the fixed-top class
  }
});

