//express 모듈 뷸러오기
const express = require('express');
const app = express();
const port = 3000;

//Default Page
app.get("/", (req, res) => {
    res.send('This is default page');
});

//User Page
app.get("/user", (req, res) => {
    let name = req.param('name');   //파라미터로 받아와서 변수에 저장
    let age = req.param('age');

    if (name == null && age == null){           //파라미터 값 검사
        res.send('Insert your name and age!');
    }
    else{
        res.send('Hello '+name+' your age is '+age);        //이름과 나이 출력
    }
})

/*------------------------------------------------------------------------------------------*/

app.get("/Get/:name/:age", (req, res) => {  //바람직한 방법
    const param = req.params; //변수에 객체 저장
    console.log(param); //로그에 값 출력

    res.send('user name : '+param.name+' / user age : '+param.age);
});

app.listen(port, () => {
    console.log('Server is Running http://localhost:'+port);
});