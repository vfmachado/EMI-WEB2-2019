//TEMA
/*
    CRIAR ROTA POST PARA ADD REMEDIO
    E SALVAR NO BANCO

    CRIAR UM SQL COM INSERT INTO

*/

/*
ALTER USER 'root'@'localhost' 
	IDENTIFIED WITH mysql_native_password BY 'admin';
*/

console.log("OK... iniciando");



const db = require('./database');

//CONFIGURAR O EXPRESS E UMA ROTA GET PARA /verRemedios

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/verRemedios', (req, res) => {

    db.execute("SELECT * FROM remedio")
    .then(result =>{
        console.log(result[0]);
        
        res.render('template', {prods: result[0]});
        //res.write(JSON.stringify(result[0]));
        //res.end();
    })
    .catch(err => {console.log(err)});
})

app.listen(3000);

console.log("OK... escutando na porta 3000");