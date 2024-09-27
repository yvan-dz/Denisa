// Apparition douce à l'arrivée de la page
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});



// Simple fade-in effect when scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(sectionPosition < screenPosition) {
            section.classList.add('fade-in');
        }
    });
});

// Effet de défilement fluide vers les sections
$(document).ready(function(){
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
});

// Apparition des sections lors du scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // To show elements already in view on page load
});

// Affiche le bouton lorsque l'utilisateur fait défiler la page
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block"; // Affiche le bouton
    } else {
        scrollTopBtn.style.display = "none"; // Cache le bouton
    }
}

// Fonction pour revenir en haut de la page avec un défilement smooth
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
}
