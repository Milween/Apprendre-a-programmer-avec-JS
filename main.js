// PRATIQUEZ LES BOUCLES 'FOR' 

/*
Maintenant, vous devez implémenter du code qui remettra à zéro l'information de visionnage pour tous les épisodes. Vous allez accomplir cette tâche en itérant le tableau   episodes  en assignant la valeur false à la propriété   hasBeenWatched  de chaque épisode.
*/

/*
Le tableau   episodes  a déjà été déclaré pour vous.

1. Itérez le tableau   episodes  et assignez la valeur false à la propriété   hasBeenWatched  de chaque épisode, en utilisant une boucle for, for…in ou for…of.

2. Maintenant, faites en sorte que tous les épisodes soient considérés comme ayant été vus. Cela fonctionne-t-il également ?
*/

// CODE JAVASCRIPT DE L'EXERCICE.

class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let episodes =  [
  new Episode('Dark Beginnings', 45, true),
  new Episode('The Mystery Continues', 45, false),
  new Episode('An Unexpected Climax', 60, false)
]

  // INSERER VOTRE CODE EN DESSOUS :

  for (let episode of episodes) {
    episode.hasBeenWatched = false;
  }

  // INSERER VOTRE CODE AU DESSUS :


const body = document.querySelector('body');

for (let episode of episodes) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');

  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';

  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episode.title}
  ${episode.duration} minutes
  ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;

  newDiv.append(newTitle)
  newDiv.append(newParagraph)

  body.appendChild(newDiv)
}