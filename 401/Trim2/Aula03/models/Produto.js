
const path = require('path'); //construção de caminhos
const fs = require('fs'); //file system - manipular arquivos locais

let produtos = [];


module.exports = class Produto {

    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = "Um produto qualquer.. alterado";
    }

    salvar() {
        //adicionar o produto no array
        console.log(this);

        //carregar todos os dados do arquivo
        Produto.getProdutos();

        produtos.push(this); //this contem os dados do produto

        //salvando em um arquivo
        //let caminho = "./dados/info.txt";
        let caminhoEscrita = path.join(__dirname, "..", "dados", "info.txt");
        let informacoes = JSON.stringify(produtos);
        fs.writeFileSync(caminhoEscrita, informacoes);
    }

    //pertence a classe e nao ao objeto
    static getProdutos() {
        let caminhoLeitura = path.join(__dirname, "..", "dados", "info.txt");
        let conteudoArquivo = fs.readFileSync(caminhoLeitura);
        produtos = JSON.parse(conteudoArquivo);
        return produtos;
    }
};