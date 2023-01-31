// PRATIQUEZ LES CONDITIONS if/else

/*
Nous reprenons l’exercice précédent avec une checkbox servant à indiquer si le contrôle parental est activé ou non. On se retrouve avec 2 situations :
*/

/*
- Le contrôle parental est activé ET il faut être majeur pour accéder au contenu.

- Le contrôle parental est désactivé ET tout le monde accède au contenu.

Il y a donc une notion de contrôle parental qui se retrouve dans une nouvelle variable dans le code.

Votre mission est d'écrire la condition de la même manière que l'exercice précédent, en prenant en compte la nouvelle variable 'isControlParentalActive'.

Avant de commencer à coder votre solution, n'hésitez pas à regardez comment la variable 'isControleParentalActive' est obtenue.
*/

// CODE JAVASCRIPT DE L'EXERCICE.

// On pointe sur l'élément de message.
const espaceMessage = document.getElementById('message')

// On point suyr l'élément de bouton.
const bouton = document.getElementById('bouton')

// On pointe sur l'élément de champ de saisie.
const ageInput = document.getElementById('age')

// On pointe sur l'élément de la checkbox de contrôle parental
const parentControl = document.getElementById('parental')

// On défni la variable 'age' qu'on utilisera et une variable définissant l'âge de la majorité.
let age;
let isControlParentalActive;
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
  
  // On récupère la valeur de la checkbox de contrôle parental.
  isControlParentalActive = parentControl.checked;
  // console.log('actif', isControlParentalActive)


  // INSERER VOTRE CODE EN DESSOUS :

  if (age < ageMajorite && isControlParentalActive) {
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