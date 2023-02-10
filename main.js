/*** Ecrire des fonctions propres ***/


/** Pourquoi la propreté du code est-elle importante **/

/*
Avant de plonger dans les méthodes de codade propre, voyons pourquoi il est important de garder votre code aussi propre que possible.
*/

/*
Pensez au lieu le plus désordonné et le moins rangé de votre domicile. Il peut s'agir d'un tiroir, d'un placard ou même d'une pièce entière.

À quel point est-ce difficile de trouver quelque chose à cet endroit ? Si vous l'avez récemment utilisé, ce n'est peut-être pas si difficile, mais si c'était il y a longtemps, les choses peuvent devenir complexes.
*/

/*
C'est la même chose, ou même pire, avec le code. Si vous n'y avez pas jeté un œil depuis quelques mois et que vous ne l'avez pas écrit proprement, il peut être très long de se rappeler ce que fait quelle fonction, et comment les choses s'organisent entre elles.

Imaginez maintenant que vous ayez hérité du tiroir, du placard ou de la chambre mal rangée de quelqu'un d'autre, qui ne vivrait plus ici.

C'est à cela que ressemble le travail sur le code d'une personne qui ne l'a pas maintenu propre !
*/

/* Proverbe de développeur :
Codez toujours comme si la personne qui devra maintenir ce code était un psychopathe violent sachant où vous vivez.
*/

// Maintenant que vous savez POURQUOI vous devez coder proprement, voyons COMMENT faire !


/** Etre une fonction ou ne pas etre **/

/*
Quand devrait-on utiliser des fonctions ? Combien faut-il en écrire ? Quelle devrait être leur longueur ?
*/

/*
Jetons un oeil à quelques situations où les fonctions contribuent à la propreté de votre code.

/* Ne vous répétez pas */

/*
Si vous trouvez à écrire plusieurs fois le même code, vous devriez probablement le REFACTORISER dans une FONCTION.

la REFACTORISATION du code consiste à modifier la STRUCTURE d'un élément de code sans changer son comportement.

observons le code suivant :
*/

if (firstUser.online) {
  if (firstUser.accountType === "normal") {
      console.log("Hello " + firstUser.name + "!");
  } else {
     console.log("Welcome back premium user " + firstUser.name + "!");
  }
  
  }
  if (secondUser.online) {
  if (secondUser.accountType === "normal") {
      console.log("Hello " + secondUser.name + "!");
  } else {
     console.log("Welcome back premium user " + secondUser.name + "!");
  }
  }
  
  if (thirdUser.online) {
  if (thirdUser.accountType === "normal") {
      console.log("Hello " + thirdUser.name + "!");
  } else {
     console.log("Welcome back premium user " + thirdUser.name + "!");
  }
  }

  /* Nous répétons ici la même tâche plusieurs fois pour des utilisateurs différents. C'est une bonne occasion de factoriser votre code dans une fonction. */

const sendWelcomeMessageToUser = (user) => {
  if (user.online) {
    if (user.accountType === "normal") {
      console.log("Hello " + user.name + "!");
    } else {
        console.log("Welcome back premium user " + user.name + "!");
    }
  }
}
  
sendWelcomeMessageToUser(firstUser);
  
sendWelcomeMessageToUser(secondUser);
  
sendWelcomeMessageToUser(thirdUser);

/*
Nous avons créé une fonction 'sendWelcomeMessageToUser' (un nom qui exprime clairement ce que fait la fonction) et l'avons appelée pour chaque utilisateur.

Dans ce cas, nous avons réduit la quantité de code de 23 lignes à 13, tout en le rendant plus lisible.

Grâce à un nom de fonction descriptif, vous pouvez indiquer que nous envoyons un message de bienvenue à trois utilisateurs.

// DRY : Don't Repeat Yourself

/** Pratiquez le principe DRY **/

// Rendez-vous sur la branche P3C3_exo1

/** Quelqu'un sait-il ce que fait ce truc ? **/

