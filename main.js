/*** Déboguer votre fonction ***/

/*
Quand quelque chose ne va pas dans votre projet, il peut être difficile de savoir ce qui s'est passé. Voici quelques techniques qui, je l'espère, devraient vous aider à remettre les choses d'aplomb !
*/

/** Afficher la console **/

/*
LA console est un outil incroyable utile pour le débogage du code, observons une version défectueuse d'une fonction d'un chapitre précédent.
*/

const getWordCount = (stringToTest) => {
  const wordArray = stringToTest.split('');
  console.log("Word array in getWordCount: ");
  console.log(wordArray);
  return wordArray.length;
}

getWordCount('thibaut kosmala')
/*
Pour une raison quelconque, cette fonction renvoie des valeurs curieuses. Utilisons un affichage de console pour voir ce qui se passe :
*/

/* Maintenant, à l'appel, nous obtenons le résultat suivant dans la console.

(15) ['t', 'h', 'i', 'b', 'a', 'u', 't', ' ', 'k', 'o', 's', 'm', 'a', 'l', 'a']
*/

/*
Plutôt que de répartir la chaîne en mots, elle la répartit en lettres ! Une observation plus attentive de la fonction montre une erreur à l'appel de  split : ce devrait être stringToTest.split(' '), et non pas stringToTest.split('').
*/

/*
L'utilisation de la convient bien dans les cas simples et isolés comme celui-ci, mais dans les projets plus complexes, ce serait beaucoup plus difficles et plus chronophages.

Dans ce cas, il faut des armes plus puissantes.
*/

/* Notes :
Je connais beaucoup de développeurs qui utilisent toujours la technique de l'affichage de console. Cela fonctionne, mais c'est lent. L'apprentissage d'outils plus évolués vous aidera à déboguer plus rapidement, pour passer plus de temps sur les choses amusantes !
*/


/** Utilisez des outils pour développer **/

/*
Pour écrire du JavaScript pour des sites web, vous pouvez utiliser les outils pour développeur intégrés dans les quatre navigateurs essentiels : Chrome, Firefox, Safari et Edge.

Chaque navigateur contient un système qui vous permet d'ajouter des points d'arrêt pas-à-pas (breakpoints) à votre code.

Quand le navigateur arrive sur un point d'arrêt de votre code, il met l'exécution en pause, ce qui vous permet de parcourir l'exécution ligne après ligne, en vérifiant les valeurs des variables à chaque étape.

Vous pouvez même ignorer certains morceaux de code si vous souhaitez voir comment votre appli y réagit.
*/

/* La plupart des ENVIRONNEMENTS DE DÉVELOPPEMENT INTEGRES comportent aussi des DÉBOGUEUR, qui vous permet de tout déboguer dans votre espace de travail. Ceka peut-être pratique, en particulier si votre code ne doit pas s'exécuter sur un page web ne peut pas être vérifié dans le navigateur.

les environnements de développement intégrés les plus courant sont notamment VS code et webstorm.
*/

/*
L'affichage de console, c'est bien, les débogueurs, c'est mieux, mais quand tout le reste a échoué, il existe une dernière solution.
*/


/** Déboguez avec un canard en plastique **/

/*
Quand votre code a un bug que vous ne pouvez pas trouver et expliquer, vous pouvez parler à un canard en plastique que vous conservez sur votre bureau. 

Vous expliquez votre code ligne par ligne en termes simples, que le canard peut comprendre. La réflexion à voix haute et l'explication de votre code en termes simples vous permettra souvent de voir finalement : "Comment n'ai-je pas vu ça ? Il y a un bug !".

Même si cette section est un peu humoristique, le raisonnement sur votre code, à voix haute et en termes simples, peut être utile pour le débogage et la factorisation !
*/


/** Pratiquez les console.log **/

// rendez-vous sur la branch P3C5_exo1.


/** EN RESUME **/

/*
Dans ce chapitre, vous appris trois techniques de débogage différentes :

- Affichage de console : parfait pour de petites erreurs, simple ou isolées. Mais pas idéal dans des projets plus grands et plus complexes.

- Utilisation des outils de développement : qu'il s'agisse des outils intégrés dans la plupart des navigateurs, ou des débogueur de votre IDE, c'est à coup sûr la façon fiable de débloguer du code.

- Débogage avec un canard en plastique, quand les choses vont terriblement mal.
*/

