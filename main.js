//*** Qu'est ce qu'une variable ?

/*
 Une variable est un contenant utilisé pour enregistrer une donnée spécifique dans votre programme. Une donnée placée dans une variable s'appelle une valeur.
*/

//Exemple :
/*
Utiliser une enveloppe pour stocker de l'argent pour des dépenses courantes, loyer. Une autre pour des économies pour une occasion particulière, voyage ou sortie.
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

// Modifiez la valeur d'une variable.

/*
La façon la plus simple de modifier la valeur d'une variable est simplement de la réaffecter :
*/
let numberOfCats = 3;
numberOfCats = 4;

// Opérateurs arithmétiques - travail sur les nombres.

// Pour ajouter des variables, on utilise + :
let totalCDs = 67;
let totalVinyls = 34;
let totalMusic = totalCDs + totalVinyls;

// Pour soutraire, on utilise - :
let cookiesInJar = 10;
let cookiesRemoved = 2;
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;

// Pour ajouter ou soustraire un nombre d'une variable, vous pouvez utiliser les opérateurs : += et -= :
let cookiesInJar = 10;
/* manger deux cookies */
cookiesInJar -= 2; // Il reste 8 cookies.
/* cuisson d'un nouveau lot de cookies */
cookiesInJar += 12; // Il y a maintenant 20 cookies dans la boite.

// Enfin pour incrémenter ou décrémenter de 1 : on utilise ++ ou -- :
let numbersOfLikes = 10;
numbersOfLikes++; // Cela fait 11.
numbersOfLikes--; // et on revient à 10.

// Multiplication et division :

// Les opérations de multiplication et de division utilisent les opérateurs * et / :
let costPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct + numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;

// Comme pour l'addition et la soustraction, il exidste aussi les opérateurs *= et /= pour multiplier ou diviser un nombre.
let numberOfCats = 2;
numberOfCats *= 6; // vaut 2*6 = 12;
numberOfCats /= 3; // vaut 12/3 = 4;

// Pratiquez l'utilisation des opérations :

/* 
Pour vous entraîner à créer des variables, rendez-vous sur cet exercice CodePen. https://codepen.io/nicolaspatschkowski/pen/BaNxgzN

*/

