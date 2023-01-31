// PRATIQUEZ LES CONDITIONS if/else

/*
Dans cet exercice, nous allons mettre en place un contrôle de l'âge pour afficher un contenu. Sur notre page, il y a un input text qui demande de saisir votre âge, et un bouton pour valider. Si on est majeur, donc 18 ans et plus, on affiche le message autorisé, sinon on affiche une alerte disant que l’on n’est pas autorisé.
*/

/*
Pour réaliser cet exercice, voici comment vous allez procéder :

1. Vous allez lire le code JavaScript, qui est intégralement commenté, pour bien comprendre à quoi sert chaque élément, et surtout les variables à votre disposition. Il y a sûrement des éléments que vous ne comprenez pas car vous n’avez pas encore vu comment manipuler du HTML en JavaScript, mais ici vous n’avez qu’à exploiter les variables et fonctions déjà codées.

2. Vous allez écrire une condition if/else entre les lignes 'INSERER VOTRE CODE' qui appellera la fonction refuser() si l'âge saisi correspond à un mineur, et la fonction valider() s’il est majeur.

3. Attention, l'âge de la majorité a été stocké dans la variable ageMajorite, donc il faut utiliser cette variable dans la condition.

Une fois que vous aurez codé la bonne condition, vous pourrez enchaîner les tests en saisissant différents âges et en validant.
*/

// CODE JAVASCRIPT De L'EXERCICE.

// On pointe sur l'élément de message.
const espaceMessage = document.getElementById('message')

// On point suyr l'élément de bouton.
const bouton = document.getElementById('bouton')

// On pointe sur l'élément de champ de saisie.
const ageInput = document.getElementById('age')

// On défni la variable 'age' qu'on utilisera et une variable définissant l'âge de la majorité.
let age;
let ageMajorite = 18;

// fonction qui affichera le message de validation.
function valider() {
  espaceMessage.innerHTML = 'Vous êtes autorisé à entrer'
}

// fonction que affichera le message de refus.
function refuser() {
  alert('Cette espace est interdit aux personnes  mineurs');
}

// fonction qui vérifie l'input de l'utilisation et retournera en conséquence les fonctions.
function onConfirm() {
  // on répère la saisie de l'âge et on transforme le texte en nombre entier.
  age = parseInt(ageInput.value);
  // Si la saisie n'est pas un chiffre, on affiche un message d'erreur.
  if(isNaN(age)) {
    alert('Ceci n\'est pas un nombre')
    return;
  }

  // INSERER VOTRE CODE EN DESSOUS :

  if (age < ageMajorite) {
    refuser()
  } else {
    valider()
  }
  
  // INSERER VOTRE CODE AU DESSUS :
  ageInput.value = "";
}

// Fonction qui permet de vider l'affichage de l'élément message.
function Reset() {
  espaceMessage.innerHTML = '';
}

// EVENTS

bouton.addEventListener('click', onConfirm)
ageInput.addEventListener('click', Reset)