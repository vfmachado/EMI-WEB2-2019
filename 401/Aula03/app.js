//IMPORTA O MÓDULO HTTP E ASSOCIA A UMA CONSTANTE
const http = require('http');
    // ^ --> NOME DE VARIÁVEL

var contador = 0;

//CRIAR O SERVIDOR
const server = http.createServer((req, res) => { //ARROW FUNCTION
                            //REQUISIÇÃO E RESPOSTA
    console.log("Requisicao numero: " + contador++); //PRINTA TESTE NA TELA
    console.log(req.url);
    res.statusCode = 200;
    res.write("<h1>Funciona </h1><h4>Voce foi o numero "
     + contador
    + " ao acessar este site</h4>" );
    res.end();
});



console.log("Iniciando o servidor na porta 3000");
server.listen(3000, "127.0.0.1", () => { //função de callback que é executado ao fim do listen
    console.log("Servidor ja esta ativo e esperando requisicoes")
}) ;

//deve aparecer antes da msg de servidor ativo.
console.log("TESTE QUALQUER");

//realmente entra no LOOP de servidor
//fica escutando requisições na porta 3000
//no  endereço 127.0.0.1


/*
var rqListener = function(requisicao, resposta) {
}

http.createServer(rqListener);
*/