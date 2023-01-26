/***  Définir des objets et leurs attributs avec des classes ***/

/*
Vous avez probablement entendu auparavant le terme OBJET dans un contexte de programmation. Mais qu'est-ce que cela signifie vraiment ? 
*/

/*
Un stylo est un type d'objet : vous avez tous types de stylo : à piston, à bille, feutre, gel ect... comme faisant partie du type d'objet : STYLO.
*/

/*
Cette liste mentale d'attributs sert de modèle pour cet objet. En programmation, on l'appelle une CLASSE. Pour créer une classe, vous pouvez choisir le nom de votre choix.

Vous le verrez, les classes permettent aussi de regrouper beaucoup de détails, c'est pourquoi elles s'appellet aussi des TYPES CONPLEXES.
*/

/** DECOUVERTE DES OBJETS **/

/*
Les objets JS sont écrits en JSON (JavaSCript Object Notation). Ce sont des séries de paires clés-valeurs séparées par des virgules, entre des accolades. Les objets peuvent être enregistrés dans une variable :
*/

let myBook = {
  titre: 'The Story of Tau',
  author: 'Will Alexander',
  numberOfPages: 250,
  isAvailable: true
}

/*
Chaque clé est une chaîne et les valeurs associées peuvent avoir tout type de données. (nombre, chaîne, ect..)

Construire des objets présente un avantage essentiel : cela permet de regrouper les attributs d'une chose unique à un même emplacement, que ce soit un livre, un profil utilisateur ou la configuration d'une application, par exemple.
*/

/* Pratiquez la Création d'objet */

/*
Rendez-vous la branche P1C3-exo1 pour voir l'exercice.
*/

/* Accéder aux donnée d'un objet */

/*
Maintenant que vous savez comment créer un objet en JavaScript, voyons comment accéder aux données avec la dot-notation.

Une fois qu'un objet est enregistré dans une variable, vous pouvez accéder à ses données comme dans l'exemple ci-dessous.
*/

let Book = {
  title: 'L\'histoire de Tao',
  author: 'Will Alexander',
  numberOfPages: 250,
  isAvailable: true
};

let bookTitle = Book.title; // "L'histoire de Tao"
let bookPages = Book.numberOfPages; // "250"

/*
Pour cela, utiliser le nom de la variable qui contient l'objet, un point ' . ' puis le nom de la clé dont vous souhaitez récupérer la valeur.

/* La notation Bracket */

/*
Pour accéder à un sous élément vous pouvez utiliser les brackets avec la valeur du sous élément. Par exemple :
*/

let bookTitle = Book['title']; // "L'histoire de Tao"
let bookPages = Book['numberOfPages'] // "250"

/*
L'intérêt ici c'est qu'on va pouvoir mettre entre bracket une variable qui contient en string le nom de la proprièté que l'on souhaite atteindre. Par exemple :
*/

let propertyToAccess = 'title';
let bookTitle = Book[propertyToAccess] // "L'histoire de Tao"

/** Pratiquez la récupération de valeurs depuis un objet.**/

// Rendez-vous sur la branche P1C3_exo2.