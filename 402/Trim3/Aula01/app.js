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

const users = [
    {
      email: "vinicius.machado@osorio.ifrs.edu.br",
      senha: "$2a$12$cltTin0pl3asTkpZtLlFbu54jYngs8auFypIdxwCqMRcvNiy2AwCq"
    },
    {
        email: "admin@admin",
        senha: "$2a$12$RO9MCyFOBb0UERRvPORVseGcrEoYCWW7AF0P6UBrF/OPTVutQ887G",
        admin : true
    }
];

const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcryptjs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());

app.use(session({
    secret: 'EU CRIO UMA FRASE GIGANTE QUE NINGUEM VAI DESCOBRIR! IAUHAIUHIAHU 12351R1!%!#$!@@!#',
    resave: false,
    saveUninitialized: false
}));

/*
    RESAVE = FORÇA A SESSÃO A SER SALVA NOVAMENTE MESMO QUE ELA NÃO TENHA SIDO MODIFICADA.
			DEVE SER VERDADEIRO QUANDO O ARMAZENAMENTO DA SESSÃO SETA UMA DATA DE EXPIRAÇÃO.
			NORMALMENTE É UTILIZADO FALSO
    SAVEUNINITIALIZED = FORÇA A SESSÃO QUE É 'NÃO INICIALIZADA' A SER GUARDADA NO ARMAZENAMENTO.
			UMA SESSÃO É 'NÃO INICIALIZADA' QUANDO É NOVA MAS NÃO MODIFICADA. ESCOLHEI A OPÇÃO FALSE É ÚTIL PARA SESSÕES DE LOGIN, REDUZINDO O CONSUMO DO SERVIDOR.
		
*/

app.get('/', (req, res) => {
    
    res.write("OK: ");

    //buscar cookie
    // req.cookies.email; para que isso funcione, precisamos setar o cookie-parser
/*
    if (req.cookies.email) {
        res.write(req.cookies.email);
    }
*/
    console.log(req.session);

    if (req.session.logou == true) {
        res.write("O usuario " + req.session.email + " está logado" )

        if (req.session.isAdmin) {
            res.write("\nVC tem todas as permissoes!");
        }

    } else {
        res.write("Visitante!!!");
    }

    res.end();
})

app.get('/login', (req, res) => {
    res.render('login-form');
});

app.post('/login', (req, res) => {
    //email = req.body.email;

    //res.setHeader('Set-Cookie', 'email=' + req.body.email);
    //res.cookie('email', req.body.email);
    //res.cookie('logou', "true");

    /*
    req.session.email = req.body.email;
    req.session.logou = true;

    let senha = req.body.senha;
    console.log("Senha informada: " + senha);

    bcrypt.hash(senha, 12)
        .then(senhaCriptografada => {

            console.log("A nova senha será: " + senhaCriptografada);

            if (senha == "admin") {
                console.log("Passei aqui...");
                req.session.isAdmin = true;
            }
            res.write("Recebido: " + req.body.email);
            res.end();
        }
        );
    */

    let email = req.body.email;
    //let temUser = false;
    for (let u of users) {
        if (u.email == email) {
            //agora tenho que verificar a senha
            //res.write("Tem esse user");
            //res.end();
            //return;

            //verificar se a senha que o usuario informou é a mesma criptografada
            bcrypt.compare(req.body.senha, u.senha)
                .then(deuMatch => {

                    if (deuMatch) {
                        if (u.admin) {
                            req.session.isAdmin = true;
                        }

                        req.session.logou = true;
                        req.session.quandoLogou = new Date();
                        req.session.email = u.email;

                        res.redirect('/');

                    } else {
                        //res.write("Senha incorreta!!!");
                        //res.end();
                        res.render('login-form', {erro : "Senha incorreta", email : email})
                    }

                })
                .catch(erro => {
                    console.log(erro);
                })


        }
    }
    //RESOLVER A QUESTAO DO SINCRONISMO.
    //res.redirect('/login');
});

app.listen(3000, () => {
    console.log("Servidor na porta 3000.");
});