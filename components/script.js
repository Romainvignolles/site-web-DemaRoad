document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close');
    const contactButtons = document.querySelectorAll('.contactButton, .contactIcon');
    const popupContent = document.querySelector('.popup-content'); // Contenu du pop-up

    // Affiche le pop-up lorsqu'on clique sur un bouton de contact
    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            popup.style.display = 'flex';
        });
    });

    // Ferme le pop-up lorsqu'on clique sur le bouton de fermeture
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Ferme le pop-up si on clique en dehors de son contenu
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});