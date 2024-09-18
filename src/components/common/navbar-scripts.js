 // JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});
