//01. 서버 사용을 위하여 http 모듈을 http 변수에 담는다.
var http = require('http'); //require = 다른 언어의 import와 유사

//02. http 모듈로 서버를 생성한다.
var server = http.createServer(function(request,response){              //http 모듈에 미리 정의 되어 있는 createServer 함수로 서버를 생성
                                                                        //해당 함수에 파라미터로 입력되는 함수는 이름이 없다. ( 요청이 들어올 때 함수 로직 실행 )
    response.writeHead(200, {'Content-Type':'text/html'});              //200 = http OK 상태 코드, Content-Type이 text고 HTML 형태라고 명시
    response.end('Hello Node.js!!');                                    //end() 함수는 컨텐츠를 받아서 HTML 형태로 화면애 출력해주는 함수

});

//03. listen 함수로 3000번 포트를 가진 서버를 실행, 서버가 정상적으로 실행됨을 확인하기 위해 로그 찍어주기
server.listen(3000, function(){
    console.log('server is running ...');
});
