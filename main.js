/*** Exécutez du JavaScript facilement ***/

/** Découvrez l'avantage de JS : un langage, de nombreux environnement **/

/*
L'avantage du JS, c'est que ce langage vous permet de programmer dans de nombreux environnement différents. Gardez cependant en tête que la façon d'exécuter le code est légèrement différente dans chaque environnement. Nous allons ici explorer brièvement trois environnement différents : JSBin, les pages webs et les serveurs.
*/

/** Découvrez JSBIN **/

/*
JSBin est un excellent outil pour tester des extraits de code en JS, c'est pour cette raison que je l'ai utilisé pour démontrer certains outils ou principes. Voyons comment il exécute le code.

Dans jsbin, vous pouvez écrire du code ligne par ligne dans le volet JS, et utiliser le bouton Run pour l'exécuter. JSBin parcourt alors vos lignes de code et les exéute l'une après l'autre. L'ordre est donc important.
*/

/* 
Par exemple, ce morçeau de code :
*/

let numberOfGuests = 20;
console.log(numberOfGuests); //20.

// n'est pas identique à :

console.log(numberOfGuests); // undefined
let numberOfGuests = 20;

/** Ecrivez du code pour des pages web **/

/*
Si vous avez suivi les exercice jusqu'ici, vous avez écrit du code JS pour une page web. Mais vous n'avez pas encore vu comment votre code est interprété en arrière-plan.
*/

/*
Eh bien, il y avait d'autres fichiers (auxquels vous n'aviez pas accès) qui effectuaient ce travail pour vous. En effet, il y avait un autre fichier JavaScript qui importait votre tableau d'épisodes et produisait les éléments qu'il ajoutait ensuite à la page web. Ce fichier était ensuite importé par le fichier HTML (qui indique au navigateur ce qu'il devrait y avoir sur la page) et exécutait automatique le code.
*/

/*
C'est plus ou moins de cette façon que JavaScript fonctionne sur le web. Vous écrivez du code, l'enregistrez dans un ou plusieurs fichiers, puis IMPORTEZ ces fichiers par une balise spéciale dans votre fichier HTML. Le navigateur EXECUTE ensuite automatiquement le code dans ces fichiers, en général dans l'ordre de leur importation.
*/

/* Notes : Il existe un cours complet sur JS pour le web, donc quand vous autez fini celui-ci, pourquoi ne pas y jeter un oeil ?
*/

/** Ecrivez du JavaScript pour des serveurs **/

/*
Il fut un temps où JavaScript ne pouvait s'utilisait que dans des pages web (en avant plan), mais ce n'est plus vrai ! Il peut maintenant aussi s'utiliser en ARRIÈRE-PLAN, pour gérer l'accès à certaines ressources.
*/

/*
Prenez par exemple un service de messagerie mail. Vous avez un page web qui vous permet d'accéder à vos messages, mais ils ne  sont pas ENREGISTRÉS dans cette page. Ils sont enregistrés dans une base de données à travers un serveur, qui peut être écrit en JS!
*/

/* 
Néanmoins, les serveurs doivent être actifs à tout moment, et seuls certains éléments de code doivent être exécutés à certains moments. Par exemple, le code qui vous permet d'accéder à vos messages ne doit être exécuté QUE si et quand vous décidez d'ouvrir votre client de messagerie !
*/

/*
Dans ce cas, un evironnement (tel que NODE); couplé à un code JS particulier, fait que cela se produit. Le serveur réagit à votre ouverture du client de messagerie, VERIFIE l'authenfication et ENVOIE vos messages.
/*

/** En RÉSUMÉ **/

/* 
Dans ce chapitre, vous avez :

- appris à utiliser JSBin.

- Appris à créer du JS pour les pages web.

- Découvert que le JS peut aussi s'utiliser pour des serveurs.

/** Découvrez l'égalité : == ou === **/

/*
En JavaScript, toutes les égalités ne sont pas nées égales :

Il y a deux façons de vérifier si deux valeurs sont égales en JS : == et ===, aussi appelées égalité SIMPLE et égalité STRICTE :

- l'égalité SIMPLE vérifie la VALEUR, mais pas le type. Donc ceci renvoie la valeur TRUE. (5 == '5')

- par contre, l'égalité stricte vérifie à la fois la VALEUR et le TYPE. Donc : 5 === '5' renvoie FALSE, car on compare un NUMBER et une STRING.

De même, il y a deux opérations d'inégalité, ' != ' et ' !== ', avec la même distinction.

/* Comprendre les conditions multiples */

/* Dans ceraines situations, vous souhaitez vérifier plusieurs conditions pour un même résultat, par exemple dans la même instruction if. Pour cela, il existe des OPÉRATEURS LOGIQUES.

- && : ET logique, pour vérifier si deux conditions sont TOUTES LES DEUX vraies.

- || : OU logique, pour vérifier si AU MOINS UNE condition est vraie.

- ! : NON logique, pour vérifier si une condition n'est PAS vraie.
*/

let userLoggedIn = true;
let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount; // true
userLoggedIn && userHasMegaPremiumAccount; // false

userLoggedIn || userHasPremiumAccount; // true
userLoggedIn || userHasMegaPremiumAccount; // true

!userLoggedIn; // false
!userHasMegaPremiumAccount; // true

