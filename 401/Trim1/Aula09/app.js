
const express = require('express');

const bodyparser = require('body-parser');

const app = express();

//SETA O EJS COMO ENGRENAGEM DE VISUALIZAÇÃO
app.set('view engine', 'ejs');

//E INFORMA AO EJS ONDE ESTARÃO AS MINHAS VIEWS...
// NO CASO, NA PASTA VIEWS
app.set('views', './views');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//use de maneira estática a seguinte pasta
app.use(express.static('./publico/'));

//importar meu módulo
const moduloRotasProfessor = 
    require('./rotas/rotasProfessor');

//dizer para o app utilizar este módulo
app.use(moduloRotasProfessor);

app.listen(3000);
console.log("Escutando na 3000");
