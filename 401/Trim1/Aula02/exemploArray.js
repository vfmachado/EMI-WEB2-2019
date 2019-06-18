
const seriesDavi = [0, 
        "La Casa de Papel", 
        "Black Mirror", 
        "Dark"];

const seriesChristian = [
    "Dragon Ball", "Ben10", "A lenda Aang"
];

//JUNTA DOIS ARRAYS E RETORNA UM ARRAY NOVO
const series = seriesDavi.concat(seriesChristian);

let tipo = typeof(series[1]) == 'string';
console.log(tipo);

//EVERY - TESTA ALGO EM TODOS OS ELEMENTOS
let teste = series.every( //passando por parametro uma função do tipo flecha
    s => {return typeof(s) == 'string'} //função que retorna V/F
);  //verificar se o tipo de cada um dos elemntos é String
console.log(teste);

for (let nome of series) {
    console.log("O nome da série e': " + nome);
}


//para cada um dos elementos executa a função dentro
series.forEach( s => {console.log("Com foreach: " + s)});

//push - adiciona um elemento array
series.push("GoT");
series.push("Westworld");

series.sort();

console.log(series);    