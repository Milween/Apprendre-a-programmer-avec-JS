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

ce rendre sur la branch P1C1_exo2 : https://github.com/Milween/Apprendre-a-programmer-avec-JS/tree/P1C1_exo2
*/

// Mutation des variables :

/*
Une variable est une vase mutable, c'est-à-dire qu'elle peut changer au cours du temps. On la déclare avec le mot clé 'let' suivi d'un nom de variable et on lui affecte une valeur de départ. Par la suite, on va pouvoir changer la valeur de cette variable autant de fois que l'on souhaite.
/*

/*
On crée un compteur à 0. A chaque fois que l'on clique sur un bouton la valeur augmente de 1.
*/

let compteur = 0;
compteur++;
compteur = 10;


// Découvrez les constantes :

/*
Dans de nombreux programmes, certaines données ne seront pas modifiées pendant l'exécution du programme. C'est le cas par exemple du nom d'une entreprise, de la date de naissance d'un utilisateur, ou du nombre d'heures dans une journée. Pour s'assurer de ne pas réaffecter par inadvertance de nouvelles valeurs à ces données, vous allez utilisez des CONSTANTES.
*/

/*
Ce sont simplement des variables qui ne seront pas MUTABLES. On donnera une valeur de départ et on ne pourra plus changer la valeur par la suite. Ainsi s'il y a une erreur de logique dans votre code changeant la vlaeur de la variable (constante) qui de devait pas changer, JavaScript retournera une erreur.
*/

// par exemple:
const nombrePostParPage = 20;
nombrePostParPage = 30; 
console.log(nombrePostParPage); // Retournera une erreur dans la console car ne peut plus changer sa valeur.

// Pratiquez les constantes :

/*
C'est le moment de mettre en oeuvre ce que vous avez appris sur les opérateurs ! Rendez-vous sur ce CodePen.

Voici un composant qui déconstruit une journée en heures, minutes et secondes.
Dans l'espace alloué, créeez les trois constantes suivantes : 
- hoursPerDay : heures par jour.
- minutesPerHour : minutes par heure.
- secondesPerMinutes : secondes par minute.

lien vers l'exercice GitHub : 
*/

// En résumé :

/*
Dans ce chapitre, vous avez appris les bases des variables en JS, vous savez désormais :

- DECLARER les variables : par le mot let 'let' et un nom en 'camelCase' et les INITIALISER '=':

- MODIFIER le contenu d'une variable en la réaffectant, ou avec des opérateurs.

- utiliser des CONSTANTES pour éviter le remplacement d'éléments de données essentiels.
*/
