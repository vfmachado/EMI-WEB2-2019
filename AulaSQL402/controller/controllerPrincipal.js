
/*
    o controller é responsável por 
        manipular os meus objetos
        atualizar as views
    
*/

const db = require('../database');


exports.SalvarSerieNoBanco = (req, res) => {

    let query = `INSERT INTO series (nome, descricao, imagem) VALUES
        ('${req.body.nome}', '${req.body.descricao}', '${req.body.imagem}');`;
    

    db.execute(query)
    .then(CERTO => {
        res.write(`
        <html>
        <body>
            <h1>Salvei!</h1>
            <p>${JSON.stringify(req.body)}</p>
        </body>
        </html>
        
        `);
        
        res.end();
    })
    .catch(ERRADO => {
        res.write("deu ruim");
        res.write(JSON.stringify(ERRADO));
        res.end();
    });


    
}

exports.MostraPaginaAddSerie = (req, res) => {
    res.render('add-template');    
}
