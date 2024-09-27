// Fonction pour gérer l'affichage du carrousel et de la grille de photos
function toggleGallery(expoId) {
    const carousel = document.getElementById(`carousel${expoId}`);
    const photoGrid = document.getElementById(`photo-grid-${expoId.toLowerCase()}`);
    const showGridButton = document.getElementById(`show-grid-${expoId.toLowerCase()}`);
    const hideGridButton = document.getElementById(`hide-grid-${expoId.toLowerCase()}`);

    showGridButton.addEventListener('click', function() {
        carousel.style.display = 'none';
        photoGrid.style.display = 'block';
        showGridButton.style.display = 'none';
        hideGridButton.style.display = 'inline-block';
    });

    hideGridButton.addEventListener('click', function() {
        carousel.style.display = 'block';
        photoGrid.style.display = 'none';
        showGridButton.style.display = 'inline-block';
        hideGridButton.style.display = 'none';
    });
}

// Appel de la fonction pour chaque section d'exposition
toggleGallery('Expo1');  // Exposition 1
toggleGallery('Expo2');  // Exposition 2
toggleGallery('Expo3');  // Exposition 3
toggleGallery('Expo4');  // Exposition 4


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
