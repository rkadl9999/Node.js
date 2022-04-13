//01. 변수는 타입에 대한 구분 없이 var로 정의
var name;
var num1;

//02. = 을 사용해서 변수에 값 입력, 문자열일 경우 작은 따옴표나 큰 따옴표로 감싸주기
name = 'Jeong Hyeonuk';
num1 = 2314;

//03. 숫자와 문자를 + 연산을 하면 결과는 문자열이 된다.
var result = name + num1;

console.log(result); //출력값 = Jeong Hyeonuk2314

/*------------------------------------------------------------------------------------------------------------------*/

//함수는 function 함수이름 (parameter) {code} 형태로 선언 (코드에 return문이 없으면 결과값 리턴 없이 그대로 종료)
function sum (param1,param2,param3) {
    return param1 + param2 + param3;
}

//함수 리턴값을 변수에 대입
var res = sum(1,2,3);

console.log('결과 = '+res); //출력값 = 결과 = 6

//리턴값이 없는 함수
function print (str) {
    console.log(str);
}

//함수 호출
print('Hello Node.js'); //출력값 = Hello Node.js

/*------------------------------------------------------------------------------------------------------------------*/

//조건문 if
var a = 10;

if (a > 10) {
    console.log('a가 10보다 큽니다.');
}
else if (a < 10) {
    console.log('a가 10보다 작습니다.');
}
else {
    console.log('a는 10입니다.');
}

//반복문 while
var i = 0;

while (i < 10) {
    console.log('i의 값 = '+i);
    i++;
}