// INIZIO ESERCIZIO MAIL
// Creo un array con la lista delle mail delle persone autorizzate ad accedere
var listaMail = ['giuseppe@gmail.com' , 'marco@gmail.com' , 'mauro@gmail.com' , 'paolo@gmail.com' , 'gianni@gmail.com' , 'andrea@gmail.com' , 'luca@gmail.com' , 'simone@gmail.com' , 'giulio@gmail.com'];

// Inizializzo le variabili ch mi occorrono per la funzione click
var accedi = document.getElementById('accedi');
var messaggio = document.getElementById('messaggio');
var autorizzato = false;

accedi.addEventListener('click',
  function () {
    var mail =  document.getElementById('mail');
    for (i = 0; i < listaMail.length; i++) {
      if (listaMail[i] === mail.value) {
        autorizzato = true;
      }
    }

    if (autorizzato === true) {
      messaggio.innerHTML = 'ACCESSO AUTORIZZATO';
    } else {
      messaggio.innerHTML = 'ACCESSO NEGATO';
    }
  }
);
// FINE ESERCIZIO MAIL

// INIZIO ESERCIZIO DADI
// Inizializzo le variabili per l'assegnazione di valori casuali

var generaButton = document.getElementById('genera');

generaButton.addEventListener('click',
  function() {
  var randomUser = document.getElementById('random-user');
  var randomComputer = document.getElementById('random-pc');
  var numeroRandomUser = Math.ceil(Math.random() * 6) + 1;
  var numeroRandomComputer = Math.ceil(Math.random() * 6) + 1;

    randomUser.innerHTML = numeroRandomUser.value;
    randomComputer.innerHTML = numeroRandomComputer.value;
  }
);
// FINE ESERCIZIO DADI
