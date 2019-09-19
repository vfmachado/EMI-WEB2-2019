// passo 1 - importar o mysql2
const mysql = require('mysql2');

//passo 2 - criar a conexão ou o pool de conexões
const pool = mysql.createPool({
    host: "200.132.13.90",
    user: "roger",
    password: "roger",
    database: "profvini"
});

module.exports = pool.promise();