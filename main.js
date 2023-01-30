/*** Pratiquez la création d'un array ***/

/*
Dans un exercice précédent, vous avez créé trois instances de la classe 'Episode' dans des variables séparées. Dans cet exercice, vous allez regrouper ces variables dans un seul tableau (array).

1. Créer un array stocké dans une variable 'episodes', et peuplez-le avec les trois variables
  'firstEpisode', 'secondEpisode', 'thirdEpisode'.

2. Essayez de changer l'ordre dans lequel vous avez ajoutés les épisodes, et regardez ce qu'il se passe lorsque vous rafraîchissez la page.

*/

class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode ("le mystère des égouts", 50, true)
let secondEpisode = new Episode ("le cadavre de la Tour", 60, true)
let thirdEpisode = new Episode ("Le musée hanté", 80, false)

// Insérer votre code ci-dessous :

let episodes =  [firstEpisode, secondEpisode, thirdEpisode]
console.log(episodes[0])

// Code de l'exercice.
  //on sélectionne notre body
const body = document.querySelector('body');

  // on crée une boucle pour parcourir touts les éléments du tableau ' episode '.
for (let i = 0; i < 12 ; i++) {

  // On crée une div 'séries-frame'
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');

  // on crée un h2 'The Story of Tau'
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';

  // On crée un paragraphe qui prendra les valeurs de Episode pour chaque élément du tableau (épisode)
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episodes[i].title}
  ${episodes[i].duration} minutes
  ${episodes[i].hasBeenWatched ? 'Already been Watched' : 'Not yet watched'}`;

  // 'newDiv' prend comme enfant 'newTitle' et 'newParagraph' / 'newDiv' est intégré dans body.
  newDiv.appendChild(newTitle)
  newDiv.appendChild(newParagraph)
  body.append(newDiv)
}