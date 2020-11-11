// Creare un oggetto palla che abbia le seguenti proprietà.
// nome = palla
// peso = 10
// - dare la possibilità attraverso un prompt di modificare il peso della palla
let weight = 10 + "kg";
console.log(weight);
var constantObject = {
  name : 'palla',
  peso : weight // sarà sempre 10kg
}
console.log(constantObject);
weight = parseInt(prompt("quanto peso la palla?"));
console.log(weight); //assumerà il valore dato dal prompt utente
constantObject.peso = weight + "kg"; //gli conferisco il nuovo valore
console.log(constantObject);
