var http = require('http');

//01. 요청한 url을 객체로 만들기 위해 url 모듈 불러오기
var url = require('url');

//02. 요청한 url 중에 Query String을 객체로 만들기 위해 querystring 모듈 불러오기
var querystring = require('querystring');
const { resolve } = require('path');

var server = http.createServer(function(request, response){
    //03. 콘솔 화면에 로그 시작 부분 출력
    console.log('---log start---');

    //04. 브라우저에서 요청한 주소를 파싱하여 객체화 후 출력
    var parseUrl = url.parse(request.url);
    console.log(parseUrl);

    //05. 객체화 된 url 중에 Query String 부분만 따로 객체화 후 출력
    var parseQuery = querystring.parse(parseUrl.query, '&','=');
    console.log(parseQuery);

    //06. 콘솔 화면에 로그 종료 부분 출력
    console.log('---log end---');

    var var1 = parseQuery.var1;

    response.writeHead(200, {'Content-Type':'text/html'});
    //var1 변수에 값이 있는지 없는지 검사.
    if (var1 == null){
        response.end('var1 is Null!!');
    }
    else if (var1 != null){
        response.end('var1 is '+var1);
    }
});

server.listen(3000, function(){
    console.log('Server is running ...');
});