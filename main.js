/** Pratiquez les types de données **/

/*
Maintenant que vous avez terminé le composant pour la série, il est temps de travailler sur le composant pour les épisodes individuels.

Ce composant affichera le titre de l'épisode, sa durée en minutes, et si l'utilisateur a déjà regardé l'épisode ou non.
*/

/*
1. Créez une variable nommée  episodeTitle  qui contient une chaîne de caractères correspondant au titre de votre épisode (employez votre créativité !).

2. Créez une variable appelée  episodeDuration  qui contient un nombre correspondant à la durée de votre épisode en minutes.

3. Enfin, créez une variable booléenne nommée   hasBeenWatched  qui indique si l'utilisateur a déjà regardé l'épisode ou non.
*/

// ECRIRE LE CODE DE L'EXERCICE CI-DESSOUS :

let episodeTitle = 'The first Battle';
let episodeDuration = 45;
let hasBeenWatched = false;

// code de l'exercice.
document.querySelector('#episode-info').innerText = `Episode : ${episodeTitle}
Duration : ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`