/*
Bien sûr, ces opérateurs peuvent être mélangés et combinés en fonction de vos besoins précis.
*/

/** Pratiquez les opérateurs logiques **/

// rendez-vous sur la branch git P2C2_exo2


/** Appréhendez un notion importante : le scope des variable **/

/* En JS, les variables crées par let ou const ne peuvent être vues ou utilisées qu'à l'intérieur du bloc dans lequel elles sont déclarées.

/* Note : Un BLOC DE CODE, aussi souvent apellé BLOC tout court, est une section de code incluse entre accolades {}.
*/

//Ce phénomène est appelé PORTÉE DES VARIABLES ou BLOCK SCOPE (en). Voici un exemple.

let userLoggedIn = true;
if (userLoggedIn) {
  let welcomeMessage = 'Welcome back !'; // scopes
} else {
  welcomeMessage = 'Welcome new user !'; // scopes
}

console.log(welcomeMessage); // renvoie une erreur

/*
Dans ce code, nous avons deux blocs de code issus des l'instruction if / ekse. Ils sont mis en évidence dans notre exemple.
*/

/*
Les deux blocs déclarent une variable par ' let welcomeMessage '. Néanmoins, ces variables ne sont disponibles qu'à l'intérieur des blocs où elles sont déclarées. 

C'est pourquoi, quand vous essayez d'afficher le contenu de ' welcomeMessage' sur la console, vous obtenez une erreur, pour le code EN DEHORS des blocs, il n'y a pas de variable 'welcomeMessage'.
*/

/*
Donc, comment obtenir le comportement voulu ? Comment passer des valeurs vers l'extérieur depuis l'intérieur d'un bloc de code ?
*/

/* 
Pour cette situation, un méthode pourrait être de déclarer la variable dans la portée EXTÉRIEURE, puis de la modifier à l'intérieur des blocs if / else.
*/

let userLoggedIn = true;
let welcomeMessage;// Déclarer la variable ici !

if (userLoggedIn) {
  let welcomeMessage = 'Welcome back !'; // modifier la variable extérieure.
} else {
  welcomeMessage = 'Welcome new user !'; // modifier la variable extérieure.
}

console.log(welcomeMessage); // imprime 'welcome back !'

/*
Ici, DU FAIT que la variable soit déclarée dans le scope parent, elle est disponible et accessible partout, et peut-être modifiée correctement.
*/


/** Utiliser les instructions switch **/

/*
Et si vous souhaitez vérifier la valeur d'une variable par rapport à une liste de valeurs attendues, et réagir en conséquence ? Pour cela, vous pouvez utiliser l'instruction 'switch' :

Supposons que vous ayez quelques objets utilisateurs, vous souhaitez vérifier quel type de compte a chacun, pour envoyer un message personnalisé :
*/

let firstUser = {
  name: 'Will Alexander',
  age: 33,
  accountLevel: 'normal'
};

let secondUser = {
  name: 'Sarah kate',
  age: 21,
  accountLevel: 'premium0'
};

let thirdUser = {
  name: 'Audrey Simon',
  age: 33,
  accountLevel: 'mega-premium'
};

/* 
Vous pouvez ici utiliser une instruction ' SWITCH ' qui prend la variable à vérifier et une liste de valeurs, comme différents cas :
*/

switch (firstUser, accountLevel) {
  case 'normal' :
    console.log('You have a normal account !');
  break;
  case 'premium' :
    console.log('You have a premium account !');
  break;
  case 'mega-premium':
    console.log('You have a mega premium account !');
  break;

  default:
    console.log('Unknown account type');
}

/* Après le code à exécuter dans chaque instruction ' case ', ajoutez l'instruction ' break '. Si vous ne le faites pas, JavaScript continuera l'exécution des cas suivants (en cascade).

Jusqu'à rencontrer une instruction break ou la fin de l'instruction 'switch'. Comme vous pouvez le voir dans l'exemple, vous pouvez aussi ajouter un cas default qui ne sera exécuté que si la variable que vous vérifiez ne correspond à aucune des valeurs répertoriées.

Le switch peut servur dans différents cas mais surtouts rendre plus facile à lire l'enchaînement de condition if / else.

Par exemple voici commment on aurait écrit l'exemple précédent avec des if / else :
*/

if (firstUser.accountLevel === 'normal') {
  console.log('You have a normal account !');
} else if (firstUser.accountLevel === 'premium') {
  console.log('You have a premium account');
} else if (firstUser.accountLevel === 'mega-premium') {
  console.log('You have a mega premium account');
} else {
  console.log('Unknown account type');
}


/*** EN RÉSUMÉ ***/

/*
Félicitations pour l'achèvement de ce chapitre ! Nous avons traité beaucoup de choses ici. Vous avez :

- Appris le fonctionnement des instructions : if / else.

- Vu les différents types de conditions pouvant être utilisés pour les instructions if / else.

- Appris à regrouper les différentes conditions avec des opérateurs logiques.

- Exploté la portée des variables, et les conséquences qu'elle a sur la structure du code.

- Découvert l'instruction 'switch' pour comparaison à une liste de valeurs attendues.

Dans le chapitre suivant, nous allons nous intéresser à la répétition de tâches avec des BOUCLES.
*/