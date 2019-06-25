
const produtos = [];

module.exports = class Produto {

    constructor(nome) {
        this.nome = nome;
        this.preco = 1000;
        this.descricao = "Produto sem descricao";
    }

    salvar() {
        produtos.push(this);
        console.log(produtos);
    }


    static buscarTodos() {
        return produtos;
    }


}