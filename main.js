/*** Utilisez la bonne boucle pour répéter les tâches (for, while) ***/

/*
En programmation, il y a des ensembles d'instructions à répéter plusieurs fois. Parfois, vous connaîtrez à l'avance le nombre de répétitions, d'autres fois non. 

Il est aussi possible que le nombre de fois n'importe pas, et que vous souhaitiez répéter le code jusqu'à atteindre une certaine condition. Pour tous ces cas, nous utiliserons des BOUCLES.
*/

/** Utilisez la boucle ' for ' pour savoir 'combien de fois' ? **/

/*
Suppsons que ayez à faire faire embarquer 10 passagers, et que pour l'instant vous n'accordiez pas d'importance à l'ordre de leur embarquement. Utilisez une boucle 'for' pour les embarquer un par un jusqu'à atteindre 10 :
*/

const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {
  console.log("passagers embarqué !");
}

/* première partie (let i = 0)
Pour cette boucle for  , créez une variable d'indice i  qui sert de compteur pour le nombre d'exécutions de la boucle. C'est pour cette raison qu'elle démarrera à zéro, car on n'a pas encore parcouru la boucle.
*/

/* Deuxième partie (i < numberOfPassengers)
La deuxième commande dans les parenthèses   for  est la condition de poursuite de la boucle : dès qu'elle s'évalue comme   false  , on quitte la boucle. Dans ce cas, vous souhaitez l'exécuter autant de fois qu'il y a de passagers, donc quand l'indice  i  atteint 10 (après 10 boucles), vous souhaitez l'arrêter, car il n'y a plus de passager.
*/

/* Troisième partie : i++
La troisième commande demande à la boucle 'for' s'incrémenter 'i' (ajouter 1) à chaque itération. C'est ce qui permet de suivre le nombre d'exécution de la boucle. 

JavaScript termine la boucle avant d'exécuter tout autre code, donc si vous deviez écrire ceci :
*/

const numberOfPassenger = 10;

for (let i = 0; i < numberOfPassenger; i++) {
  console.log("passagers embarqué !");
}
console.log('Tous les passagers ont embarqués !');

/*
La dernièere sortie de console s'imprimerait après l'embarquement des 10 passagers.

le travail sur des indices, c'est bien, mais si vous souhaitiez utiliser un tableau de passagers pour les embarquer dans un ordre précis ?
*/


/** Travaillez sur des tableaux 'for...of' et 'for.. in' **/

/*
Dans beaucoup de cas, vous aurez un tableau et devrez le parcourir, pour faire quelque chose sur chaque élément. Il peut s'agir de mettre à jour les prix sur un menu, de traiter les données d'une base de données, ou d'embarquer des passagers dans l'ordre.
*/

/*
L'ancienne façon de parcourir un tableau dans une boucle était d'utiliser la boucle   for  vue précédemment avec sa propriété   length  . Par exemple, avec un tableau appelé ' passengers ' :
*/

// for (let i = 0; i < passengers.length; i++) {
//   console.log('Passager embarqué !');
// }

/*
Bien que ceci fonctionne, il y a deux façons plus faciles de parcourir en boucle de stableaux (ou de faire une itération sur leurs éléments).
*/

/* La boucle 'For ..in' */

/*
La boucle 'for ...in' est très comparable à l'exemple de boucle 'for' normale, mais elle est plus facile à lire, et effectue tout le travaol d'itération pour vous :
*/

const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
  console.log('Embarquement du passager ' + passengers[i]);
}

/*
Comme dans l'exemple précédent, 'i' démarre automatiquement à zéro, et s'incrémente à chaque boucle. Vous imprimez donc 'passengers[0], puis 'passengers[1]', puis 'passengers[2]', ect... jusqu'à terminer l'itération sur tous les passagers. Vous pouvez bien sûr imprimer chaque élément sur la console, car chacun est une chaîne contenant le nom du passager.
/*

/* La boucle 'for ...of' */

/*
Pour les cas où l'indice précis d'un élément n'est pas nécessaire pendant l'itération, vous pouvez utiliser une boucle   for… of  :

En reprenant l'exemple précédent et en utilisant à la place une boucle 'for ...of', vous obtenez :
*/

for (let passenger of passengers) {
console.log('Embarquement du passager ' + passenger);
}

/*
Ceci produit exactement le même résultat, mais de façon plus lisible, car vous n'avez pas à vous inquièter des indices et des tableaux : vous recevez simplement chaque élément dans l'ordre. C'est encore plus utile si le tableau est un peu plus complexe et contient par exemple des objets :
*/

const passenger = [
  {
      name: "Will Alexander",
      ticketNumber: 209542
  },
  
  {
      name: "Sarah Kate",
      ticketNumber: 169336
  },
  
  {
      name: "Audrey Simon",
      ticketNumber: 779042
  },
  
  {
      name: "Tao Perkington",
      ticketNumber: 703911
  }
]

for ( let pass of passenger) {
  console.log('Embarquement du passager ' + pass.name + ' avec le numéro de ticket ' + pass.ticketNumber);
}

/** Pratiquez les boucles 'FOR' **/

// Rendez-vous à la branche P2C3_ exo1

