
console.log("Ok... iniciando..");

//passo 1: importar
const mysql = require('mysql2');

//passo 2: criar um pool de conexoes
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "ifrs",
    database: "turma402"
});

let db = pool.promise();

db.execute("SELECT * FROM series")
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    });

console.log("Ok.. terminando");

