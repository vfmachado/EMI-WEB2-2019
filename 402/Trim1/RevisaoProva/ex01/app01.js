 
 //IMPORTAR O HTTP
 //CRIAR A VARIÁVEL HTTP
 const http = require('http');

//variavel no servidor para a quantidade de reqs /
let qtd = 0;

 //PARA CRIAR NOSSO SERVIDOR
 //PRIMEIRO UMA FUNÇÃO
const server = http.createServer(

    //este é meu requestListener
    (req, res) => { //uma função que recebe como parâmetro 
        //uma requisição e coloca na resposta 
        //o que deve ser enviado para o cliente!

        //criacao do objeto JS
        let meuObjeto = {
            url: req.url,
            metodo: req.method
        };
        //logar um objeto javascript
        console.log(meuObjeto);

        //letra A / C
        if (req.url == '/admin') {
            res.write("A pagina '/' foi requisitada " + qtd
            + " vezes.");
        } else {
            res.write("Servidor respondendo, " +
            "voce requisitou a pagina " + req.url);
        }
       
        //letra B - toda vez que a url for / aumenta a qtd
        if (req.url == '/') {
            qtd++;
        }


        res.end();

    }

)

 //DEPOIS O LISTEN
 server.listen(3000);
 console.log("Escutando na 3000!"); //SE APARECER ISTO... É PQ CHEGOU ATÉ AQUI