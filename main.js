/*** Pratiquez le travail avec les arrays ***/

/*
Dans cet exercice, un Array vide 'episodes' a déjà été crée.

1. En utilisant la méthode 'push' du tableau 'episodes',ajoutez les épisodes un par un. Ajoutez deux fois le troisième épisode.

2. Avec la méthode 'pop', retirez l'épisode superflu du tableau 'episodes'.

3. Créez une variable appelée 'numberOfEpisodes' qui contient la 'length' du tableau 'episodes'.

4. Amusez-vous à ajouter et retirer des épisodes, et vérifiez que tout fonctionne correctement.

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

let episodes =  [];
console.log('tableau vide', episodes)
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);
console.log('tableau rempli', episodes)
episodes.pop();
console.log('tableau -1', episodes)

let numberOfEpisodes = episodes.length;

// Code de l'exercice.

  //on sélectionne notre body
const body = document.querySelector('body');
document.querySelector('#episodes').innerText = numberOfEpisodes;

  // on crée une boucle pour parcourir touts les éléments du tableau ' episode '.
for(let episode of episodes) {

  // On crée une div 'séries-frame'
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');

  // on crée un h2 'The Story of Tau'
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';

  // On crée un paragraphe qui prendra les valeurs de Episode pour chaque élément du tableau (épisode)
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episode.title}
  ${episode.duration} minutes
  ${episode.hasBeenWatched ? 'Already been Watched' : 'Not yet watched'}`;

  // 'newDiv' prend comme enfant 'newTitle' et 'newParagraph' / 'newDiv' est intégré dans body.
  newDiv.appendChild(newTitle)
  newDiv.appendChild(newParagraph)
  body.append(newDiv)
}