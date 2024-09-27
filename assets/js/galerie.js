

document.addEventListener('DOMContentLoaded', function () {
    const photoGallery = document.getElementById('photo-gallery');
    const videoGallery = document.getElementById('video-gallery');
    const showPhotosBtn = document.getElementById('show-photos');
    const showVideosBtn = document.getElementById('show-videos');

    if (showPhotosBtn && showVideosBtn) {
        showPhotosBtn.addEventListener('click', function () {
            photoGallery.style.display = 'block';
            videoGallery.style.display = 'none';
            showPhotosBtn.classList.add('btn-primary');
            showPhotosBtn.classList.remove('btn-secondary');
            showVideosBtn.classList.add('btn-secondary');
            showVideosBtn.classList.remove('btn-primary');
        });

        showVideosBtn.addEventListener('click', function () {
            photoGallery.style.display = 'none';
            videoGallery.style.display = 'block';
            showPhotosBtn.classList.add('btn-secondary');
            showPhotosBtn.classList.remove('btn-primary');
            showVideosBtn.classList.add('btn-primary');
            showVideosBtn.classList.remove('btn-secondary');
        });
    } else {
        console.error("Les boutons pour afficher les photos et vidéos n'existent pas.");
    }
});


document.getElementById('show-grid').addEventListener('click', function() {
    const carousel = document.getElementById('carouselArt');
    const photoGrid = document.getElementById('photo-grid');
    const showGridButton = document.getElementById('show-grid');
    const hideGridButton = document.getElementById('hide-grid');

    // Afficher la grille et masquer le carrousel
    carousel.style.display = 'none';
    photoGrid.style.display = 'block';

    // Alterner les boutons
    showGridButton.style.display = 'none';
    hideGridButton.style.display = 'inline-block';
});

document.getElementById('hide-grid').addEventListener('click', function() {
    const carousel = document.getElementById('carouselArt');
    const photoGrid = document.getElementById('photo-grid');
    const showGridButton = document.getElementById('show-grid');
    const hideGridButton = document.getElementById('hide-grid');

    // Afficher le carrousel et masquer la grille
    carousel.style.display = 'block';
    photoGrid.style.display = 'none';

    // Alterner les boutons
    showGridButton.style.display = 'inline-block';
    hideGridButton.style.display = 'none';
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
