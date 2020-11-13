//Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// variabili utili
var input1 = parseInt(prompt("numero da 0 a 6")), input2 = parseInt(prompt("numero da 0 a 6"));
const newArray = [];
// prendo la parte dell'array iniziale che mi serve e la pusho nel nuovo array
newArray.push(...myArray.slice(input1,input2));

// stampa con template literal strings
console.log(`la lista era: ${myArray}. Tu hai selezionato questi numeri: ${input1} & ${input2} ed ora la lista è:  ${newArray}`);




// versione con filter
/*
const nuovoArray = myArray.filter((element, index) => {
  return index >= input1 && index <= input2;
})
console.log(nuovoArray);
*/
