document.addEventListener('DOMContentLoaded', function() {
    let bouton = document.querySelector('.CTA__jouer');
    const retour = document.querySelector('.retour__titre');
    const menu = document.querySelector('.menu');
    const jeu = document.querySelector('.jeu');

    bouton.addEventListener('click', function() {
        menu.style.display = 'none'
        jeu.style.display = 'flex';
    });

    retour.addEventListener('click', function() {
        menu.style.display = 'flex';
        jeu.style.display = 'none';
    });
});

//insérer chargement