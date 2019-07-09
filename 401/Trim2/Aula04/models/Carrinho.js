const Produto = require('./Produto')
let listaProdutos = [];

module.exports = class Carrinho {

    constructor() {
    }

    add(produto) {
        listaProdutos.add(produto);
    }

    buscaProdutos() {
        return listaProdutos;
    }

    finalizar() {
        listaProdutos = [];
        //retornar o preco total
    }
}
