// dato questo array di obj iniziale:
//Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array) una nuova proprietà position che contiene una lettera casuale.
//non dobbiamo modificare l’array iniziale

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'}
];
console.log(arrayObj);


//  VERSIONE con il map()
// const newArray = arrayObj.map((element) => {
//   //console.log(element);
//   let item = {...element, position: getRandomString(1)};
//   //console.log(item);
//   return item;
// });
//console.log(newArray);

//  VERSIONE BREVE
// const newArray = arrayObj.map(elemento => ({ ...elemento, position: getRandomString(1) }))
// console.log(newArray);


// VERSIONE CON IL forEach()
var arrayCompleto = [];
const newArray2 = arrayObj.forEach((element, i) => {
  // console.log(element);
  var x = {...element, position: getRandomString(1)};
  // console.log(x);
  arrayCompleto.push(x);
});
console.log(arrayCompleto);


/*  NON GUARDARE, PROVE PERSONALI PER COMPRENDERE MEGLIO :D :D

var array = [{numero : 1},{numero : 2}, 'asd', 3 , 4];
var nuovoArray = array.map((element, index, array) => {
  // console.log(element);
  // let a = element;
  if (typeof(element) === 'object' && element !== null) {
    var item = {...element, proprieta: 5};
    return item;
  }
  return element;
});
console.log(nuovoArray);        <----- FINE ESPERIMENTI(MIX OBJ, STRINGHE E NUMERI IN ARRAY)

*/












// FUNZIONE PER LETTERA RANDOM
function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
