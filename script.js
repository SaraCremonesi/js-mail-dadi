// INIZIO ESERCIZIO MAIL
// Creo un array con la lista delle mail delle persone autorizzate ad accedere
var listaMail = ['giuseppe@gmail.com' , 'marco@gmail.com' , 'mauro@gmail.com' , 'paolo@gmail.com' , 'gianni@gmail.com' , 'andrea@gmail.com' , 'luca@gmail.com' , 'simone@gmail.com' , 'giulio@gmail.com'];

// Inizializzo le variabili ch mi occorrono per la funzione click
var accedi = document.getElementById('accedi');

accedi.addEventListener('click',
  function () {
    // Inizializzo le variabili ch mi occorrono per il ciclo for
    var messaggio = document.getElementById('messaggio');
    var autorizzato = false;
    var mail =  document.getElementById('mail');

    // Inizio il ciclo for
    for (i = 0; i < listaMail.length; i++) {
      if (listaMail[i] === mail.value) {
        autorizzato = true;
      }
    }

    // Stampo il messaggio di autorizzazione o negazione
    if (autorizzato === true) {
      messaggio.innerHTML = 'ACCESSO AUTORIZZATO';
    } else {
      messaggio.innerHTML = 'ACCESSO NEGATO';
    }
  }
);
// FINE ESERCIZIO MAIL
