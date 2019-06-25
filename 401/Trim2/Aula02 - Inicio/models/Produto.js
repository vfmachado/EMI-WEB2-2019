
const produtos = [];


module.exports = class Produto {

    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = "";
    }

    salvar() {
        //adicionar o produto no array
        console.log(this);
        produtos.push(this); //this contem os dados do produto
    }

    //pertence a classe e nao ao objeto
    static getProdutos() {
        //retornar todos
        return produtos;
    }
};