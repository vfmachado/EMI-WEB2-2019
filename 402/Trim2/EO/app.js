//TEMA 02

//SEPARAR O SISTEMA EM DUAS ROTAS - ADMIN E SISTEMA
    //ADMIN - ADD-PRODUTO (GET/POST)
    //SISTEMA - PAGINA INICIAL E 404

//ADICIONAR OS OUTROS ATRIBUTOS A CLASSE PRODUTO
    //IMAGEM

//MELHORAR O EJS PARA MOSTRAR OS OUTROS ATRIBUTOS
    //TESTAR...

//MELHORAR O FORMULARIO DE ADD PRODUTO PARA ADICIONAR
//AS INFORMAÇÕES FALTANTES
    //PRECO, DESCRICAO E A IMAGEM URL

//MAIS UMA PAGINA PERMITINDO FILTRAR OS PRODUTOS POR FAIXA DE PRECO
    //MAIS UM LINK NO MENU NAVEGAÇÃO - BUSCAR
    //DOIS CAMPOS (VALOR MINIMO E MAXIMO)
    //ALTERAR A CLASSE PRODUTO... PARA RETORNAR UM ARRAY
    //SÓ COM OS PRODUTOS QUE SATISFAZEM O FILTRO


/*
TEMA 03
    ESTUDAR COMO FUNCIONAM OS CALLBACKS E CRIAR UM EXEMPLO PEQUENO

    COMENTAR TODAS AS LINHAS DE CÓDIGO =D

    ADICIONAR UM ID PARA OS PRODUTOS

    MODIFICAR O EJS DA LISTA-PRODUTOS PARA DETALHAR UMA PAGINA COM O ID DO PRODUTO
        /DETALHAR/1001
    
    AJUSTAR A ROTA DE DETALHE E BUSCA PARA UMA NOVA ROTA DE PRODUTOS (rotasProduto.js)

    AJUSTAR O DETALHAR PARA MOSTRAR TODOS OS DADOS DO PRODUTO
    

*/

//TEMA AULA 04
/*  
    ATUALIZAR TODO SISTEMA PARA O PADRÃO MVC
        - nao pode ter lógica no app.js
        - nao pode ter lógica em nenhuma rota
        - toda lógica no controller!!!

    PERMITIR ATUALIZAR UM PRODUTO, INFORMANDO NOVO VALOR, IMAGEM, DESCRICAO E PRECO.

    PERMITIR REMOVER UM PRODUTO

    CRIAR UM MODEL PARA CARRINHO DE COMPRAS E UM CONTROLLER
        ADD PRODUTOS
        VER O CARRINHO
        FINALIZAR COMPRA

    

*/

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Produto = require('./models/Produto');

const Carrinho = require('./models/Carrinho');

let meuCarro = new Carrinho();

//ROTAS
const adminRotas = require('./rotas/rotasAdmin');

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {

    console.log(req.query.max);
    let valorParam = req.query.max;
    res.render('lista-produtos', 
        {
            pageTitle: "Página Inicial",
            prods: Produto.filtraPorPreco(0, valorParam)    
        }
    );
});

app.use('/admin', adminRotas);



app.get('/add-no-carrinho/:nomeProd', (req, res) => {

    //idealmente, vou buscar todas as informações deste produto e adicionar no carrinho
    //let produtoQueSeraAdicionado = Produto.buscaProduto(nomeProd);
    
    meuCarro.colocaNoCarrinho(req.params.nomeProd);
    res.write("Item adicionado:" + req.params.nomeProd);
    res.end();
});




//antes do 404
//vou add outras rotas
app.get('/detalhar/:idProd', (req, res) => {

    console.log("Recebi o ID: ", req.params.idProd);

    res.write("Vou detalhar um prod... ID: "
         + req.params.idProd );
    res.end();
});

//bonus
app.get('/noticia/:secao/:id', (req, res) => {
    res.write("Essa e uma noticia da secao de "
     + req.params.secao + " e o ID da noticia eh "
      + req.params.id);
      res.end();
    
});

app.get('*', (req, res) => {
    res.statusCode = 404;
    res.render('404', {pageTitle: "Erro 404"}); 
});

app.listen(3000);


