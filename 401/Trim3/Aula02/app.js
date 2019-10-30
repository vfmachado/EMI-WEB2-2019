
const users = [];

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
    
    res.render('cadastrar');

    /*
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
    */
});



app.post('/cadastrar', (req, res) => {

    users.push(req.body);
    res.send(users);
})

app.get('/login', (req, res) => {
    res.render('login-form');
});

app.post('/login', (req, res) => {
    
    let acheiUsuario = false;
    for (let i = 0; i < users.length; i++) {
        console.log("Comparando o usuario: ", users[i], req.body)
        if (req.body.email == users[i].email) {
            acheiUsuario = true;
            if (req.body.senha == users[i].senha) {
                res.send("Bem vindo usuario: " + req.body.email);
            } else {
                res.render('login-form', {erro : "Senha incorreta", email : req.body.email});
            }
        }

    }

    if (acheiUsuario == false) {
        res.render('login-form', {erro : "Usuário não foi encontrado!"})
    }
    //res.render('login-form');

    //res.send("Bem vindo usuario: " + email);

    //res.setHeader('Set-Cookie', "logou=true; email=" + req.body.email);
    //res.cookie('logou', true);
    //res.cookie('email', req.body.email);

    /*
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

   */
});

app.get('/outra', (req, res) => {
    res.write("Outra pagina");
    res.end();
});

app.listen(3000, () => {console.log("escutando na 3000")})