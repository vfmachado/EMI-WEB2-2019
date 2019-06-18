const express = require('express');

const app = express();

//setando o ejs como motor de visualização
app.set('view engine', 'ejs');
app.set('views', './views');

const bodyparser = require('body-parser');
//utilizando o body-parser
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//arquivos estáticos estão disponíveis numa pasta chamada
//publico
app.use(express.static('./publico/'));

//criar o módulo com as rotas do cliente
const rotasDoCliente = require('./rotas/rotasCliente');
app.use(rotasDoCliente);

app.listen(3000);
console.log("Tudo certo na porta 3000");

/*
1. CRIAR UM NOVO MÓDULO ADMIN
2. ADICIONAR UMA ROTA GET PARA /add
	DEVE MOSTRAR UMA PÁGINA COM UM FORMULARIO
	COM OS SEGUINTES DADOS:
		NOME DO PRODUTO
		TEXTO REVIEW
		AUTOR DA REVIEW
	O ACTION DO FORMULARIO DEVE SER PARA /add
	METHOD DEVE SER POST
3. CRIAR UMA ROTA POST PARA /add
	QUERO VER OS DADOS QUE FORAM ENVIADOS PELO FORMULARIO.
*/