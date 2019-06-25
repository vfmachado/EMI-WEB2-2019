
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

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('lista-produtos', 
        {
            pageTitle: "Página Inicial",
            prods: produtos    
        }
    );
});

app.get('/admin/add-product', (req, res) => {
    res.render('add-produto', 
        {
            pageTitle: "Admin - Add Prod"
            
        }
    );
});


app.get('*', (req, res) => {
    res.statusCode = 404;
    res.render('404', {pageTitle: "Erro 404"}); 
});

app.listen(3000);


