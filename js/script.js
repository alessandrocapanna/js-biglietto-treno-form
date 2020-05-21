// variabili form
var buttonGenera = document.getElementById('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');

// variabili bigl
var biglNome = document.getElementById('bigl-nome');
var biglOfferta = document.getElementById('bigl-offerta');
var biglCarrozza = document.getElementById('bigl-carrozza');
var biglCpp = document.getElementById('bigl-cpp');
var biglCosto = document.getElementById('bigl-costo');

var formKmValue;
var formEtaValue;

// click genera
buttonGenera.addEventListener('click',
  function(){

    // variabili
    var formKmValue = formKm.value;
    var formEtaValue = formEta.value;
    var offerta;

    //calcolo prezzo
    var prezzo = formKmValue * 0.21;

    //calcolo offerta
    if (formEtaValue = 'minorenne') {
      prezzo = prezzo - (prezzo * 0.2);
    } else if (formEtaValue = 'over') {
      prezzo = prezzo - (prezzo * 0.4);
    }

    biglNome.innerHTML = formNome.value;
    biglCosto.innerHTML = prezzo.toFixed(2) + ' euro';

  }
);

// click annulla
buttonAnnulla.addEventListener('click',
  function(){
    biglNome.innerHTML = '';
    biglOfferta.innerHTML = '';
    biglCosto.innerHTML = '';
  }
);
