// passo 1 - importar o mysql2
const mysql = require('mysql2');

//passo 2 - criar a conexão ou o pool de conexões
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "exemplo"
});

module.exports = pool.promise();