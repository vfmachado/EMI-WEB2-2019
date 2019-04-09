
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

//express, por favor, utilize o bodyparser
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.post('/dados', (req, res) => {

    console.log(req.body);
    console.log("OK...")
    res.write("Dados recebidos.\n NOME: "
     + req.body.nome + "\nIdade: " + req.body.idade);
    res.end();
})

app.use('/', (req, res) => {
    res.write(`<html>
    <head>
    </head>

    <body>
        <h2>Dados do usuario</h2>
        <form action="/dados" method="POST">
            <p>Nome: </p><input type="text" name="nome"/>
            <p>Idade: </p><input type="number" name="idade"/>
            <br>
            <input type="submit" value="Vaiii"/>
        </form>
    </body>
    </html>`);
    res.end();
});



app.listen(3000);