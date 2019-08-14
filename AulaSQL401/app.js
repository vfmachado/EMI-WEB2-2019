//TEMA
/*
    CRIAR ROTA POST PARA ADD REMEDIO
    E SALVAR NO BANCO

    CRIAR UM SQL COM INSERT INTO

*/

/*
ALTER USER 'root'@'localhost' 
	IDENTIFIED WITH mysql_native_password BY 'ifrs';
*/

console.log("OK... iniciando");

const bodyparser = require('body-parser');

const db = require('./database');

//CONFIGURAR O EXPRESS E UMA ROTA GET PARA /verRemedios

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyparser.urlencoded({ extended: false }));

const rotasRemedio = require('./rotas/rotasRemedios');
app.use('/teste/', rotasRemedio);

app.listen(3000);

console.log("OK... escutando na porta 3000");