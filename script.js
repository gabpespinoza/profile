        /**
 * Product Portfolio Smooth Scroll Reveal Logic
 * Runs high-efficiency intersection monitors to fire sliding animation cascades
 */
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Triggers once for optimal rendering speeds
            }
        });
    };

    const revealOptions = {
        root: null,
        threshold: 0.1, // Element activates as soon as 10% crosses the viewport
        rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });

    // Optional: Add staggered animation for carousel items
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});