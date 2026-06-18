// 1. On sélectionne le formulaire dans le HTML
const formulaire = document.getElementById('formulaire-livre');

// 2. On écoute l'événement "submit" (quand on clique sur le bouton)
formulaire.addEventListener('submit', function(evenement) {
    // Empêche la page de se recharger automatiquement
    evenement.preventDefault();

    // 3. On récupère les valeurs tapées par l'utilisateur
    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const genre = document.getElementById('genre').value;
    const description = document.getElementById('description').value;
    let couvertureUrl = document.getElementById('couverture-url').value;

    // Si l'utilisateur n'a pas mis d'image, on en met une par défaut
    if (!couvertureUrl) {
        couvertureUrl = "https://unsplash.com";
    }

    // 4. On crée la structure HTML du nouveau livre en JavaScript
    const nouvelleCarteLivre = document.createElement('div');
    nouvelleCarteLivre.classList.add('livre');

    nouvelleCarteLivre.innerHTML = `
        <img class="couverture" src="${couvertureUrl}" alt="Couverture de ${titre}">
        <div class="details-livre">
            <h3>${titre}</h3>
            <p><strong>Autrice / Auteur :</strong> ${auteur}</p>
            <p>${description}</p>
        </div>
    `;

    // 5. On cherche la bonne section (Romance ou Thriller) pour y ajouter le livre
    if (genre === 'romance') {
        document.getElementById('categorie-romance').appendChild(nouvelleCarteLivre);
    } else if (genre === 'thriller') {
        document.getElementById('categorie-thriller').appendChild(nouvelleCarteLivre);
    }

    // 6. On vide le formulaire pour pouvoir ajouter un autre livre
    formulaire.reset();
});
