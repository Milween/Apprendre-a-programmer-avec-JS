/*** Pratiquez les classes ***/

/*
La meilleure façon d'apprendre les classes est d'en créer une vous-même.

Maintenant que vous savez créer des classes, il est temps d'en profiter pour notre composant épisode. Cette fois-ci, il y a trois composants épisodees, donc la manière logique de procéder serait de créer une classe ' Episode ', et puis en créer trois instances, pour chaque épisodes.

1. Créer une classe Episode avec le mot clé ' class '.

2. Créez un constructor pour votre class qui devra accepter trois arguments :

- title : le titre de l'épisode.
- duration : la durée de l'épisode.
- hasBeenWatched : si l'épisode a été regardé ou non (booléen)

En utilisant le mot clé " this ", assignez les propriétés title, duration et hasBeenWatched via un constructor.

Avec le mot clé ' new ', créez trois instances de la classe Episode :
- firstEpisode
- secondEpisode
- thirdEpisode

N'oubliez pas de passer des arguments appropriés à chaque instance.
*/

class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

// Insérer votre code ci-dessous

let firstEpisode = new Episode ("le mystère des égouts", 50, true)
let secondEpisode = new Episode ("le cadavre de la Tour", 60, true)
let thirdEpisode = new Episode ("Le musée hanté", 80, false)

// Code de l'exercice.

document.querySelector('#first_episode-info').innerText = `Episode : ${firstEpisode.title}
Duration : ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already Watched' : 'Not yet watched'}`;

document.querySelector('#second_episode-info').innerText = `Episode : ${secondEpisode.title}
Duration : ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already Watched' : 'Not yet watched'}`;

document.querySelector('#third_episode-info').innerText = `Episode : ${thirdEpisode.title}
Duration : ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already Watched' : 'Not yet watched'}`;