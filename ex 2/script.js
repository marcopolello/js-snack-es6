// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var arrayBici =
[
  {
    name : 'Scott',
    weight : 10
  },
  {
    name : 'Trek',
    weight : 7
  },
  {
    name : 'Kona',
    weight : 8
  },
  {
    name : 'Marin',
    weight : 7
  },
  {
    name : 'Merida',
    weight : 9
  },
  {
    name : 'Bianchi',
    weight : 11
  }
];
var leggera2 = arrayBici[0];
var leggera = arrayBici[0]; //elemento di comparazione
// console.log(leggera); --> primo elemento dell'array
arrayBici.forEach((element) => {
  console.log(element); // elemento rappresenta il singolo oggetto
  if (leggera.weight > element.weight) {
    leggera = element;
  } else if (leggera.weight == element.weight) {

    leggera2 = element;
  }
});

// aggiunte ulteriori condizioni nel caso ci siano 2 bici con lo stesso peso
if (leggera2.weight == leggera.weight){
  console.log("le bici più leggere sono :", leggera, leggera2);
} else{
  console.log("la bici più leggera è: ", leggera);
}
