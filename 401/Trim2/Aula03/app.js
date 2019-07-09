//TEMA AULA 02

//ADICIONAR OS OUTROS ATRIBUTOS A CLASSE PRODUTO
    //IMAGEM - USUARIO COLOCA A URL DA IMAGEM!

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

//TEMA AULA 03
/*
    ADICIONAR UM ID PARA OS PRODUTOS

    MODIFICAR O EJS DA LISTA-PRODUTOS PARA DETALHAR UMA PAGINA COM O ID DO PRODUTO
        /DETALHAR/1001
    
    AJUSTAR A ROTA DE DETALHE E BUSCA PARA UMA ROTA DE PRODUTOS

    AJUSTAR O DETALHAR PARA MOSTRAR TODOS OS DADOS DO PRODUTO
    
*/

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const rotasAdmin = require('./rotas/rotasAdmin');
const rotasSistema = require('./rotas/rotasSistema');

app.get('/detalhar/produtoPrincipal', (req, res) => {
    res.render('detalhe', {
        pageTitle: "DETALHE DE PROD", 
        prod : {title : "Super produto", descricao : "Campeao de vendas"}
      }
);
});

app.get('/detalhar/:idProd', (req, res) => {
    
    console.log("O produto " + req.params.idProd + " foi requisitado");
    
    res.render('detalhe', {
                            pageTitle: "DETALHE DE PROD", 
                            prod : {title : "OI", descricao : "TCHAU"}
                          }
              );
});




app.use('/admin', rotasAdmin);
app.use(rotasSistema);

//pagina inicial e 404 para rotasSistema



app.listen(3000);


