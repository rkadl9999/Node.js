//필요한 모듈 불러오기
const express = require('express');
const app = express();
const port = 3000;
const log_ip = require('request-ip');

app.use(express.json()); //데이터를 json 형식으로 받음
app.use(express.urlencoded({ extended: false }));

//Default Page
app.get("/",(req, res) => {
    res.send('This is Default Page!');
});

app.post("/post", (req, res) => {
    let name = req.body.name;           //POST 방식으로 값 가져와서 변수에 저장
    let ip = log_ip.getClientIp(req);  //클라이언트 IP 가져오기

    //IP와 POST방식으로 받은 변수 값 콘솔에 띄우기
    console.log(ip)
    console.log(name);
});

app.listen(port, () => {
    console.log('Server is Running http://localhost:'+port);
})