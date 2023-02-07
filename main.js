/*** Travaillez sur les fonctions ***/

/*
Dans la deuxième partie de cours, vous avez découvert des notions de base en développement, poursuivons avec les fonctions.
*/

/** Comprendre les fonctions **/

/*
Une FONCTION est un bloc de code auquel vou attribuez un nom. Quand vous APPELEZ cette fonction, vous exécutez le code qu'elle contient. 

Par exemple, dans les vidéos d'enregistrements d'écrans, vous m'avez vu appeler la fonction 'console.log()', qui contient du code permettant d'imprimer sur la console mais vous pouvez créer n'importe quelle fonction vous même :
*/

// on défini la fonction :
function afficherDeuxValeurs(valeur1, valeur2) {
  console.log('Première valeur:' + valeur1);
  console.log('Deuxième valeur:' + valeur2);
}

// On exécute la fonction
afficherDeuxValeurs(12, 'Bonjour');

// On obtient dans la console
// Première valeur : 12
// Deuxième valeur : Bonjour

/*
Beaucoup de fonctions ont besoin de variables pour effectuer leur travail. 

Quand vous créez ou DÉCLAREZ une fonction, vous indiquez la liste des variables dont elle a besoin pour effectuer son travail : vous définissez les PARAMÈTRES de la fonction.

Ensuite, à l'appel de la fonction, vous lui attribuez des VALEURS pour ses paramètres. Les valeurs sont les ARGUMENTS d'appel.

Enfin, votre fonction peut vous donnez un résultat : une VALEUR DE RETOUR. Supposons que vous ayez une fonction qui compte le nombre de mots dans une chaîne :

- La paramètre sera une chaîne dont vous allez compter les mots.

- L'argument sera toute chaîne attribuée à votre fonction quand vous l'appelez.

- La valeur de retour sera le nombre de mots.

Commençons par une fonction très simple qui ajoute des nombres.

/** Pratiquez la note moyenne **/

// Rendez-vous sur la branch P3C1_exo1

