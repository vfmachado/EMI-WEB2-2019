//IMPORT DO EXPRESS 
const express = require('express');

//EXECUÇÃO DA FUNÇÃO EXPRESS PARA TER ACESSO AOS MÉTODOS
const app = express();

//adicionando body-parser
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())

//LETRA A
//get para página inicial
app.get('/pagina-inicial', (req, res) => {
    res.write("Ta funcionando... Pagina inicial desevolvida "
    + "por Vinicius Fritzen Machado");
    res.end();
});

//ADICIONAR OS MÓDULOS

//importar o modulo
const rotasAluno = require('./rotas/alunos');
//ligar a minha aplicação
app.use(rotasAluno);

//EXERCICIO MÓDULO DO PROFESSOR

//PAGINA DE ERRO
//LETRA D
app.get('/404', (req, res) => {
    res.write("Pagina de erro!!!");
    res.end();
});

//redirecionador para qualquer requisição
// '/'  ou '*' ou sem filtro.
app.use((req, res) => {
    res.statusCode = 302; //codigo de redirecionamento
    res.redirect('/404');
    //res.setHeader('Location', '/404');
});


app.listen(3000);
console.log("Funcionando!!!");

