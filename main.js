/*** Découverte de la résursivité. ***/

/** Pratiquer la récursivité **/

/*
Quand on parle de récursivité, il y a une fonction qui fait vraiment partie des grands classiques : la fonction mathématique 'factorielle' ! 

Concrètement, la factorielle d'un nombre 'n' est définie comme 'n' fois la factorielle du nombre 'n -1', et la factorielle de '1'et '1'.
*/

/*
Voici la décomposition de la factorielle de 3 pour mieux comprendre :

factorielle(3) = 3 * factorielle(3 - 1)

factorielle(3) = 3 * factorielle(2) =  3 * ( 2 * factorielle(2 - 1) )

factorielle(3) = 3 * factorielle(2) =  3 * ( 2 * factorielle(1) ) = 3 * 2 * 1 = 6

C'est finalement une fonction simple à comprendre ccar très visuelle :

factorielle(7) = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040

factorielle(4) = 4 * 3 * 2 * 1 = 24

Quand on regarde la décomposition de factorielle(3), on constate qu'on appelle de nouveau la factorielle avec la valeur 'n -1', donc on est bien dans de la récursivité.
*/

/** EN RESUME **/

/* Dans ce chapitre, vous avez vu :

- Que les FONCTIONS RÉCURSIVES sont des fonctions qui s'appellent elles-mêmes.

- Qu'une fonction récursive a besoin d'un cas de base, ou BASE CASE, pour qu'elle puisse savoir quand son travail est terminé.

- Un exercice de pratique avec la fonction mathématique factorielle.
/*


