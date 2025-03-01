// Skrypt do animacji pojawiania się elementów
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const checkVisibility = () => {
        fadeElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Sprawdź, czy element jest w widocznym obszarze ekranu
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible"); // Opcjonalnie: usuń klasę, jeśli element znika z widoku
            }
        });
    };

    // Sprawdzaj widoczność przy ładowaniu strony i przewijaniu
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    // Sprawdź widoczność na starcie
    checkVisibility();
});

// Skrypt do obsługi menu hamburgera
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}