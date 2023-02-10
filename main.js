/*** Pratiquez le principe DRY. ***/

/*
Voici une activité où vous devrez trouver où le code nécessite une factorisation, et comment le faire.

Rendez-vous sur cet éditeur CodePen. Ce code importe des séries depuis la base de données, en génère les informations pour les composants du site, et les met dans un tableau à exporter.

Cependant, pour l'instant, le même code est répété pour chaque série. L'endroit parfait pour une fonction !

1. Créez une fonction qui vous permet de refactoriser ce code, afin de le raccourcir et de le rendre plus lisible.

2. Appelez votre nouvelle fonction pour chaque série pour créer le composant correspondant, en passant les arguments appropriés.
*/

// Code du l'exercice :


class Show {
  constructor(title, numberOfSeasons, episodesPerSeason) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.episodesPerSeason = episodesPerSeason;
  }
}

const tau = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
const clara = new Show('The Bugs of Isla Clara', 6, 15);

const shows = [tau, meldrum, clara]

// INSERER VOTRE CODE CI_DESSOUS 

function generateComponent(show) {
  const titleText = show.title;
  const seasonsText = show.numberOfSeasons + ' seasons';
  const episodesText = show.episodesPerSeason + ' episodes per season';

  return {
    titleText,
    seasonsText,
    episodesText
  }
}

const tauComponent = generateComponent(tau);
const meldrumComponent = generateComponent(meldrum);
const claraComponent = generateComponent(clara);

const showComponents = [tauComponent, meldrumComponent, claraComponent];

// INSERER VOTRE CODE AU_DESSUS

const body = document.querySelector('body');

const updateShows = () => {
  for (let show of showComponents) {
    
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');
    
    const showHeading = document.createElement('h2');
    showHeading.innerText = show.titleText;
    
    const showDetails = document.createElement('p');
    
    const seasons = document.createElement('p');
    seasons.innerText = show.seasonsText;
    
    const episodes = document.createElement('p');
    episodes.innerText = show.episodesText;
    
    showDetails.append(seasons);
    showDetails.append(episodes);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

updateShows();