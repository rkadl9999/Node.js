//express를 이용한 서버 생성
//express 로드
const express = require('express');
//express() 함수가 application 함수를 로드하고 그것을 app 변수에 저장하여 애플리케이션을 만든다.
const app = express();
//포트번호
const port = 3000;

//기본 경로 지정
//req = 요청 객체 / res = 응답 객체
app.get("/", (req,res) => {
    res.send("Hello World!"); //화면에 출력
});

app.listen(port, () => {
    console.log('Server is Running at http://localhost:'+port);
});