class ItemCatalogo {
    
    constructor(nome, tipo, genero) {
        this.nome = nome;
        this.tipo = tipo;
        this.genero = genero;
    }

    toString() {
        return `\nNome: ${this.nome}\n\tTipo: ${this.tipo}\n\tGenero: ${this.genero}`;
    }
}

let catalogo = [];

let item = new ItemCatalogo("A Star is Born", "Filme", "Drama");
console.log(item.toString())

catalogo.push(item);

item = new ItemCatalogo("Black Panther", "Filme", "Ação");
catalogo.push(item);

item = new ItemCatalogo("GoT", "Série", "Fantasia");
catalogo.push(item);

item = new ItemCatalogo("Como treinar seu dragão", "Filme", "Desenho");
catalogo.push(item);

item = new ItemCatalogo("Ricky and Morty", "Série", "Desenho");
catalogo.push(item);

console.log("\nCatalogo do Vini:\n")
catalogo.forEach(
    //função com um parâmetro
    //function(item) {}
    item => {console.log(item.toString())}

); 

const filtroGenero = (item, generoBuscado) => {
    if (item.genero == generoBuscado) {
        return true;
    }
    return false;
}

const filtrados = catalogo.filter(
    item => {
        return filtroGenero(item, "Desenho");
    }
);
//console.log("Filtro: " + filtroGenero(item, "Drama"));

//foreach - passa por cada um dos elementos
filtrados.forEach(item => {console.log("Filtro Desenho: \n" + item.toString())});