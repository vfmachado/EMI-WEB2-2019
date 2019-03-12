
const series = [
    "AGoT",
    "Black Mirror",
    "Hannibal",
    "AHTGAWM"
];

const seriesVini = [
    "AWestworld",
    "La casa de papel"
];

//push adiciona um elemento
series.push("Ricky and Morty");

//método concat - junta dois arrays e retorna 1 com todos os valores
const todasSeries = series.concat(seriesVini);

//método em JS que verifica o tipo de uma variável
let tipo = typeof(todasSeries[0]);
console.log(tipo);

//cria variavel test
let test = todasSeries.every( //array todasSeries e o método every
    //faz um teste para cada um dos itens do array
    item => {
        return typeof(item) == "string"; //comparando o tipo do elemento com string
    }
);

const meuTeste = function(nome) {
    if (nome.startsWith('A')) {
        return true;
    }
    return false;
}

console.log(todasSeries.every(meuTeste));


console.log("Todos são do tipo string: " + test);

for (let nome of todasSeries) {
    console.log("Serie: " + nome + " Tipo: " + typeof(nome));
}


const filtrados = todasSeries.filter(meuTeste);
for (let nome of filtrados) {
    console.log("Serie com filtro: " + nome);
}