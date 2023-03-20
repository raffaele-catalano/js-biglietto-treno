const firstName = prompt('Inserisci il tuo Nome', 'Nome');
const surname = prompt('Inserisci il tuo Cognome', 'Cognome');
const age = prompt('Inserisci la tua età', '33');
const distance = prompt('Inserisci la distanza che intendi percorrere in Km', '30');
    console.log(firstName, surname, age, distance);

let distanceCalc = distance * 0.21;
    console.log(distanceCalc);

if (age < 18) {
    console.log('sconto 20%');
} else if (age > 65) {
    console.log('sconto 40%');
} else {
    console.log('prezzo pieno');
}
