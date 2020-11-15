/*
icone:
<i class="fas fa-cat" style="color:......"></i>
 <i class="fas fa-ribbon" style="color:.....; filter: opacity(....);"> </i>
 nome gatto
*/

//abbiamo dei gattini
const cats = [
    {
        name: 'Adam',
        age: 0.3,
        color: '#00ffff',
        gender: 'male'
    },
    {
        name: 'Emily',
        age: 0.8,
        color: '#f700ff',
        gender: 'female'
    },
    {
        name: 'Willoby',
        age: 1.3,
        color: '#ff6600',
        gender: 'male'
    },
    {
        name: 'Poppy',
        age: 0.2,
        color: '#00ff00',
        gender: 'female'
    },
];

// mi salvo la selezione dell'elemento nel DOM in cui inserirò i gattini
const container = document.getElementById('container');

// stampiamo tutti i gattini in fila nel 'container' [forEach + Tlit]
cats.forEach((item, i) => {
  let contenuto = container.innerHTML;
  // console.log(contenuto);
  // stampa contenuto e lo sovrascrive ad ogni ciclo con un elemento in più
  container.innerHTML = ` ${contenuto}
  <div>${item.name}  <i class="fas fa-cat" style="color: ${item.color}"> </i> </div>`
});

//mettiamo un fiocco colorato ad ogni gattino,
//base rosa femmine
//base blue maschi,
//il fiocco deve essere più chiaro se più giovane più scuro se più vecchio
//creaiamo solo dati ma output facciamo dopo divisi
//colori base
const pink = '#ff00e6';
const blue = '#0084ff';
//usiamo map per creare nuovo array con aggiunta prop ribbon {color, opacity} [..rest/destructuring opTernario]
// opacity sarà in base all'age [age*100]
var catsWithRibbons = cats.map((item) => {
  let element = {...item, ribbon: {
    color: (item.gender === 'female' ? pink : blue),
    opacity:  (item.age * 100)
    }
  };
  return element;
});
console.log(catsWithRibbons);


// dividiamoli per sesso [2 nuovi array con filter]
const femaleCats = catsWithRibbons.filter((item,i) => item.gender === 'female');
const maleCats = catsWithRibbons.filter((item,i) => item.gender === 'male');
//console.log(femaleCats, maleCats);

// stampo i due nuovi array sui rispettivi container id="female" & "male"
const femaleContainer = document.getElementById('female')
const maleContainer = document.getElementById('male')
//console.log(femaleContainer, maleContainer); stampa degli elementi del DOM selezionati

// stampa i gattini femmina
femaleCats.forEach((item, i) => {
  let contenuto = femaleContainer.innerHTML;
  // console.log(contenuto);
  // stampa contenuto e lo sovrascrive ad ogni ciclo con un elemento in più
  femaleContainer.innerHTML = ` ${contenuto}
  <div>
    ${item.name}  <i class="fas fa-ribbon" style="color: ${item.ribbon.color}; filter: opacity( ${item.ribbon.opacity}%);"> </i>
    <i class="fas fa-cat" style="color: ${item.color}"> </i>
  </div> `
});

// stampa i gattini maschio
maleCats.forEach((item, i) => {
  let contenuto = maleContainer.innerHTML;
  // console.log(contenuto);
  // stampa contenuto e lo sovrascrive ad ogni ciclo con un elemento in più
  maleContainer.innerHTML = ` ${contenuto}
  <div>
    ${item.name}  <i class="fas fa-ribbon" style="color: ${item.ribbon.color}; filter: opacity( ${item.ribbon.opacity}%);"> </i>
    <i class="fas fa-cat" style="color: ${item.color}"> </i>
  </div> `
});

//creiamo una versione [nuovo arr] con prima femmine poi maschi [spread-rest]
const orderCats = [...femaleCats, ...maleCats];
console.log(orderCats);

// ne facciamo output in 'container-new'
const containerNew = document.getElementById('container-new');
// stampiamo tutti i gattini in fila
orderCats.forEach((item) => {
    let contenuto = containerNew.innerHTML;

    containerNew.innerHTML = ` ${contenuto}
    <div>
      <i class="fas fa-cat" style="color:${item.color}"></i>
      <i class="fas fa-ribbon" style="color:${item.ribbon.color}; filter: opacity(${item.ribbon.opacity}%);"> </i>
      ${item.name}
    </div>
  `
});


//altro array con obj di soli ribbon and name [destructuring in map]
const arrayRibName = orderCats.map((item) => {
  let {name: myName, ribbon} = item;
  let objRibName = {
    myName,
    ribbon
  }
  return objRibName;
})
console.log(arrayRibName);

const containerLast = document.getElementById('container-prova');
// stampiamo tutti i gattini in fila
arrayRibName.forEach((item) => {
    let contenuto = containerLast.innerHTML;

    containerLast.innerHTML = ` ${contenuto}
    <div>
      <i class="fas fa-ribbon" style="color:${item.ribbon.color}; filter: opacity(${item.ribbon.opacity}%);"> </i>
      ${item.myName}
    </div>
  `
});



// var elementoDom = `<i class="fas fa-ribbon" style="color:${item.ribbon.color}; filter: opacity(${item.ribbon.opacity}%);"> </i>`;
var provaFunzione = stampaGatti('funzione', catsWithRibbons);



//funzione per la stampa sul documento
function stampaGatti(id, arrayOriginale, dom) {
  var containerCreato = document.getElementById(id);
    arrayOriginale.forEach((item, i) => {
      let contenuto = containerCreato.innerHTML;
      containerCreato.innerHTML = ` ${contenuto}
        <div>
          ${item.name} <i class="fas fa-ribbon" style="color:${item.ribbon.color}; filter: opacity(${item.ribbon.opacity}%);"> </i>
        </div>
      `
    });
  return containerCreato;
}
