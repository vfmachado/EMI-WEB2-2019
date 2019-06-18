class Filme {

    constructor(nome, genero) {
        this.nome = nome;
        this.genero = genero;
    }

    descricao() {
        return `Nome: ${this.nome}\nGenero: ${this.genero}`;
    }
}

//variável f = nova instância da classe
//passando por parâmetro os valores para o método 
//construtor
let f = new Filme("A star is born", "Romance");

//array de filmes...
let filmes = [];

//add o filme f em filmes
filmes.push(f);

f = new Filme("Como treinar seu dragão 3", "Animação");
filmes.push(f);

f = new Filme("Coraline", "Animação");
filmes.push(f);

console.log(filmes);

filmes.forEach( s  => {console.log(s.descricao())})


let filmeFiltrados = filmes.filter(

    filme => {
        return filme.genero == "Animação";
    }

);

console.log("\n\nFiltro Animação:\n");
filmeFiltrados.forEach( s  => {console.log(s.descricao())})