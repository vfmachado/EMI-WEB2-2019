
let produtos = [
    {
        nome: "GOL", 
        preco: 39900.00, 
        descricao: "Zero e Completo!"
    },
    {
        nome: "UNO Mille", 
        preco: 9900.00, 
        descricao: "Esqueceu a chave? Tem escada em cima"
    }
];


const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('pagina-principal', 
        {
            pageTitle: "Página Inicial",
            prods: produtos    
        }
    );
});

app.get('*', (req, res) => {
    res.statusCode = 404;
    res.render('404', {pageTitle: "Erro 404"}); 
});

app.listen(3000);