/*
Avec des fonctions qui ne font qu'une seule chose (et dont le nom décrit ce qu'elles font), vous pouvez rendre votre code bien plus propre et plus facile à comprendre :

Voyons la fonction suivante :
*/

const printStringStats = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  const wordCount = wordArray.length;
  let letterCount = 0;
  
  for (let word of wordArray) {
      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      letterCount += word.length;
  }

  const averageWordLength = parseFloat((letterCount / wordCount).toFixed(2));
  const stringStats = {
      wordCount: wordCount,
      letterCount: letterCount,
      averageWordLength: averageWordLength
  };
  
  console.log(stringStats);
}

/*
Bien qu'il y ait un nom descriptif, et que vous puissiez voir qu'il s'agit d'imprimer le nombre de mots, le nombre de lettres et la longueur moyenne des mots d'une chaîne. 

Il se passe tellement de chose qu'il est difficile de suivre si vous ne comprenez pas chaque ligne. Cette fonction fait trop de choses d'un coup.

Voyons maintenant cette refactorisation :
*/

// fonction pour renvoyer le nombre de mots.
const getWordCount = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  return wordArray.length;
}

// fonction pour renvoyer le nombre de lettre.
const getLetterCount = (stringToTest) => {
  const wordArray = stringToTest.split(" ");
  let totalLetters = 0;

  for (let word of wordArray) {
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.length;
  }
  return totalLetters;
}

// Fonction pour renvoyer la longueur moyenne de chaque mots.
const getAverageWordLength = (stringToTest) => {
  return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2))
}

// Function pour renvoyer les statistiques de la chaîne de caractères.
const printStringStats = (stringToTest) => {
  console.log({
    wordcount : getWordCount(stringToTest),
    letterCount : getLetterCount(stringToTest),
    averageWordLength : getAverageWordLength(stringToTest)
  })
}

/*
Vous ne pouvez pas comprendre la complexité de chaque fonction, mais vous pouvez bien comprendre ce que se passe parce qu'ELLES NE FONT QU'UNE SEULE CHOSE, mentionnée dans leur nom.

Vous pourriez utiliser les fonctions individuelles sans avoir besoin de savoir ce qui se passe sous le capot.
*/

/* Notes 
' La première règle des fonctions est qu'elles devraient être petites. La deuxième règle des fonctions est qu'elles devraient être encore plus petites'

- Robert C. martin, clean code, A handbook of agile software Craftmanship.
*/


/** Laissez des commentaires **/

/*
C'est en apprenant à laisser des commentaires claires et cohérents que vous brillerez en tant que développeur. Néanmoins, ne commentez pas chaque ligne de code ou fonction. 

Les commentaires doivent clarifier ce qui n'est pas immédiatement apparent à la lecture de code.

Il y a deux types de commentaires :

- SUR une ligne : //
- SUR plusieurs lignes : /*

et chacun a sa place, ajoutons des commentaires à notre exemple précédent :
*/

const getWordCount = (stringToTest) => {
  const wordArray = stringToTest.split(' ');
  return wordArray.length;
}

const getLetterCount = (stringToTest) => {
  const wordArray = stringToTest.split(' ');
  let totalLetters = 0;
  for (let word of wordArray) {
      // retire la ponctuation pour ne compter que les lettres
      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      totalLetters += word.length;
  }
  return totalLetters;
}

/*
** renvoie la longueur moyenne des mots
** arrondie à deux chiffres après la virgule
*/
const getAverageWordLength = (stringToTest) => {
  return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
}

const printStringStats = (stringToTest) => {
  console.log({
      wordCount: getWordCount(stringToTest),
      letterCount: getLetterCount(stringToTest),
      averageWordLength: getAverageWordLength(stringToTest)
  })
}

