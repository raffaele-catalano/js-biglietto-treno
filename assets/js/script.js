const firstName = prompt('Inserisci il tuo Nome', 'Nome');
const surname = prompt('Inserisci il tuo Cognome', 'Cognome');
const age = prompt('Inserisci la tua età', '33');
const distance = prompt('Inserisci la distanza che intendi percorrere in Km', '30');
    console.log(firstName, surname, age, distance);

document.getElementById('anagraphic').innerHTML = firstName + " " + surname;
document.getElementById('age').innerHTML = "Età:" + " " + age
document.getElementById('distance_km').innerHTML = "Distanza:" + " " + distance + " " + "Km" 

let prezzoFinale = distance * 0.21;

if (age < 18) {
    prezzoFinale = prezzoFinale * 0.8;
} else if (age >= 65) {
    prezzoFinale = prezzoFinale * 0.6;
}

console.warn(prezzoFinale);

document.getElementById('final_price').innerHTML = "Prezzo del ticket:" + " " + "€" + " " + prezzoFinale.toFixed(2);

// document.getElementById('final-price').innerHTML = prezzoFinale.toFixed(2);