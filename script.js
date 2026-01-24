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

// Intersection Observer for Section Visibility
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

// Site Logo Animation
gsap.from(".site-logo", {
    duration: 1.5,
    opacity: 0,
    scale: 0.5,
    rotation: -10,
    ease: "back.out(1.7)"
});

// Widget Delayed Loading
window.addEventListener('load', function() {
    setTimeout(function() {
        // Move your TradingView widget loading code here
        // This gives the rest of your site a 2-second head start
    }, 2000);
});

/* ==========================================
   NEW: MISSION BRIEF (CONTACT FORM) HANDLER
   ========================================== */
const contactForm = document.getElementById('contactForm');

// We check if the form exists on the current page (contact.html)
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Stop the page from reloading
        
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        try {
            // Pointing to your live Render backend
            const response = await fetch('https://mcben-energy-solutions-hub.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                alert("MISSION BRIEF RECEIVED: " + result.message);
                e.target.reset(); // Clear form fields
            } else {
                alert("TRANSMISSION FAILED. SERVER RESPONDED WITH AN ERROR.");
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            alert("CONNECTION ERROR. THE COMMAND CENTER IS UNREACHABLE.");
        }
    });
}
