/*** Pratiquez la création d'un objet ***/

/*
Dans un exercice précédent, vous avez créé trois variables pour décrire l'épisode d'une série. On dirait la situation parfaite pour créer un seul objet  episode  : créons-le maintenant !
*/

/*

1. Créez un objet (Object, en anglais) et stockez-le dans une variable appelée ' episode' . Utilisez bien des accolades {} et mettez les trois attributs suivants :

title : le titre de l'épisode ;

duration : la durée de l'épisode ;

hasBeenWatched : si l'épisode a été visionné ou non.

Associez des valeurs appropriées à chaque attribut. N'oubliez pas d'utiliser des paires clé-valeur.
*/

// Insérer votre code ci-dessous

let episode = {
  title: 'Dark Beginning',
  duration: 45,
  hasBeenWatched: false
}

// Code de l'exercice.

document.querySelector('#episode-info').innerText = `Episode : ${episode.title}
Duration : ${episode.duration} min
${episode.hasBeenWatched ? 'Already Watched' : 'Not yet watched'}`;