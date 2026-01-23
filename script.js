gsap.registerPlugin(ScrollTrigger);

// Hero Text Reveal
gsap.from(".hero-content h1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out"
});

// Reveal Service Cards on Scroll
gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

//gsap.from(".site-logo", {
    duration: 1.5,
    opacity: 0,
    scale: 0.5,
    rotation: -10,
    ease: "back.out(1.7)"
});

window.addEventListener('load', function() {
    setTimeout(function() {
        // Move your TradingView widget loading code here
        // This gives the rest of your site a 2-second head start
    }, 2000);
});
