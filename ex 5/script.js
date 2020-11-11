// dato questo array di obj iniziale:
//Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array) una nuova proprietà position che contiene una lettera casuale.
//non dobbiamo modificare l’array iniziale

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'}
];

// const newArray = [...arrayObj];

console.log(arrayObj);

function cloneIt(){
  const newArray = [...arrayObj];
  arrayObj.forEach((item) => {
    item.assign(newArray).position = getRandomString(1);
  });
  return newArray;
}
const arrayClone = cloneIt();
console.log(arrayClone);
// newArray.forEach((item) => {
//   item.position = getRandomString(1);
// });










// FUNZIONE PER LETTERA RANDOM
function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
