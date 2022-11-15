/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//faccio scegliere all'user pari o dispari
const userChoice = prompt("Scegli pari o dispari:");
console.log("Hai scelto " +  userChoice);

// faccio inserire all'user un numero da 1 a 5
const userNumber = parseInt(prompt("Iserisci ora un numero da 1 a 5"));
console.log("Il tuo numero è " + userNumber);

// richiamo il numero random del pc generato con la funzione numPcRandom
const pcNumber = numPcRandom();
console.log("Il numero del pc è " + pcNumber);

// sommo il numero inserito dall'user e quello generato per il pc
const sommaInputNumber = userNumber + pcNumber;
console.log("La somma dei due numeri è " + sommaInputNumber);

// creo la costante in cui richiamo la funzione pariODispari per verificare se la somma dei due numeri è pari o dispari
const sommaPD = pariODispari(sommaInputNumber);
console.log(sommaPD);

// genero l'output per dire all'user se ha vinto o perso
if (sommaInputNumber % 2 == 0 && userChoice === "pari") {
    console.log("HAI VINTO!!!");
} else {
    console.log("HAI PERSO!!!");
}

// FUNZIONI
// genero un numero random per il pc usando una funzione
function numPcRandom () {
    return Math.floor(Math.random() * 5 ) + 1;
}

// creo una funzione per capire se la somma dei due numeri è pari o dispari
function pariODispari (somma) {
    // creo una costante per richiamare l'argomento della function
    let c = somma;

    if (c % 2 == 0) {
        return "La somma dei numeri è pari";
    } else {
        return "La somma dei numeri è dispari"
    }
}