/* 

Próximos Tópicos:
    1. Cookies
    2. Sessões
    3. Upload e Download de arquivos
        aula para ver o início dos trabalho - PRÉVIA DE TRABALHO
        16/OUTUBRO
            PRÉVIA DA MODELAGEM DE BANCO
            ESBOÇO DA PARTE DO FRONT-END

    4. Envio de emails
    5 e 6. Acesso a APIs - back (Node) e front-end (AJAX)
        aula para ver o meio dos trabalhos
        06/NOVEMBRO
            TODA PARTE DE BANCO QUE FUNCIONAR
            FRONT-END TEM QUE ESTAR PERTO DO FINAL
            JÁ DEVE ESTAR FUNCIONANDO O SISTEMA DE LOGIN CORRETAMENTE.

    ** Pagamento!!
        entrega do trabalho
    
        27/NOVEMBRO
            SISTEMA COMPLETO PARA A ENTREGA.


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

const bcrypt = require('bcryptjs');

const session = require('express-session');

const app = express();

app.use(
    session(
        {
            secret: 'CHAVE LONGA QUE É UTILIZADA PARA CRIPTOGRAFIA 12364512534SAUHAIUHSIUH213551092UWICONF31128403GHIFJN13498', 
            resave: false, 
            saveUninitialized: false
        }
    ));
/*
    RESAVE = FORÇA A SESSÃO A SER SALVA NOVAMENTE MESMO QUE ELA NÃO TENHA SIDO MODIFICADA.
			DEVE SER VERDADEIRO QUANDO O ARMAZENAMENTO DA SESSÃO SETA UMA DATA DE EXPIRAÇÃO.
            NORMALMENTE É UTILIZADO FALSO
            

     SAVEUNINITIALIZED = FORÇA A SESSÃO QUE É 'NÃO INICIALIZADA' A SER GUARDADA NO ARMAZENAMENTO.
			UMA SESSÃO É 'NÃO INICIALIZADA' QUANDO É NOVA MAS NÃO MODIFICADA. ESCOLHER A OPÇÃO FALSE É ÚTIL PARA SESSÕES DE LOGIN, REDUZINDO O CONSUMO DO SERVIDOR.       
*/

//setar o body parser e a view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyparser.urlencoded({ extended: false }));

//cookie-parser é um middleware!
app.use(cookieparser());

//proximo passo - rota principal
app.get('/', (req, res) => {
    res.write("OK!");

   // res.write("Logado: " + req.cookies.logou);

   console.log(req.session);

    //if (req.cookies.logou == "true") {
    if (req.session.estaLogado == true) {
        res.write("\nUsuario Logado: ")
        res.write("\n" + req.session.email);
        res.write("\n" + req.session.quandoLogou);
    } else {
        res.write("\nBem vindo visitante")
    }

    res.end();
});

app.get('/login', (req, res) => {
    res.render('login-form');
});

app.post('/login', (req, res) => {
    
    //res.setHeader('Set-Cookie', "logou=true; email=" + req.body.email);
    //res.cookie('logou', true);
    //res.cookie('email', req.body.email);

    console.log("Senha: " + req.body.senha);

    //TEMA - ALINHAR AS PROMISES!
    bcrypt.compare(req.body.senha, "$2a$12$PMNdV6pTv3CA9eJnYqo1Ce0U5hmbE/iBrqlhCXRY93r2GajbWdW8y")
        .then(combinouSenhas => {
            if (combinouSenhas) {
                console.log("Deve ser admin!!!");
                req.session.ehAdmin = true;
            }
        })
        .catch(erro => {
            console.log(erro);
        })

    bcrypt.hash(req.body.senha, 12)
        .then(novaSenha => {
            console.log("A senha nova eh: " + novaSenha);

            req.session.estaLogado = true;
            req.session.email = req.body.email;
            req.session.quandoLogou = new Date();
            //req.session.ehAdmin = true
        
            res.write("Recebido: " + req.body.email);
               
            res.end();

        });
    //encriptar ela.

   
});

app.get('/outra', (req, res) => {
    res.write("Outra pagina");
    res.end();
});

app.listen(3000, () => {console.log("escutando na 3000")})