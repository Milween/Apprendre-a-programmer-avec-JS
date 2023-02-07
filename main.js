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

