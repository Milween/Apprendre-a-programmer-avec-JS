/*** Pratiquez la moyenne ***/

/*
Avant de commencer l’exercice, nous allons juste revoir deux notions : le calcul d’une moyenne et comment parcourir un tableau.

Calculer une moyenne :

Lorsque l’on a un ensemble de valeurs, le calcul de la moyenne se fait en 3 étapes :

- on fait la somme de toutes les valeurs (qu’on nommera 'sommeValeurs') ;

- on compte le nombre de valeurs que l’on a (qu’on nommera 'nombreValeurs') ;

- on calcule la moyenne en faisant moyenne = sommeValeurs / nombreValeurs.

Parcourir un tableau :

Lorsque l'on a un tableau (par exemple 'monTableau') on utilise la boucle for of, par exemple :
*/

//for (let elementDeTableau of monTableau) {
//  console.log(elementDeTableau); // affiche chaque élément individuellement.
//}

/*
Vous pouvez manipuler elementDeTableau comme bon vous semble (par exemple, l’ajouter dans un autre tableau, l'additionner avec une variable globale, etc.).

Votre application de streaming permet aux utilisateurs de noter les séries sur 5 étoiles. Votre collègue a construit le composant pour afficher la note moyenne pour chaque série, mais elle a besoin que vous écriviez la fonction qui va calculer cette moyenne.

Elle vous explique que la fonction doit prendre un tableau de nombres comme argument, et retourner un nombre qui correspond à la note moyenne calculée.

/** Suivez les étapes suivantes : **/

/*
1. Au bon endroit dans la déclaration de fonction, choisissez un nom pour le paramètre de votre fonction. N'oubliez pas, ce sera un tableau de nombres.
Pour calculer une moyenne, on ajoute toutes les valeurs ensemble, puis on divise par le nombre de valeurs.

2. Créez une variable qui stockera la somme de tous les nombres du tableau. Initialisez-la avec la valeur zéro.

3. Sachant que le paramètre reçu est un tableau de nombres, utilisez une boucle for pour ajouter chaque nombre du tableau à votre variable   somme  .

4. Créez une constante qui contient le résultat de la somme finale divisée par le nombre de valeurs dans le tableau reçu en argument.

5. Faites en sorte que la fonction retourne le résultat final.

6. BONUS : La troisième série, Les Insectes de L'Isla Clara, n'a pas l'air de fonctionner correctement. En fait, elle n'a pas encore reçu de note, donc le tableau passé ne contient aucune valeur.
*/

/** INSERER VOTRE CODE CI-DESSOUS **/

const calculateAverageRating = (ratings) => {
  if(ratings.length === 0) {
    return 0
  }

  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }

  return sum / ratings.length
}


/** INSERER VOTRE CODE CI-DESSUS **/

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];
const claraRatings = [5, 5, 5, 4, 5, 2, 3];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);
const claraAverage = calculateAverageRating(claraRatings)

if (tauAverage && colinAverage) {
  document.querySelector('#tau-score').innerText = tauAverage.toFixed(1) + ' Stars';
  document.querySelector('#colin-score').innerText = colinAverage.toFixed(1) + ' Stars';
  document.querySelector('#clara-score').innerText = `${calculateAverageRating(claraRatings) === 0 ? 'No ratings' : claraAverage.toFixed(1) + ' stars'}`
}

/** Solution **/

/*
Voici quelques explications :

La fonction commence par le code suivant :
*/

if(ratings.length === 0) {
  return 0
}
/*
Explication : on souhaite faire la moyenne des valeurs présentes dans le tableau 'ratings'.
Mais dans le cas où le tableau est vide, on souhaite retourner la valeur 0, la propriété 'length' et 'ratings' permet donc de connaître la longueur du tableau et de faire alors une condition en conséquense.

Ensuite nous avons le code suivant :
*/
let sum = 0;
  for(let rating of ratings) {
    sum += rating;
  }

/*
Explications : Ce code a pour objectif de faire la somme de tous les éléments du tableau.

Pour cela, on déclare une variable 'sum' avec comme valeur initiale 0.

Ensuite on parcourt le tableau 'ratings' et pour chaque élément on additionne leur valeur avec la valeur de 'sum', ce résultat est stocké dans 'sum'.

Une fois l'ensemble de ce code exécuté, 'sum' contient donc la somme de toutes les variables du tableau.

Pour finir, nous avons le code suivant :
*/

return sum / ratings.length;

/*
Explication : Nous disposons maintenant de la variable 'sum' qui contient la somme de tous les éléments du tableau.

L'expressions ratings.length qui donne le nombre d'élément du tableau. Avec ces éléments, nous retournons le calcul de la moyenne.
*/