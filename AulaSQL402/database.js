//passo 1: importar
const mysql = require('mysql2');

//passo 2: criar um pool de conexoes
const pool = mysql.createPool({
    host: "200.132.13.90",
    user: "roger",
    password: "roger",
    database: "profvini402"
});

module.exports = pool.promise();