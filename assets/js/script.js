const firstName = prompt('Inserisci il tuo Nome', 'Nome');
const surname = prompt('Inserisci il tuo Cognome', 'Cognome');
const age = prompt('Inserisci la tua età', '33');
const distance = prompt('Inserisci la distanza che intendi percorrere in Km', '30');

let finalPrice = distance * 0.21;

if (age < 18) {
    finalPrice = finalPrice * 0.8;
} else if (age > 65) {
    finalPrice = finalPrice * 0.6;
}

document.getElementById('final-price').innerText = finalPrice.toFixed(2);