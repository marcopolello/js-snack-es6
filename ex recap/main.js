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
  <div>${item.name} <i class="fas fa-cat" style="color: ${item.color}"></i> </div>`
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
