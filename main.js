/*** Tester qu'une fonction fait ce qu'elle dit ***/

/** Comprendre l'importance des tests **/

/* 
Il y a environ un an, j'ai été appelé dans une start-up pour les aider à terminer un développement à temps pour leur date de déploiement. Le produit de cette société traite un grand nombre de petites transactions, donc l'exactitude était essentielle.

Je travaillais sur l'interface, mais j'ai immédiatement remarqué un problème : les calculs ne correspondaient pas. En lançant quelques centaines de transactions, les totaux étaient faux de plusieurs dizaines d'euros. Quelque chose allait sérieusement de travers.

Ce projet était grand, complexe et très ambitieux (l'interface elle-même avait plus de 600 000 lignes de code !), mais cette start-up n'avait pas mis en place d'architecture de test.

Pour localiser le problème, il nous a fallu plus d'une semaine avec de plus en plus de frustration et de panique. Il y avait un quart de million d'euros en jeu, et cela seulement pour un client.

L'histoire s'est bien terminée, mais il a fallu une semaine entière pour rechercher une erreur, qui aurait été décelée s'il y avait eu un système décent de test. Nous aurions pu perdre tellement d'argent que la société aurait mis la clé sous la porte.
*/


/** Qu'est ce que le test **/

// EH bien, cela dépend, il y en a trois essentiels.

/* Créez des tests unitaires */

/*
LE test unitaire vérifie des unités individuelles (en général des fonctions uniques ou des classes) en leurs fournissant une entrée et en s'assurant qu'elles donnent la sortie attendue.
*/

/* Important : 
C'est une autre raison pour écrire des fonctions courtes qui n'ont qu'un seul usage : il est plus facile d'écrire des tests pour elles !
*/

/*
En général, chaque unité est testée sur un simple cas, puis sur un ou plusieurs cas limites. Si par exemple, vous prenez quelques fonctions du chapitre précédent :
*/

const getWordCount = (stringToTest) => {
  const wordArray = stringToTest.split(' ');
  return wordArray.length;
}

const getLetterCount = (stringToTest) => {
  const wordArray = stringToTest.split(' ');
  let totalLetters = 0;
  for (let word of wordArray) {
      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      totalLetters += word.length;
      
  }

  return totalLetters;
}

/* Quel cas testeriez-vous pour chaque fonction ici ?

- getWordCount : vous pourriez vérifier une chaîne dont vous connaissez le nombre de mots (cas simple). Puis peut-être une chaîne vide, et une chaîne qui ne contiendrait que des espaces.

- getLetterCount : vous pourriez vérifier une chaîne font vous connaissez le nombre de lettres (cas simple). Puis essayer une chaîne ne contenant que des signes de ponctuation (cas limite).

Vous pourriez écrire ces tests comme code accessoire :
*/

const testSimpleWordCount = () => {
  const testString = 'I have four words!';
  if (getWordCount(testString) !== 4) {
      console.error('Simple getWordCount failed!');
  }
}

const testEdgeWordCount = () => {
  const testString = '             ';
  if (getWordCount(testString) !== 0) {
      console.error('Edge getWordCount failed!');
  }
}

const testSimpleLetterCount = () => {
 const testString = 'I have twenty one letters!';
  if (getLetterCount(testString) !== 21) {
      console.error('Simple getLetterCount failed!');
  }
}

const testEdgeLetterCount = () => {
  const testString = '")(&;//!!';
  if (getLetterCount(testString) !== 0) {
      console.error('Edge getLetterCount failed!');
  }
}

/* 
Ce sont des tests simples, et ils peuvent convenir pour des vérifications rapides, mais il est généralement préférable d'utiliser une ARCHITECTURE DE TEST.

Les architectures et bibliothèques de test permettent d'écrire automatiquement des suites de tests complètes de votre code, à l'aide de fonctions et de syntaxe spécifiques. Voici à quoi pourraient ressembler les deux tests ci -dessus dans certaines architectures :
*/

describe('getWordCount()', function() {
  it('should find four words', function() {
    expect(getWordCount('I have four words').to.equal(4));
  });
  it('should find no words', function() {
    expect(getWordCount('   ').to.equal(0));
  });
});

/* Les tests unitaires constituent généralement entre 60 et 80% de l'ensemble des tests des projets JS. Mais il existe d'autres tests, comme les tests d'intégration.
*/


/** Découvrez les test d'intégrations **/

/*
Les tests d'intégration vérifient les multiples fonctions ou classes pour s'assurer qu'elles travaillent ensemble comme elles sont censées le faire. 

L'image ci-dessus montre ce qui se passe quand les unités individuelles fonctionnent correctement (les deux tiroirs s'ouvrent correctement séparément), mais que leur intégration dans le système qui les entoure cause un problème de fonctionnement.
*/

/** Appréhender les tests fonctionnels **/

/*
Les tests foncitonnels, aussi appelés end2end, vérfiient des scénarios complet en contexte. Par exemple, un utilisateur se connecte à votre application, ouvre ses notificaitions et les marque toutes commme lues. 

Ces tests vérifient aussi les ressources externes que votre projet peut utiliser, par exemple un système de paiements tiers.
*/

/* Commet ça se passe dans la pratique ? */

/*
Pratiquez les tests unitaires demande un peu d'expérience et d'utiliser des outils dédiés. Il existe différents frameworks dédiés aux tests unitaires et fonctionneles pour les applications JS frontEnd et backEnd.
On retrouve souvent les framework (jasmine, mocha.js Mocha,ect ..).

Pour utiliser ces outils, iil est souvent nécessaire mettre en place une configuration particulière et une système de compilation de votre code. Il vous est donc nécessaire d'appréhendez plus largement JS avant de pratiquer les tests.

Une fois que vous aurez une bonne connaissance et compréhension du JS et un peu d'expérience, vous pourrez consulter le cours Testez l’interface de votre site.
*/


/*** EN RESUME ***/

/* Dans ce chapitr, nous vous avons présenté les trois types de tests :

 - Les tests unitaires.

 - Les tests d'intégrations.

 - Les tests fonctionnels (E2E).

 Vous avez aussi vu que, bien que des tests manuels sur du code accessoire puissent fonctionner, il existe des architectures automatisées qui rendent les tests plus faciles et fiables.
 */