
let currentIndex = 0;
const animationSpeed = 5000;
let pauseTimeout; // Declare a variable to store the timeout ID

function moveClick(direction) {
    clearInterval(carouselInterval); // Stop the auto-slide
    moveCarousel(direction); // Move the carousel based on the direction

    // Clear any existing timeout and set a new one to restart auto-slide after 30 seconds
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(() => {
        carouselInterval = setInterval(() => {
            moveCarousel(1);
        }, animationSpeed);
    }, 15000);
}

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + direction + items.length) % items.length;
    
    items[currentIndex].classList.add('active');
}

// Auto-slide functionality
let carouselInterval = setInterval(() => {
    moveCarousel(1);
}, animationSpeed);




document.addEventListener('DOMContentLoaded', () => {
    const targetImage = document.querySelector('.logo-container .logo');
    const navbarLogo = document.querySelector('.navbar-brand .logo');

    const originalHeight = targetImage.clientHeight;
    const minHeight = 70; // Minimum height for the logo
    const shrinkRange = originalHeight - minHeight;

    // Function to handle shrinking logic
    function shrinkLogo() {
        const scrollDistance = window.scrollY;
        const newHeight = Math.max(minHeight, originalHeight - (shrinkRange * (scrollDistance / 300)));

        targetImage.style.height = `${newHeight}px`;
        targetImage.style.width = 'auto'; // Maintain aspect ratio
    }

    // Function to check visibility and flip logos
    function checkVisibilityAndFlip() {
        const rect = targetImage.getBoundingClientRect();
        const inViewport = rect.top >= 0 && rect.left >= 0 &&
                           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                           rect.right <= (window.innerWidth || document.documentElement.clientWidth);

        if (inViewport) {
            document.body.classList.remove('flip-icon');
        } else {
            document.body.classList.add('flip-icon');
        }
    }

    // Combine shrinking and flip logic on scroll and resize
    function handleScrollAndResize() {
        shrinkLogo();
        checkVisibilityAndFlip();
    }

    // Handle scroll and resize events
    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    // Initial check
    handleScrollAndResize();
});





document.addEventListener('DOMContentLoaded', function() {
    const presentationContainer = document.querySelector('.presentation-container');
    const pictureLeft = document.querySelector('.picture-left');
    const pictureRight = document.querySelector('.picture-right');

    // Initial state: hide the images off the screen
    pictureLeft.style.transform = 'translateX(-100%)';
    pictureRight.style.transform = 'translateX(100%)';
    pictureLeft.style.transition = 'transform 1s ease';
    pictureRight.style.transition = 'transform 1s ease';

    function checkPosition() {
        const rect = presentationContainer.getBoundingClientRect();
        const inView = (rect.top <= window.innerHeight && rect.bottom >= 0);

        if (inView) {
            // Slide images into view
            pictureLeft.style.transform = 'translateX(0)';
            pictureRight.style.transform = 'translateX(0)';
        } else {
            // Slide images back out
            pictureLeft.style.transform = 'translateX(-100%)';
            pictureRight.style.transform = 'translateX(100%)';
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkPosition);
    // Check the position initially in case the container is already in view
    checkPosition();
});