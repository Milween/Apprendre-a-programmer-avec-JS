/*** Définir des méthodes d'instance et des propriétés ***/

/** Rappel sur la notion de propriété de classe **/

/*
Avant d'aborder la notion de méthode d'instance, sur laquelle nous allons nous concentrer dans ce cours, il est important d’expliquer la notion de propriété de classe.

C’est une variable interne à cette classe que l’on peut définir par défaut et faire évoluer au fur et à mesure de l’exécution de notre code.

Il n’est pas rare d’utiliser le terme “attribut” au lieu de "propriété", mais cela représente bien la même chose.
*/

/*
Prenons l'exemple d'une classe qui représenterait un compte bancaire, et que l'on appellerait du coup 'BankAccount'.

On pourrait trouveer comme propriétés 'owner' (permettant d'identifier le propriétaire du compte).
et 'balance' (permettant de connaître le montant disponible sur le compte).

Ainsi, lorsque que l'on crée une instance de 'BankAccount' avec un propriétaire et un montant initial en argument, on pourra exploiter par la suite ces propriétés pour afficher leurs valeurs, les utiliser pour des calculs, les modifier, ect...
*/

/** Tirer parti des classes avec des méthodes d'instance **/

/*
Si vous revenez au chapitre sur les classes, nous les avons utilisées pour créer des objets ayant certaines propriétés. 

Maintenant que vous avez commencé à découvrir les fonctions, vous pouvez ajouter des méthodes d'instance à ces classes, pour augmenter leur puissance et leur utilité.
*/

/*
Une méthode d'instance est une fonction faisant partie d'une classe, et qui agit sur une instance de cette classe.

Reprenons notre exemple de  classe 'BankAccount' (compte bancaire) :
*/

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
}

/* 
Vous pouvez ensuite créer une instance de cette classe appelée 'newAccount' (nouveau compte) :
*/

const newAccount = new BankAccount('Thibaut Kosmala', 500)

/* Important :
N'oubliez pas qu'un objet (une instance d'une classe est un objet) est un type par référence, donc vous pouvez toujours apporter des modifications à l'instance de 'newAccount',
La partie constante désigne une REFERENCE à cette instance.
*/

/*
Telle quelle, l'instance n'est pas très utile. Vous pourriez afficher son solde à la console par    newAccount.balance  , mais si on pensait plutôt à ajouter une mise en forme ? Vous pouvez pour cela ajouter une méthode à la classe !
*/

class bankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  showBalance() {
  console.log("Solde: " + this.balance + ' EUR');
  }
}

/*
La nouvelle méthode ci-dessus, déclarée par son nom suivi par  (), utilise le mot clé   this  pour accéder à la propriété   balance  de l'instance, et l'afficher sur la console avec une mise en forme supplémentaire.

Ceci signifie que vous pouvez utiliser la notation dot sur l'instance   newAccount  pour appeler sa méthode   showBalance()  :
*/

const willAccount = new bankAccount('will', 1400)

willAccount.showBalance(); // imprime "Solde: 1400 EUR" dans la console.

/*
Vous pouvez aussi ajouter des méthodes capables de modifier les propriétés de l'instance. 

Dans ce cas, ajoutez les méthodes deposit() (dépôt) et withdraw() (retrait) à la classe, en n'oubliant pas que les deux ont besoin d'un paramètre amount(montant) (parce que vous devez savoir combien déposer ou retirer !) :
*/

class Bankaccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  showOwner() {
    console.log('Propriétaire du compte : ' + this.owner)
  }

  showBalance() {
    console.log('Solde : ' + this.balance + ' EUR.')
  }

  deposit(amount) {
    console.log('Dépôt de ' + amount + ' EUR.')
    this.balance += amount;
    this.showBalance();
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Retrait refusé !')
    } else {
      console.log('Retrait de ' + amount + ' EUR.')
      this.balance -= amount;
      this.showBalance();
    }
  }
}

const ThibautAccount = new Bankaccount('Thibaut', 2000)

ThibautAccount.showOwner();
ThibautAccount.showBalance();
ThibautAccount.deposit(300);
ThibautAccount.withdraw(1300);

/*
La méthode deposit() affiche le montant du dépôt sur la console, ajoute le montant au solde de l'instance, puis appelle la méthode showBalance() de l'instance. Imprimant ainsi le nouveau solde sur la console.
*/
/** Notes
 * Dans le corps d'une classe, le mot clé 'this' fait référence à l'INSTANCE créée de la classe. Dans cet exemple, il fait référence à 'ThibautAccount'.
**/

/*
La méthode withDraw() : 

1. Vérifie si le montant demandé est supérieur au solde actuel.
  
- Si c'est le cas, le retrait est refusé
  
- Sinon, il l'autorise, en soustrayant le montant du solde.

2. Affiche le nouveau solde sur le console.
*/

/** Pratiquez les méthodes instance **/

// Rendez-vous sur la branche P3C2_exo2


/** Découvrir les méthodes statistiques **/

/*
Il existe un type spécial de méthode pouvant être ajoutée à une classe : la méthode STATIQUE.

Elle est différente des méthodes d'instance parce qu'elle n'est PAS liée à une instance particulière d'une classe, mais à la classe elle-même.

Utilisez-la pour créer des METHODES UTILITAIRES (helper en EN) où vous n'aurez pas besoin d'une instance d'une classe pour les utiliser. Vous pourrez vous en servir comme boîte à outils de fonctions que vous utiliserez souvent.
*/

/*
Par exemple, en JS, l'objet MATH contient beauoup de méthodes utiles :
*/
const randomNumber = Math.random() // crée un nombre aléatoire sur l'intervalle [0, 1]

const roundMeDown = Math.floor(495,966) // arrondir vers le bas à l'entier le plus proche, renvoie 495.

/*
Vous n'avez pas besoin de créer par 'new' une instance de l'objet 'Math' pour utiliser ces méthodes, il suffit de les appeler sur l'objet 'Math' global.

Vous pouvez créer vos propres méthodes statiques par le mot clé 'static'.

Observez la classe suivante :
*/

class BePolite {

  static sayHello() {
    console.log('Hello !')
  }

  static sayHelloTo(name) {
    console.log('Hello, ' + name + '!')
  }

  static add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }
}

BePolite.sayHello(); // Imprime Hello
BePolite.sayHelloTo('Thibaut'); // Imprime Hello, thibaut
let sum = BePolite(2,3); // Imprime 5

/*
Vous n'avez pas besoin d'ajouter un constructor à votre classe, car vous n'allez pas l'instancier. Vous avez une méthode qui :

- imprime un message générique.

- Aceepte un argument et l'utilise pour créer un message.

- Renvoie un valeur à partir des arguments que vous lui envoyez.

Toutes ces fonctionnalités pourraient être des FONCTIONS, mais l'avantage d'utiliser des méthodes de classe statiques est par exemple de pouvoir les regrouper par catégorie ou par type.
*/


/*** EN RESUME ***/

/*
Dans ce chapitre, nous nous sommes intéressés à deux types de méthodes de classe :

les METHODES D'INSTANCES, qui agissent sur les instances individuelles d'une classe ;

les METHODES STATIQUES, qui ne s'appuient pas sur une instance d'une classe.
*/