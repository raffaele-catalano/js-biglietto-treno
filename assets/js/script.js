const firstName = prompt('Inserisci il tuo Nome', 'Nome');
const surname = prompt('Inserisci il tuo Cognome', 'Cognome');
const age = prompt('Inserisci la tua età', '33');
const distance = prompt('Inserisci la distanza che intendi percorrere in Km', '30');
    console.log(firstName, surname, age, distance);

let distanceCalc = distance * 0.21;
    console.log(distanceCalc);
