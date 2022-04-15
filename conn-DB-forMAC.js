const mysql = require('mysql');
const password = process.env.PASSWORD;
const host = 'localhost';

module.exports = {
    connection: mysql.createConnection({
        host: host,
        user: "root",
        password: password,
        database: "node",
    }),
};