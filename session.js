//필요한 모듈 불러오기
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const express = require('express');
const app = express();
const port = 3000;

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
app.get('/', (req, res) => {
    //num값이 정의되지 않았을 때 1로 정의
    if (req.session.num === undefined){
        req.session.num =1;
    }
    //정의되었다면 1씩 증가
    else{
        req.session.num = req.session.num + 1;
    };

    //출력
    res.send('view : '+ req.session.num);

});

//서버 실행
app.listen(port, () => {
    console.log('Server is Running at http://localhost:'+port);
});