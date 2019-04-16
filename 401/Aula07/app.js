
const express = require('express');

const app = express();

//app.use - ATENDE TODOS OS TIPOS DE REQUISIÇÃO... 
    //utiliza o USE normalmente para adicionar MIIDLEWARES
                                            //É um código que executa em determinadas condições.

//app.get - atende requisições deste tipo (GET) - PEGA algo do servidor

//app.post - atende requisções post - ao envio de informações para o servidor

//rotas do administrador
const rotasDoAdmin = require('./rotas/rotasAdmin');
app.use(rotasDoAdmin); //ei app utiliza este middle por favor

//rotas do usuario
app.get('/', (req, res) => {
    res.statusCode = 302; //redirecionamento
    res.setHeader('Location', '/user/pagina-inicial');
    res.end();
});

app.get('/user/pagina-inicial', (req, res) => {
    res.write("Essa e pagina do usuario =D");
    //exibir paginas HTML
    //verificar se o usuário pode acessar essa pagina
    //sei lá mais o que vou fazer...
    //e mais outra coisa
    res.end();
});

app.get('/user/cadastrar', (req, res) => {
    res.write("Esta pagina serve para cadastrar novos usuarios ");
    res.end();

    //exibir um formulario
    //fazer post para outra rota...
});


//outra rota... que pega os dados do form e salva no banco de dados

//qualquer outra requisicao
app.use('/', (req, res) => {
    res.write("404 - Not Found");
    res.statusCode = 404;
    res.end();
});


app.listen(3000);
console.log("Executando servidor e escutando na porta 3000");