/* Comme vous pouvez le voir, toutes les fonctions ou lignes n'ont pas de commentaire :

- Le commentaire sur une ligne explique la raison de l'appel, d'apparence complexe, à 'replace' :

- Le commentaire sur plusieurs lignes explique que la longueur moyenne du mot sera renvoyée à 2 décimales près, car ce n'est pas immédiatement apparent.

Laisser juste le nombre correct de commentaires est une forme d'art, mais vous y arriverez en pratiquant ! Assurez-vous donc de commenter votre code !
*/


/** Ecrire du code avec style **/

/*
Adopter un style cohérent est nécessaire pour que le code reste propre, et bien qu'il n'y ait pas de bonne façon absolue de faire les choses, il y a un certain nombre de conventions qui peuvent vous faciliter la vie.
*/

/* Qu'y-a-t'il dans un nom ? */

/* Utiliser les conventions de nommage

Comme vous l'avez vu jusqu'à présent, les noms de variable et de fonction dans JavaScript sont généralement écrits en "camel case" minuscule (   getWordCount  ,   numberOfCats  ), alors que les noms de classe sont écrits en "camel case" majuscule (   PremiumAccount  ,   SpecialGuest  ). 

Vous n'êtes pas obligé d'utiliser cette convention ; néanmoins, elle facilite la lecture de votre code car elle est respectée par la grande majorité des développeurs.
*/


/* Choisir un nom 

Note : 'Vous devriez choisir un nom de variable avec le même soin que pour votre premier enfant'

Des noms clairs et descriptifs pour les variables et les fonctions sont plus faciles à lire que des noms rccourcis, obscurs ou aléatoires. 

Voyez par exemple la fonction :
*/

const lc = (s) => {
  const w = s.split(' ');
  let l = 0;
  for (let wel of w) {
    wel.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    l += wel.length;
  }
  return l;
}

/*
Cette fonction fait parfaitement ce qu'elle est censée faire. Mais que fait-elle ?

100 points si vous l'avez reconnues comme la fonction de comptage de lettres de notre exemple précédent !
*/

/* Mettre en forme votre code 

Le terme MISE EN FORME DU CODE recouvre beaucoup de domaines, en voici quelques-uns : 

- Mise en retrait :

Tabulations ou espaces ? Deux espaces ou quatre ? quel que soit votre choix, gardez le même style partout :
*/

if (useOnline) {
  for (let message of user.messages) {
    message.send()
  }
  sendNotification();
}

// ESPACEMENT : les versions ci-dessous ont le même fonctionnement :

if(condition) {
  let i=0;
i+=condition.thing;
  let j=i-3;
}

if (condition) {
   
  let i = 0;
  
i += condition.thing;

  let j = i - 3;
}

/* En général, en ajoutant un peu d'espace, vous rendez le code plus facile à lire, mais les deux sont techniquement corrects. Vous ne pouvez néanmoins en choisir qu'un !
*/

// Positionnement des accolades 

if (condition) {
  doTheThing();
} else {
  doTheOtherThing();
}

if (condition)
{
  doTheThing();
}

else
{
  doTheOtherThing();
}

/* 
La mise en forme du code est source de nombreuses discussions entre les dévs, et dépend souvent du reste de votre équipe. Pour écrire votre propre code, choisissez le style que vous préférez et tenez vous-y !
*/

/** Pratiquez l'écriture de code propre **/

// rendez vous sur la branche P3C3_exo2


/*** EN RESUME ***/

/*
Dans ce chapitre, nous avons étudié quelques techniques et meilleurs pratiques de codage propre :

- REFACTORISATION du code en fonctions, quand du code se répète, ou quand une fonction fait trop de choses.

- Les fonctions ne doivent faire QU'UNE SEULE CHOSE, elles sont souvent plus claires que les fonctions à plusieurs usages.

- Laisser des COMMENTAIRES appropriés rend votre code beaucoup plus facile à comprendre.

- Il est très important d'avoir une CONVENTION DE NOMMAGE strictte avec des NOMS CLAIRS ET DESCRIPTIFS.

- Vous avez vu des exemples de MISE EN FORME DU CODE, et différents choix possibles.

*/

