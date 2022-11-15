/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Dare output relativo.*/

// creo il prompt per far inserire all'user una parola
const wordUser = prompt("inserisci una parola");
console.log(wordUser);

// richiamo la funzione creata
const output = wordPalindroma(wordUser);
console.log(output);

// creo la funzione per capire se la parola inserita dall'user è palindroma
function wordPalindroma(word) {
    //creo la costante per richiamare l'argomento della funzione
    let inputWord = word;

    // divido i caratteri della parola con split con cui creo un array
    let characters = inputWord.split('');//.split divide gli elementi o caratteri di una stringa creando un array composto da quegli elementi o caratteri
    console.log(characters);

    // inverto l'array generato con split
    let revertCharacters = characters.reverse();// reverse inverte l'array ovvero il primo elemento dell'array diventa l'ultimo e viceversa
    console.log(revertCharacters);

    // genero la parola invertita utilizzando l'array invertito
    revertWord = revertCharacters.join(''); // crea o restituisce una stringa utilizzando gli elementi di una array, c'è anche la possibilità di inserire un dividendo nelle '' ad esempio '-'
    console.log(revertWord);

    // confronto le due parole per vedere se sono uguali
    if (word == revertWord) {
        return "Parola palindroma";
    }else {
        return "Parola non palindroma;"
    }
}