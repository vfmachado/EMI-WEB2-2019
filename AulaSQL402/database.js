//passo 1: importar
const mysql = require('mysql2');

//passo 2: criar um pool de conexoes
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "ifrs",
    database: "turma402"
});

module.exports = pool.promise();