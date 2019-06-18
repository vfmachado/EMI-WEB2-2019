//IMPORTA O MODULO HTTP
const http = require('http');

var numeroAcessos = 0;


const servidor = http.createServer((req, res) => {
    
    console.log("Recebi requisição para pagina: " + req.url)
    
    if (req.url != '/favicon.ico') {
        numeroAcessos++;
    }

    res.write("<h1>Oi, criei essa msg no servidor =D</h1>");
    res.write("<h2>Voce tentou acessar: " + req.url + "</h2>");
    res.write("<h2>Voce e o visitante: " + numeroAcessos + "</h2>");
    
    //enviar a resposta
    res.end();

});


/* //OPÇÃO DE CRIAR SERVIDOR COM UMA FUNÇÃO SEPARADA
function servidorExecuta(req, res) {
    
    console.log("Recebi requisição para pagina: " + req.url)
    
    if (req.url != '/favicon.ico') {
        numeroAcessos++;
    }

    res.write("<h1>Oi, criei essa msg no servidor =D</h1>");
    res.write("<h2>Voce tentou acessar: " + req.url + "</h2>");
    res.write("<h2>Voce e o visitante: " + numeroAcessos + "</h2>");
    
    //enviar a resposta
    res.end();
}

const servidor = http.createServer(servidorExecuta);
*/

//EM QUE PORTA VAMOS FICAR ESPERANDO POR REQUISIÇÕES.
servidor.listen(3000);