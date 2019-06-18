const http = require('http');

var i = 0;

const server = http.createServer(
    (requisicao, resposta) => {

    console.log(requisicao.url, i++);

    resposta.setHeader('Content-Type', 'text/html');
    resposta.statusCode = 200;
    resposta.write('<html>');
    resposta.write('<head><title>Minha pagina Node</title>');
    resposta.write('</head>');
    
    if (requisicao.url === '/') {
        resposta.write('<body><h1>Bem vindo cliente</h1><h2>Pagina principal</h2>');
        resposta.write('</body>');
    } 

    else if (requisicao.url == '/login') {
        resposta.write('<body><h1>Area de Acesso</h1>');
        resposta.write(
            '<form><input type="text" /> <br><br>'
            + '<input type="password" /> <input type="submit">   </form>'
        );
        resposta.write('</body>');
    } else {
        resposta.statusCode = 404;
        resposta.write('<body><h1>404 - Not Found!</h1>');
        resposta.write('</body>');
    }
   
    resposta.write('</html>');
    resposta.end();
    

});

server.listen(3000);