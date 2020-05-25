// INIZIO ESERCIZIO MAIL
// Creo un array con la lista delle mail delle persone autorizzate ad accedere
var listaMail = ['giuseppe@gmail.com' , 'marco@gmail.com' , 'mauro@gmail.com' , 'paolo@gmail.com' , 'gianni@gmail.com' , 'andrea@gmail.com' , 'luca@gmail.com' , 'simone@gmail.com' , 'giulio@gmail.com'];

// Inizializzo le variabili ch mi occorrono per la funzione click
var mail =  document.getElementById('mail');
var accedi = document.getElementById('accedi');
var messaggio = document.getElementById('messaggio');
var autorizzato = false;
messaggio.innerHTML = 'ACCESSO NEGATO';

accedi.addEventListener('click',
  function () {
    for (i = 0; i < listaMail.length; i++) {
      if (listaMail[i] === mail) {
        autorizzato = true;
      }
    }
    if (autorizzato = true) {
      messaggio.innerHTML = 'ACCESSO AUTORIZZATO';
    }
  }
);

// FINE ESERCIZIO MAIL

// INIZIO ESERCIZIO DADI
// Inizializzo le variabili per l'assegnazione di valori casuali
var randomUser = document.getElementById('random-user');
var randomComputer = document.getElementById('random-pc');
var generaButton = document.getElementById('genera');

generaButton.addEventListener('click',
  function() {
    numeroRandomUser = Math.floor(Math.random() * 6) + 1;
    numeroRandomComputer = Math.floor(Math.random() * 6) + 1;

    randomUser.innerHTML = numeroRandomUser.value;
    randomComputer.innerHTML = numeroRandomComputer.value;
  }
);
// FINE ESERCIZIO DADI
