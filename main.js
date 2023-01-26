/*** Enregistrez vos données avec des types de données : ***/

// Une variable est composée de plusieurs éléments, découvrons les types !

/** Qu'est ce qu'un type ? **/

/*
Le TYPE d'une variable ou d'une constante est tout simplement le genre des données qu'elle enregistre. EN JS, il y a trois types primitifs principaux.

- NUMBER
- STRING
- BOOLEAN

Les types primitifs sont les briques de base de chaque structure de données en JS ! Il est important de comprendre leur existence et leur importance.
*/

/** Découvrez le type 'NUMBER' : **/

/*
Toutes les variables que vous avez créez jusqu-à maitenant dans ce cours étaient de type NUMBER.

En programmation, 

- les nombres entiers sont aussi appelés : entiers ou integers; 
- les nombres avec des chiffres après la virgule : virgule flottante ou floating-point.
*/

/* Attention à l'arithmétique en virgule flottante ! */

/*
L'arithmétique en virgule flottante peut déclenchez des erreurs très gênantes dans tous les langages de programmation :
*/

let intergerCalculation = 1 + 2; // donne 3
let weirdCalculation = 0.1 + 0.2; // on attend 0.3, réponse réelle 0,3000000000004

/*
Chaque fois que c'est possible, utilisez des calculs avec des entiers.
*/

/* Appréhendez les valeurs logiques */

/*
Les valeurs logiques (booléans) sont le plus simple des types primitifs : elles peuvent avoir que deux valeurs :
- VRAI / FAUX
Elles s'utilisent dans toutes sortes de cas :
- indiquer si un utilisateur est connecté ou non.
- Si une case est cochée.
- Si un ensemble de conditions est réuni.
*/

let userIsSignedIn = true;
let userIsAdmin = false;


/** Découvrez les chaînes de caractères **/

/*
Les chaînes de caractères (STRING) sont la façon d'enregistrer du TEXTE. On peut enregistrer dans une variable de type STRING n'importe quelle chaîne de caractères.

Ces variables sont encadrées par des guillemets simples ou doubles :
*/

let firstName = "Will";
let lastName = 'Alexander';

/*
Les chaînes peuvent aussi être CONCATENEES par l'opérateur '+' :
*/

let wholeName = firstName + ' ' + lastName; // valeur: 'Will Alexander'

/*
Il est possible depuis quelques années d'utiliser une nouvelle écriture qui simplifie la concaténation des variables : la string interpolation.

Pour créer une STRING INTERPOLATION on écrit du texte encadrée par le signe ' ` ' et si on veut injecter une variable dans ce code on utilise l'expression " ${maVariable}" 
*/

const myName = 'Alexander';
const salutation = `Bienvenue sur mon site ${myName}!`;
console.log(salutation) // retournera 'Bienvenue sur mon site Alexander !'

/** EXERICE P1C2_exo1**/
/* Pratiquez les types de données */

// Passer sur la branche P1C2_exo2
