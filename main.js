/*** Regrouper vos données avec les tableaux et les objets ***/

/*
Imaginez que vous soyez responsable de la communication d'un théâtre à la mode. Une de vos responsabilités essentielles est la gestion du premier rang, qui revient à s'assurer que les amis et connaissances des artistes, ainsi que d'autres VIP, aient la meilleure vision du spectacle.

Si vous n'aviez à gérer que deux invitations pour l'artiste principal, vous pourriez imaginer utiliser seulement deux variables avec les noms des invités. Le code pourrait se présenter comme ceci :
*/

let firstFrontRowGuest;
let secondFrontRowGuest;

/*
Ensuite, quand l'artiste vous donne l'information, vous pourriez vous contenter d'affecter un nom à chaque variable. Par exemple, vous pourriez avoir :
*/

firstFrontRowGuest = "Sarah Kate";
secondFrontRowGuest = "Audrey Simon";

/*
Mais si le premier rang a 30 sièges ? Ne serait-il pas plus facile d'utiliser une seule variable contenant toutes ces informations ?

Il existe un type pour cela en JS : le tableau (array)
*/

/**  Utilisez un tableau pour enregistrer une liste ordonnée d'éléments **/

/*
Pour créer une tableau vide et l'enregistrer dans une variable, utilisez une paire de crochets : 
*/
let guest = [];

/* 
Vous pouvez aussi créer un tableau rempli en plaçant les éléments voulus à l'intérieur de ces crochets :
*/

let guests = ["Sarah Kate", "Audrey Simon", "Thibaut Kosmala"];

/*
Vous pouvez ensuite accéder aux éléments de ce tableau par leur indice :
*/

let firstGuest = guests[0]; // 'Sarah Kate'
let secondGuest = guests[2]; // 'Kosmala Thibaut'
let undefinedGuest = guests[12]; // Undefined 

/*
Important : en JavaScript on commence toujours à l'indice 0 !!!

/** Pratiquez la création d'un array **/
// rendez-vous à la branche P1C4_exo1

/** Utilisez des valeurs plutôt que des références **/

/*
EN JS, les types primitifs tels que Number, Boolean et String sont passés par VALEUR. Ceci signifie que quand vous faites quelque chose comme :
*/

let numberOfGuests = 20;
let totalNumbersOfGuests = numberOfGuests; //20

/*
C'est la valeur 20 qui est copiée dans la nouvelle variable (totalNumbersOfGuests), et aucun lien n'est maintenu entre les deux variables.
*/

/*
Ce n'est pas le cas avec les objets et tableaux, qui sont passés par REFERENCE. Si vous n'y prennez pas garde, cela peut conduire à des comportements inattendus, par exemple :
*/

let artistProfile = {
  name: "Tao Perkington",
  age: 27,
  available: true
};

let allProfiles = [artistProfile]; // Nouveau table contenant l'objet ci-dessus.

artistProfile.available = false; // modification de l'objet.
console.log(allProfiles); // Affiche { name: "Tao Perkington", age: 27, available: false }

/*
Bien que nous ayons créé un tableau et passé l'objet AVANT la modification de cet objet, vous la voyez dans le tableau. C'est parce que quand on utilise des tableaux et des objets, on passe des REFERENCES aux objets plutôt que la valeur des données qu'ils contiennnent. Les variables 'artisteProfile' et 'allProfiles' présentées ci-dessus contiennent des références à l'objet et au tableau en mémoire.

Cela peut sembler compliqué à comprendre, mais avec la pratique, vous vous y ferez.
*/

/** Travaillez sur les tableaux **/

/*
Les tableaux en JS sont très puissants et ont beaucoup d'attributs et de méthodes très utiles. Voici une brève introduction à quelques-uns d'entre eux.
*/

/* Le comptage d'éléments */

// La propriété 'length' d'un tableau indique le nombre d'éléments qu'il contient :
let guests = ['Will Alexander', 'Sarah Kate', 'Audrey Simon'];
let howManyGuests = guests.length; // 3

/* 
Utilisez la notation dot pour accéder à la propriété 'length' de votre tableau. Ce n'est peut-être pas très utile dans cet exemple (parce qeu nous savons combien nous avons mis d'invités dans le tableau), mais dans beaucoup de cas, vous ne saurez pas à l'avance combien il y a d'éléments dans un tableau.

/* L'ajout et la suppression */

// Pour ajouter un élément à la fin d'un tableau, utilisez sa méthode push :

guest.push('Tao Perkington'); // ajoute 'Tao Perkington' à la fin de notre tableau guests.

/*
Vous pouvez utilisez la notation dot pour accéder à la méthode 'push' du tableau, et placer l'élément à ajouter entre parenthèses.

Pour ajouter votre élément au début du tableau plutôt qu'à la fin, utiliser la méthode 'unshift' :
*/

guest.unshift('Tao Perkington') // 'Tao Perkington' est ajouté au début du tableau guests

/*
Pour supprimer le dernier élément d'un tableau, appelé sa méthode 'pop', sans passer aucun argument :
*/
guest.pop(); // supprimer le dernier élément de ce tableau.


/** Pratiquez le travail avec les arrays **/

/* Rendez-vous sur la branche P1C4-exo2

/*** EN RESUME ***/

/* Dans ce chapitre :

- Vous avez appris à connaître les collections.
- Vous avez exploré la collection la plus courante en JS : le tableau.
- Vous avez appris à créer des tableaux, à les remplir, et vu certains outils de base pour les manipuler.
*/