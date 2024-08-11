// ScrollTrigger.create({
//     animation:gsap.from(".logo", {
//       y:"100vh",
//       scale:4,
//       yPercent:-50
//     }),
//     scrub:true,
//     trigger: ".spacer",
//     start: "top bottom",
//     endTrigger: '.spacer',
//     end: 'top center',
//     markers: true,
//     pin: true,
//     pinSpacing: false
//   })



let currentIndex = 0;
const animationSpeed = 10000;

function moveClick (direction) {
    clearInterval(coursel);
    moveCarousel(direction);
    setTimeout(() => { coursel = setInterval(() => { moveCarousel(1);}, animationSpeed)}, 30000);
}

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + direction + items.length) % items.length;
    
    items[currentIndex].classList.add('active');
}

// Auto-slide functionality
let coursel = setInterval(() => {
    moveCarousel(1);
}, animationSpeed);



document.addEventListener('DOMContentLoaded', () => {
    const targetImage = document.querySelector('.logo-container .logo');

    // Function to check if the target image is in view
    function checkVisibility() {
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

    // Check visibility on scroll and resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});
