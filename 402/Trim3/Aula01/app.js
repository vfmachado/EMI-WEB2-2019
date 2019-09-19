/* 

Próximos Tópicos:
    1. Cookies
    2. Sessões
    3. Upload e Download de arquivos
        aula para ver o início dos trabalho
    4. Envio de emails
    5 e 6. Acesso a APIs - back (Node) e front-end (AJAX)
        aula para ver o meio dos trabalhos
    ** Pagamento!!
        entrega do trabalho

Trabalho do trimestre
    Parceria com a professora Janaína - Design Web.
        Front-end + Back-end

    Sujestões de tópicos para eu discutir com a prof.
    
    *   Imobiliária  
    *   E-commerce - validar
    *   Adoção de Animais
    *   Mini NetfLix ou Catálogo + Avaliações
    *   Mini Rede Social
    *   Compra e Venda de Ingressos de Cinemas
    *   Blog sobre algum assunto 

Fechamento das notas
    Até o final de novembro / início de dezembro (2 meses)


COOKIES

    É uma informação enviada pelo servidor via Response HEADER e armazenada no cliente.

    Exemplo: salvando uma preferência do usuário, gerenciando um login, 

    res.setHeader('Set-Cookie', 'name=value');

    npm install cookie-parser

        não é seguro para dados sensíveis
        é abordagem comum para fazer rastreamento do usuário nas páginas

    Leitura recomendada:
    https://www.w3schools.com/js/js_cookies.asp

*/


/*
    npm init

    instalar as dependencias (npm install NOMEDEP)
        express 
        body-parser
        cookie-parser
        ejs
        nodemon

    adicionar o script de start no package.json

    TEMA da aula de hoje:
        MIGRAR O SISTEMA PARA O PADRÃO MVC

*/

const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());


app.get('/', (req, res) => {
    
    res.write("OK: ");

    //buscar cookie
    // req.cookies.email; para que isso funcione, precisamos setar o cookie-parser

    if (req.cookies.email) {
        res.write(req.cookies.email);
    }

    res.end();
})

app.get('/login', (req, res) => {
    res.render('login-form');
});

app.post('/login', (req, res) => {
    //email = req.body.email;

    res.setHeader('Set-Cookie', 'email=' + req.body.email);
    //res.cookie('email', req.body.email);
    
    res.write("Recebido: " + req.body.email);
    res.end();
});

app.listen(3000, () => {
    console.log("Servidor na porta 3000.");
});