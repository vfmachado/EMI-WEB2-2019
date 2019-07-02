
const path = require('path'); //construcao de caminho
const fs = require('fs'); //file system

let produtos = [];

module.exports = class Produto {

    constructor(nome) {
        this.nome = nome;
        this.preco = 1000;
        this.descricao = "Produto sem descricao";
    }

    salvar() {
        //carregar os produtos
        Produto.buscarTodos();

        produtos.push(this);
        console.log(produtos);

        let caminho = path.join(
            __dirname, "..", "dados", "info.txt");
        let informacoes = JSON.stringify(produtos);
        fs.writeFileSync(caminho, informacoes);

    }


    static buscarTodos() {

        let caminho = path.join(
            __dirname, "..", "dados", "info.txt");
        
        let conteudoArquivo = fs.readFileSync(caminho);

        produtos = JSON.parse(conteudoArquivo);

        return produtos;
    }


}