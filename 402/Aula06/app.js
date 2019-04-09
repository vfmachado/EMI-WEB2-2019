
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get('/ok', (req, res) => {
    res.write("OK com express");
    res.end();
});

//requisição POST para a url /cadastrar
app.post('/cadastrar', (req, res) =>{
    console.log(req.body);
    res.write("Dado recebido");
    res.end();
});

app.get('/', (req, res) => {

    res.write(`
        <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h2>Lista de Presença</h2>
            <form action="/cadastrar" method="POST">
                <p>Nome: </p>
                <input type="text" name="nome"/>
                <br>
                <input type="submit" value="EU!!!"/>
            </form>
        </body>
        </html>
    `);
});


app.listen(3000);
console.log("Escutando na porta 3000");