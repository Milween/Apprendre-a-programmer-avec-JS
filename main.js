/*** Pratiquer les méthodes d'instance. ***/

/*
Voyons maintenant comment utiliser des méthodes d'instance pour enregistrer l'application de diffusion vidéo.

Plutôt que d'utiliser une fonction pour calculer la note moyenne pour une série, on a décidé que la classe Show ('Série') devrait gérer les nouvelles notes automatiquement.

Comme vous pouvez le constater, la classe (show) contient un array ratings, pour les notes, qui est initialisé vide, et une propriété 'averageRating' (note moyenne) de zéro.

1. Déclarer une méthode dans la classe 'show' appelée 'addRating()'. Elle prendra une 'rating' (la note) qui sera un nombre en 1 et 5, comme paramètre.

2. La méthode addRating() doit :

  - Ajouter la note reçue au tableau 'ratings' de l'instance.
  - Recalculer la valeur 'averageRating' de l'instance.

Cliquez sur le bouton 'checkRatings' pour vérifier les séries se mettent à jour correctement. Vous pouvez cliquer plusieurs fois sur le bouton pour voir l'évolutions des notes moyennes.
*/

// INSERER VOTRE CODE CI_DESSOUS 

class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }
  addRating(rating) {
    this.ratings.push(rating);
    let sum = 0;
    for (let rating of this.ratings) {
      sum += rating;
    }
    this.averageRating = sum / this.ratings.length;
  }
}
// INSERER VOTRE CODE AU_DESSUS

// Code du l'exercice :

const tau = new Show('The Story of Tau', 6)
const colin = new Show('The Hero of Old Meldrum', 3)
const clara = new Show('The Bugs of Isla Clara', 6)

const shows = [tau, colin, clara]

const body = document.querySelector('body')
const refresh = document.querySelector('#refresh')

refresh.addEventListener('click', () => {
  removeShows();
  console.log('1')
  addRandomsRatings();
  console.log('2')
  updateShows();
  console.log('3')
})

function updateShows() {
  for (let show of shows) {
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');

    const showHeading = document.createElement('h2');
    showHeading.innerText = show.title;

    const showDetails = document.createElement('p')

    const seasons = document.createElement('p')
    seasons.innerText = show.numberOfSeasons + ' seasons';

    const ratings = document.createElement('p');
    ratings.innerText = show.averageRating > 0 ? show.ratings.length + ' rating\n' + show.averageRating.toFixed(1) + ' stars' : 'No ratings yet';

    showDetails.append(seasons)
    showDetails.append(ratings)
    showPane.append(showHeading)
    showPane.append(showDetails)
    body.append(showPane)
  }
}

function removeShows() {
  const children = [];
  for (let childNode of body.childNodes) {
    children.push(childNode);
  }

  for (let child of children) {
    if (child.tagName == 'DIV') {
      body.removeChild(child)
    }
  }
}

function addRandomsRatings() {
  for (let show of shows) {
    if (Math.random() >= 0.2) {
      // numberOfRatings => nombre aléatoire entre 1 à 4.
      const numberOfRatings = Math.floor(Math.random() * 4 + 1)
      // Parcours tous les ratings générés par 'numberOfRatings', pour chacun d'eux donne lui la valeur de 'ratings'.
      for (let i = 0; i < numberOfRatings; i++) {
        // ratings => nombre aléartoire entre 1 et 5.
        const ratings = Math.floor(Math.random() * 5 + 1);
        show.addRating(ratings)
      }
    }
  }
}

updateShows();