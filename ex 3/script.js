// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// STEP”:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
let points = 0;
let fouls = 0;

const teams =
[
  {
    name : "Milan",
    points,
    fouls
  },
  {
    name : "Inter",
    points,
    fouls : 0
  },
  {
    name : "Juventus",
    points,
    fouls
  },
  {
    name : "Roma",
    points,
    fouls
  },
  {
    name : "Napoli",
    points,
    fouls
  }
];

teams.forEach((item) => {
  //console.log(item);
  item.points = numRandom();
  item.fouls = numRandom();
});
console.log(teams);

// funzione per generare un numero random
function numRandom() {
  return Math.floor(Math.random() * 100) + 1;
}
