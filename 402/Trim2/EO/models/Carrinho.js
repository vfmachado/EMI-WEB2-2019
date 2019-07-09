
/*
    o carrinho será um model pq representará um carrinho de compras da vida real

        ** no super, podemos colocar e retirar coisas do carrinho
        tambem podemos olhar para o carrinho e ver as coisas que foram adicionadas
        mas essas "coisas" só serão realmente nossa a partir do momento que eu pagar.


*/

module.exports = class Carrinho {

    //momento que criamos o item (new)
    constructor() {
        this.produtos = []; //lista de produtos
    }

    colocaNoCarrinho(prod) {
        this.produtos.push(prod);

        console.log(this.produtos);
    }

}

