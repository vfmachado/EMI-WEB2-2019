

//IMPORTANDO O EXPRESS
const express = require('express');

//EXECUTANDO O EXPRESS
const app = express();

/*
app.use
    USE PERMITE ADICIONAR UM MIDDLEWARE NA MINHA APLICAÇÃO
    O QUE É UM MIDDLEWARE?
        É UMA PARTE DE SOFTWARE / PROGRAMA
        QUE ADICIONA FUNCIONALIDADES AO NOSSO SISTEMA
    app.use(caminho, funcionalidade)
                        (req, res) => {}

app.get -> atender requisições do tipo GET
    GET - pegar
    
app.post -> atender requisições do tipo POST
    POST - é quando queremos enviar um dado para o servidor

*/

/* ROTAS DO ADMINISTRADOR */
const rotasAdmin = require('./rotas/rotasAdmin'); //IMPORT
app.use(rotasAdmin); //diz que o APP vai utilizar (USE)
                    //o rotasAdmin como um middleware

/* ROTAS DO USUÁRIO */

//CRIAR 3 ROTAS GET 
//  /user/dados 
app.get('/user/dados', (req, res) => {
    res.write("Dados pessoais...");
    res.end();
});

//  /user/cadastrar 
app.get('/user/cadastrar', (req, res) => {
    res.write("Novo cadastro de usuario");
    res.end();
});

//  /user/pagina-inicial
app.get('/user/pagina-inicial', (req, res) => {
    res.write("Pagina inicial quando o usuario acessa o sistema");
    res.end();
});


app.get('/teste-get', (req, res) => {
    res.write("OK para a requisicao get nesta URL");
    res.end();
});

app.post('/fazerCadastro', (req, res) => {
    res.write("Cadastro efetuado");
    res.end();

    //fazer uma requisição para o banco dados 
    //para salvar os dados
    //redirecionar o cliente para a pagina de confirmacao
    //permitir acesso ao sistema
    //consolar dizendo que está tudo bem =D
});

app.use('/', (req, res) => {
    res.write("OK");
    res.end();
});


app.listen(3000);
console.log("Escutando na porta 3000");