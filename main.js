// pratiquez les constantes 

/*
Voici un composant qui déconstruit une journée en heures, minutes et secondes.

Tout ce que vous avez à faire, c'est de créer les trois constantes qui donnent le nombre d'heures par jour, le nombre de minutes par heure, et le nombre de secondes par minute.

Jouez un peu avec ces valeurs, et vous verrez vite l'importance d'avoir les bonnes valeurs constantes dans une application !
*/

/*
Dans l'espace alloué, créez les trois constantes suivantes :
- hoursPerDay: heures par jour
- minutesPerHour: minutes par heure
- secondsPerMinute: secondes par minute
*/

// Create your code under 

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

// code de l'exercice.

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;

  hours.innerText = `${ calcHours } hours`;
  minutes.innerText = `${ calcMinutes } minutes`;
  seconds.innerText = `${ calcSeconds } seconds`;
});