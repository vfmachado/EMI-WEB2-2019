let produtos = [
    {
        nome: "Pintura - Aquarela",
        valor: 59.90, 
        descricao: "Tamanho A4"
    },
    {
        nome: "Modelo Personagem 3D",
        valor: 129.90,
        descricao: "Modelo simples humano com animação básica"
    }
];


const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('pagina-inicial',
    {
        tituloPagina: "Pagina Home",
        prods : produtos
    });
});

app.get('*', (req, res) =>{
    res.statusCode = 404;
    res.render('404', {
        tituloPagina: "Erro - Não tem!"
    });
}); 

app.listen(3000);