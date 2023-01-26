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

/*** Manipuler des classes ***/

/*
La construction d'un objet à la main, par la notation à accolades vue précédemment, convient bien à des objets simples et uniques. Mais vous aurez souvent besoin de beaucoup d'objets du même type. C'est là que les CLASSES sont utiles.
*/

/*
Une CLASSE est une MODELE pour un objet dans le code. Elle permet de construire plusieurs objets du même type (appelés INSTANCES de la même classe) plus facilement, rapidement et en toute fiabilité.
*/

/*
Pour créer une clase dans JS, utilisez le mot clé 'class', suivi par un nom, encadrez ensuite le code de la classe entre accolades :
*/

class Book {

}

/*
Pour cette classe, nous souhaitons que chaque BOOK ait un titre, un auteur et un nombre de pages, pour cela, vous utiliserez ce qu'on appelle un CONSTRUCTOR.

Le CONSTRUCTOR d'une classe est la fonction qui est appelée quand on crée une nouvelle instance de cette classe avec le mot clé NEW
*/

class Livre {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

/*
Ici, le mot clé THIS fait référence à la nouvelle instance. Donc, il utilise la notation dot pour attribuer les valeurs reçues aux clés correspondantes.

Maintenant que la classe est terminée, vous pouvez créer des instances par le mot clé 'NEW' :
*/

let monLivre = new Livre("L'histoire de Hulk, Thibaut Kosmala", 491);
// Cette ligne écrit l'objet suivant:
{
  title: "L'histoire de Hulk",
  author: "Thibaut Kosmala",
  page: 491
}

/*
Avec une classe Livre, vous pouvez créer facielement et rapidement de nouveaux objets Livre.

Gardez cette notion de classe en tête, on y reviendra un plus loin en abordant la notion de propriété de classe et les méthodes d'instance.
*/

/** Pratiquez les classes **/

/* Rendez-vous sur la branche P1C3_exo3

/*** EN RESUME ***/

/*
Vous avez fait beaucoup de chemin dans ce chapitre ! Vous avez découvert :

- Les objets avec les paires clés-valeurs en notation JSON : 
  Il permettent d'enregistrer plusieurs éléments de données associés dans une même variable.

- La notation pointée (dot) qui donne accès aux valeurs d'un objet et à la possibilité de les modifier.

- Les classes, et comment l'utilisation des classes peut vous permettre de créer des objets plus facilement et de façon plus lisible.