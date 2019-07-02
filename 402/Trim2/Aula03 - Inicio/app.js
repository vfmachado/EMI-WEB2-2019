//TEMA

//SEPARAR O SISTEMA EM DUAS ROTAS - ADMIN E SISTEMA
    //ADMIN - ADD-PRODUTO (GET/POST)
    //SISTEMA - PAGINA INICIAL E 404

//ADICIONAR OS OUTROS ATRIBUTOS A CLASSE PRODUTO
    //IMAGEM

//MELHORAR O EJS PARA MOSTRAR OS OUTROS ATRIBUTOS
    //TESTAR...

//MELHORAR O FORMULARIO DE ADD PRODUTO PARA ADICIONAR
//AS INFORMAÇÕES FALTANTES
    //PRECO, DESCRICAO E A IMAGEM

//MAIS UMA PAGINA PERMITINDO FILTRAR OS PRODUTOS POR FAIXA DE PRECO
    //MAIS UM LINK NO MENU NAVEGAÇÃO - BUSCAR
    //DOIS CAMPOS (VALOR MINIMO E MAXIMO)
    //ALTERAR A CLASSE PRODUTO... PARA RETORNAR UM ARRAY
    //SÓ COM OS PRODUTOS QUE SATISFAZEM O FILTRO


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Produto = require('./models/Produto');

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('lista-produtos', 
        {
            pageTitle: "Página Inicial",
            prods: Produto.buscarTodos()    
        }
    );
});

app.get('/admin/add-product', (req, res) => {
    res.render('add-produto', 
        {
            pageTitle: "Admin - Add Prod"
            
        }
    );
});


app.post('/admin/add-product', (req, res) => {

    //add produto
    let novoProduto = new Produto(req.body.title);
    novoProduto.salvar();

   // res.write("Produto adicionado " + req.body.title);
   // res.end();
   res.redirect('/');
});


app.get('*', (req, res) => {
    res.statusCode = 404;
    res.render('404', {pageTitle: "Erro 404"}); 
});

app.listen(3000);


