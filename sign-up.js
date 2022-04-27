//필요한 모듈 불러오기
const express = require('express');
const mysql = require('mysql');
const db = require('./conn-DB-forMAC.js');
const md5 = require('md5');
const log_ip = require('request-ip');
const app = express();
const port = 3000;

app.use(express.json()); //데이터를 json 형식으로 받음
app.use(express.urlencoded({ extended: false }));

//삽입 SQL문 정의
const insert = "insert into user values(?,?)";

//Default Page
app.get("/", (req, res) => {
    res.send('This is Default Page');
});

//회원가입 Page
app.post("/signUp", (req, res) => {
    let id = req.body.id;
    let password = md5(req.body.password);      //SQL Injection으로 DB가 공격당할 것을 대비해 md5 해쉬값으로 저장
    let ip = log_ip.getClientIp(req);  //클라이언트 IP 가져오기

    db.connection.query(insert,[id,password], (err, result) => {
        if (err) throw error;       //error 처리
        console.log(result); //성공 값 출력
        console.log(ip); //ip 
    })
})

app.listen(port, () => {
    console.log('Server is Running at http://localhost:' + port);
});
