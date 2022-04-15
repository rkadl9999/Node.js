const mysql = require('mysql');
//export PASSWORD=[password]로 설정
const password = process.env.PASSWORD;
const host = "localhost";

//연결하기 위해 정보 설정
module.exports = {
    conn : mysql.createConnection({
        host: host,
        user: "root",
        password: password,
        database: "node"
    }),
};