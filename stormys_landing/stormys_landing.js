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

