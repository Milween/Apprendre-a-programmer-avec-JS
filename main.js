// CODE JAVASCRIPT DU COURS

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
