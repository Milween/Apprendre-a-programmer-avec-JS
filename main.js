// Pratiquez la création de variables.

/*
1. Créez une variable appelée numberOfSeasons avec la valeur 6.
2. Créez une variable appelée numberOfEpisodes avec la valeur 12 
*/

/*
Attention : Vous pourrez croiser le mot 'var' plutôt que 'let'. Pour l'instant vous pouvez simplement voir 'var' comme l'ancienne version de 'let' : c'est une autre façon de créer une variable.
*/

// ECRIRE LE CODE DE L'EXERCICE CI-DESSOUS :

let numberOfEpisodes = 6;
let numberOfSeasons = 12;

// code de l'exercice.
let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season`;