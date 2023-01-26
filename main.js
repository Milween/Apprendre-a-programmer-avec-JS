// Pratiquez l'utilisation des opérateurs'

/*
1. Dans l'éditeur JavaScript; créez deux variables episodeTime et commercialTime avec les valeurs (45 et 5).

2. A l'aide de deux variables de deux variables de temps que vous vevez de créer, ainsi que du nombre d'épisodes et du nombre de saisons, créez une variable nommée totalShowTime qui contient le temps de visionnage totam de cette série.
*/

/*
Pour savoir à quoi sert chaque enveloppe, vous devez les étiqueter : vous attribuez un nom à votre variable.
Le nom d'une variable doit indiquer ce qui se trouver à l'intérieur, tout comme une étiquette sur un carton.
 */

// Voici quelques règles générales pour la création de noms :

/*
- Utiliser des noms descriptifs dans l'ensemble de votre code.

- Ne PAS utiliser des abréviations ou raccourcir des mots.

- Suivre une convention de nommage constante. La convention de nommage la plus courante est 'camel case'.
Exemple : numberOfCats, finalAnswer ect...
*/


//*** Créer une variable en la déclarant :

/*
Pour utiliser une variable dans votre code, vous devez la créer, c'est ce que l'on appelle déclarer une variable.
*/

let numberOfCats = 2;
let NumberOfDogs = 4;

/*
Ici, nous déclarons (créons) et initialisons (donnons une valeur à) deux variables : number numberOfCats et numberOfDogs.
*/
let numberOfEpisodes = 6;
let numberOfSeasons = 12;

// ECRIRE LE CODE DE L'EXERCICE CI-DESSOUS :

// 1.
const episodeTime = 45;
const commencialTime = 5;

// 2.
let totalShowTime = (episodeTime + commencialTime) * numberOfSeasons * numberOfEpisodes;

// code de l'exercice.
let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`