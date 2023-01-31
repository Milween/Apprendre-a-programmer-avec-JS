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