//Modules
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

//Set Secret Key
app.use(cookieParser('secret_1234')); //cookieParser(SECRETKEY)

//쿠키 옵션 설정
const cookieOption = {
    httpOnly: true,
    maxAge: 1000000,
    signed: true
};

//Default Page
app.get("/", (req, res) => {
    res.send('This is Default Page');
});

//쿠키 설정 Page
app.get('/cookie', (req, res) => {
    res.cookie('cookie', 'value', cookieOption);
    res.send('Set Cookie');
});

app.listen(port, () => {
    console.log('Server is Running at http://localhost:' + port);
});
