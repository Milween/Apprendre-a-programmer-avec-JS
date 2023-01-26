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