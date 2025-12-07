document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Simple animation for bars could be added in CSS with .active class
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }

            // Smmooth scroll handled by CSS, but we can add offset if needed
        });
    });

    // Intersection Observer for Fade-in on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('.section-title, .about-text p, .card, .timeline-item');

    animateElements.forEach(el => {
        el.classList.add('scroll-animation');
        observer.observe(el);
    });

    // Email Obfuscation
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const user = emailLink.getAttribute('data-user');
            const domain = emailLink.getAttribute('data-domain');
            const email = `${user}@${domain}`;
            
            // Update href and text content
            emailLink.href = `mailto:${email}`;
            emailLink.textContent = email;
            
            // Open mail client
            window.location.href = `mailto:${email}`;
        });
    }
});
