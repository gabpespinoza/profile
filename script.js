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

/// tool category carrusel
const categories = document.querySelectorAll(".tool-category");

let current = 0;
let autoSlide;

function showCategory(index){

    categories.forEach((cat,i)=>{

        cat.classList.remove("active");

    });

    categories[index].classList.add("active");

}

function nextSlide(){

    current++;

    if(current >= categories.length){
        current = 0;
    }

    showCategory(current);

}

function startSlider(){

    autoSlide = setInterval(nextSlide,3500);

}

function stopSlider(){

    clearInterval(autoSlide);

}

showCategory(current);

startSlider();

const slider=document.querySelector(".category-container");

slider.addEventListener("mouseenter",stopSlider);

slider.addEventListener("mouseleave",startSlider);