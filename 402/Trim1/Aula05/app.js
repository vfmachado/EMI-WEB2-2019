/* MODELO ANTIGO USANDO O HTTP
const http = require('http');

const server = http.createServer((req, res) => {
   console.log(req.url);

    if (req.url == '/ok') {
       res.write("Pagina de OK");
       res.end();
    } else {
        res.write("Voce acessou a pagina " + req.url);
        res.end();
    }
});   

server.listen(3000);
*/

//USANDO O EXPRESS =D

//importando o express para utilizar seus métodos
const meuexpress = require('express');

//iniciar o express
const app = meuexpress();

app.use('/ok', (req, res) => {
    res.write("OK com express");
    res.end();
});

app.use('/outra', (req, res) => {
    res.write("Outra rota com express");
    res.end();
});

app.use('/', (req, res) => {
    res.statusCode = 404;
    res.write("página não encontrada no sistema: " + req.url);
    res.end();
});


app.listen(3000);

//TAREFA: IMPLEMENTAR OS EXERCÍCIOS 
//DA AULA PASSADA COM O EXPRESS
