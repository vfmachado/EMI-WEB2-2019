//TEMA ATÉ O DIA 14/08
/*
    Adicionar a template engine EJS
    Criar uma página para mostrar todas as séries
    Enviar o resultado do banco para esse template
        res.render(template, series : result[0])
    Separar isto em uma rota!

    3 stars = Colocar no padrão MVC
*/


const express = require('express');
const db = require('./database');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: false }));

const rotaParaSeries = require('./rotas/rotaSeries');
app.use(rotaParaSeries);

app.get('/', (chegou, vaisair) => {
    let query = "SELECT * FROM series";
    db.execute(query)
        .then(resultadoDoBanco => {
            vaisair.write("Deu tudo certo... " + JSON.stringify(resultadoDoBanco[0]));
            vaisair.end();
        })
        //caso algum erro aconteça ... executaremos o catch
        .catch(erro => {
            vaisair.write(JSON.stringify(erro));
            vaisair.end();
        });

});

app.listen(3000);
/*


db.execute("SELECT * FROM series")
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    });

console.log("Ok.. terminando");

*/