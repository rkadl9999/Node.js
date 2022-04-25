//필요한 모듈 불러오기
const express = require('express');
const md5 = require('md5');
const mysql = require('mysql');
const db = require('./conn-DB-forMAC');
const app = express();
const port = 3000;

app.use(express.json()); //데이터를 json 형식으로 받음
app.use(express.urlencoded({ extended: false }));

//select 쿼리 문 작성
let select = 'select * from user where id = ?';

//Default Page
app.get("/", (req, res) => {
    res.send('This is Default Page');
});

//Login Page
app.post("/login", (req, res) => {
    let id = req.body.id;
    let password = md5(req.body.password); //DB에 해쉬 처리하여 저장하였기 때문에 값 비교를 위해 해쉬 처리
    
    db.connection.query(select, [id], (err, result) => {
        console.log(result); //쿼리 결과값 확인
        //로그인 로직
        if(id == result[0].id && password == result[0].password){
            console.log('Success Login!'); //성공시 출력값
        } else {
            console.log('Login Faild'); //실패시 출력값
        }
    })
});

//서버 실행
app.listen(port, () => {
    console.log('Server is Running at http://localhost:' + port);
});
