function parallaxEffect() {
    const parallaxSections = document.querySelectorAll(".parallax");

    window.addEventListener("scroll", function () {
        parallaxSections.forEach(function (section) {
            const distanceFromTop = section.getBoundingClientRect().top;
            const speed = section.getAttribute("data-speed");

            if (distanceFromTop < window.innerHeight) {
                section.style.backgroundPositionY = distanceFromTop * speed + "px";
            }
        });
    });
}

// Ejecutar la función cuando se carga la página
window.addEventListener("load", function () {
    parallaxEffect();
});