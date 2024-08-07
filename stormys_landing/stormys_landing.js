document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        animation: gsap.to(".logo", {
            y: -180, // Adjust this value as needed
            scale: 0.38, // Scale to the desired final size
            yPercent: -50,
            ease: "none"
        }),
        scrub: true,
        trigger: ".content-container",
        start: "top bottom",
        end: "top center",
        pin: ".logo-container",
        pinSpacing: false
    });
});




