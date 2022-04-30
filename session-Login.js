const express = require('express');
const md5 = require('md5');
const db = require('./conn-DB-forMAC');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const app = express();
const port = 3000;

app.use(express.json()); //데이터를 json 형식으로 받음
app.use(express.urlencoded({ extended: false }));

const maxage = 1000 * 60 * 60; //세션 시간 설정 ( 1시간 )
//세션 옵션 설정
const sessionObj = {
    secret: 'hyeonuk',
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore({ checkPeriod: maxage }),
    cookie: {
        maxage,
    },
};
//세션 설정
app.use(session(sessionObj));

//Default Page
app.get("/", (req, res) => {
    res.send('This is Default Page');
});

//Login Page
app.post("/login", (req, res) => {
    let id = req.body.id;
    let password = md5(req.body.password); //DB에 해쉬 처리하여 저장하였기 때문에 값 비교를 위해 해쉬 처리
    
    db.connection.query('select * from user where id = ?', [id], (err,result) => {
        console.log(result); //쿼리 결과값 확인
        //로그인 로직
        if(id == result[0].id && password == result[0].password){
            if (req.session.user){
                console.log("already Login");
            }
            else{
                //session에 추가
                req.session.user = {
                    id: id,
                    pw: password
                }
                console.log('Success Login!'); //성공시 출력값
                console.log(req.session.user); //제대로 추가되었는지 확인
            };
        } else {
            console.log('Login Faild'); //실패시 출력값
        }
    })
});

//서버 실행
app.listen(port, () => {
    console.log('Server is Running at http://localhost:' + port);
});
