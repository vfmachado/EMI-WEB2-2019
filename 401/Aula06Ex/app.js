
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

//express, por favor, utilize o bodyparser
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

let dados = [];

app.post('/cadastrar', (req, res) => {
    
    dados.push(req.body.nome);
    
    res.statusCode = 302;
    res.setHeader('Location', '/?ok');
    res.end();
})

app.get('/mostrar', (req, res) => {
    res.write(`<html>
    <head>
    </head>

    <body>
        <h2>Dados cadastrados</h2><ul>`);
        
        for (let i = 0; i < dados.length; i++) {
            res.write(`<li>${dados[i]}</li>`);
        }

    res.write(` </ul>  <br><a href="/">Pagina Inicial</a> </body>
    </html>`);
    res.end();
})

app.use('/', (req, res) => {
    res.write(`<html>
    <head>
    </head>

    <body>`);
    
    if (req.url == "/?ok") {
        res.write("<h3>Dado cadastrado</h3>");
    }

    res.write(`<h2>Dados do usuario</h2>
        <form action="/cadastrar" method="POST">
            <p>Nome: </p><input type="text" name="nome"/>
            <br>
            <input type="submit" value="Vaiii"/>
        </form>
        <br><br>
        <a href="/mostrar">Ver cadastros</a>
    </body>
    </html>`);
    res.end();
});



app.listen(3000);