/*** Gérez des erreurs et des exceptions dans votre programme ***/

/*
Ne pas faire d'erreur lorsque l'on code est pratiquement impossible. Dans ce chapitre, vous allez découvrir les différents types d'erreurs.
*/


/** Découvrez les 3 types d'erreurs **/

/*
En JavaScript, comme dans beaucoup d'autres langages de programmation, on distingue généralement trois types d'erreur.
*/

// Appréhendez les erreurs de synthaxe :

/*
Les erreurs de 'syntaxe' (ou erreurs d'analyse) surviennent quand vous avez fait une faute d'écriture dans votre code. Il peut s'agir de l'oubli ou de l'ajout d'un crochet ou d'une accolade, d'une faute d'orthographe sur un mot clé, else ou switch, par exemple. 

Elles sont généralement assez faciles à corriger (même si vous pouvez passer beaucoup du temps à retrouver les parenthèses manquantes !), et beaucoup d'éditeurs de texte et d'environnements de développement intégrés mettent automatiquement en évidence les erreurs de syntaxe.
*/

// Voici quelques exemples d'erreurs de syntaxe, pourrez-vous les trouver ?

if (seatsRemaining) {
  passergersBoarded+;
}

while (seatsRemaining > 0 {
  passergersBoarded++;
}

if (seatsRemaining > 0) {
  passergersBoarded++;
} else {
  passergersStillBoarded = 0;

  /*
  1. Il manque un +.

  2. il manque une parenthèse, parenthèse non fermée.

  3. accolade manquante.
*/

/* Découvrez les erreurs logiques */

/*
Les erreurs logiques sont un peu plus vicieuses. Elles surviennent quand vous avez fait des erreurs dans la logique de votre programme. Voici quelques exemples :

- Affectation d'une valeur erronée à une variable.

- Mélange de conditions dans les instructions 'if':

- Ordre incorrect d'écriture des lignes ou blocs de code.

Avec ce genre d'erreur, votre programme pourra avoir un comportement inattendu dans le meilleur des cas. Ou planter dans le pire des cas !

Les erreurs logiques sont aussi plus difficile à trouver et à corriger parce que le code n'est pas faux, il ne fait simplement pas ce que vous souhaitez qu'il fasse !

Exemple d'un code avec erreur de logique :
*/

// On simule avoir 22 ans donc être majeur
const monAge = 22;

if (monAge < 18) {
  console.log('Vous êtes majeur');
} else {
  console.log('vous êtes mineur');
}

/*
Le code a pour objectif d’afficher “vous êtes majeur” quand vous avez 18 ans ou plus, ou alors “vous êtes mineur” si vous avez moins de 18 ans.

Mais ce code comporte une erreur de logique sur la condition if et affiche “vous êtes mineur” alors que l'âge de comparaison est 22 ans.

La difficulté ici est que rien ne vous indiquera que c’est une erreur de logique. Seules l’analyse et la relecture de votre code permettront de déceler le souci.
*/

/* Gérez les erreurs d'exécution */

/*
Les erreurs d'exécution sont un peu différentes. Elles tendent à survenir quand quelque chose d'inattendu se produit dans votre application.

Il s'agit souvent de quelque chose associé aux ressources extérieures (connexions réseau, appareils physiques, etc.) ou à une saisie/erreur humaine.
*/

/*
Mais il y a des situations où vous savez par avance que ce type d'erreur est susceptible de survenir.

Dans ces situations, vous pouvez prévoir du code de traitement d'erreur. De cette façon, une erreur ne fera pas planter votre programme, et pourra être corrigée.
*/

/*
Une façn de traiter les erreurs potentielles consiste à utiliser une instruction 'if / else' pour vérifier la validité des données :
*/

if (dataExists && DataIsValid) {
  // utiliser les données ici
} else {
  // gérer l'erreur ici
}

/*
Vous pouvez aussi utiliser des blocs 'try / catch' pour essayer 'try' un code pouvant potentiellement renvoyer une erreur, et détecter 'catch' les erreurs eventuelles survenues :
*/

try {
  // code suceptible à l'erreur ici
} catch (error) {
  // réaction aux erreurs ici
}

/*
Quand vous aurez plus d'expérience en développement JavaScript, vous saurez où les erreurs peuvent survenir, et comment vous y préparer et les traiter correctement.
*/


/*** EN RESUME ***/

/*
Dans ce chapitre, vous avez appris les trois types d'erreurs de programmation :

- Les erreurs de syntaxe : erreurs dans l'utilisation de JavaScript : fautes d'orthographe, crochets manquants, nombre de guillemets incorrect, etc. ;

- les erreurs logiques – erreurs dans l'application du déroulement du programme, par exemple erreurs dans les conditions des instructions   if  ou oubli d'incrémentation de l'indice d'une boucle, pouvant potentiellement conduire à une boucle infinie ;

- les erreurs d'exécution – erreurs souvent causées par des ressources externes telles que réseaux, bases de données ou utilisateurs ; elles peuvent être traitées en sachant où elles peuvent survenir, et par des techniques de traitement d'erreur telles que les blocs 'try / catch'.