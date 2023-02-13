/*** Pratiquez les consoles.log() ***/

/*
Il est important de savoir utiliser les consoles.log et de bien analyser les différentes variables. L’objectif est de comprendre quelle est l’erreur de logique qui pose souci.
*/

/*
Rendez-vous sur le CodePen à cette adresse. Le code a pour objectif de convertir des années en mois (dans une année, il y a 12 mois). Si on saisit 10 ans dans le champ Année et qu’on clique sur Convertir, on se retrouve avec une phrase nous indiquant que dans 10 années il y a 80 mois, ce qui est faux car la bonne réponse est 120 mois.
*/

/*
Le calcul des mois se fait à la ligne 25, et on souhaite comprendre ce qui ne va pas dans le calcul.

Votre mission ici est de faire des console.log au niveau des lignes 27 à 31 pour analyser les variables utilisées pour le calcul de la ligne 25. 

Suite à l'analyse, vous pourrerz comprendre ce qui ne va pas et effectuer la correction nécessaire.
*/

// ENTREZ VOTRE CODE CI DESSOUS :



// ENTREZ VOTRE CODE CI DESSUS :

// Code de l'exercice :

// on pointe sur l'élément de message.
const espaceMessage = document.querySelector('#message');

// On pointe sur l'élément de bouton.
const bouton = document.querySelector("#bouton")

// On pointe sur l'élément de champ de saisie de l'année.
const anneeInput = document.querySelector('#annee');

let params = [];
for (let i = 20; i > 0; i--) {
  params.push(i)
}

// Définir une variable année.
let annee;

function onConvert() {
  // on récupère la saisie de l'année et on transforme le texte en nombre entier.
  annee = parseInt(anneeInput.value);
  console.log('annee', annee)

  // Si la saisie n'est pas un nombre, on affiche un message d'erreur.
  if(isNaN(annee)) {
    alert("Ceci n'est pas un nombre");
    return;
  }
  const mois = annee * params[8];
  console.log('params', params)
  
  espaceMessage.innerHTML = annee + ' années font ' + mois + ' mois.';
}


// On écoute l'action de click sur le onConvert et on appelle la fonction onConvert.
bouton.addEventListener('click', onConvert);