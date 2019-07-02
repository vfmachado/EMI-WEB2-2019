
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

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const rotasAdmin = require('./rotas/rotasAdmin');
const rotasSistema = require('./rotas/rotasSistema');

app.use('/admin', rotasAdmin);
app.use(rotasSistema);

//pagina inicial e 404 para rotasSistema



app.listen(3000);


