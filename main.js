/*** Pratiquez la récupération de valeurs depuis un objet ***/

/*
Dans l’exercice précédent, quand vous avez construit l'Object episode  , le code de votre collègue en a extrait les données pour les afficher dans son composant. Maintenant, c'est à vous d'extraire les informations pour les fournir au composant avec la notation  .  ou "dot".
*/

/*

1. Créez les trois variables suivantes :

episodeTitle  : le titre de l'épisode (string) ;

episodeDuration  : la durée de l'épisode (number) ;

episodeHasBeenWatched  : si l'épisode a été regardé ou non (boolean).

Assignez-y les valeurs correspondantes de l'objet  episode  en utilisant la notation "dot".
*/

let episode = {
  title: 'Dark Beginning',
  duration: 45,
  hasBeenWatched: false
}

// Insérer votre code ci-dessous

let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;

// Code de l'exercice.

document.querySelector('#episode-info').innerText = `Episode : ${episodeTitle}
Duration : ${episodeDuration} min
${episodeHasBeenWatched ? 'Already Watched' : 'Not yet watched'}`;