//class 선언 , 낙타표기법으로 첫번째 글자를 대문자로 함수를 하나 선언한다.
function Test (msg) {
    //변수를 객체의 멤버로 사용하기 위해 this 예약어를 사용한다.
    this.name = 'Im Test Class';
    this.message = msg;

    //this를 사용하지 않은 변수
    message2 = 'no use this';
    //멤버 함수 선언
    this.print = function(){
        console.log(message2);
    };
}

//객체 생성
var myClass = new Test('Hello World');

//this로 정의한 변수들 출력
console.log(myClass.name);
console.log(myClass.message);

//this를 사용하지 않은 변수는 외부에서 참조 불가능
console.log(myClass.message2); //출력값 = undefined

//this로 선언된 함수를 통해 출력
myClass.print();

/*-------------------------------------------------------------------------------------------*/

//prototype 예약어 사용
function Clazz (msg) {
    this.name = 'Im Clazz';
    this.message = msg;

    message2 = "Hello World";
}

//Clazz 객체의 prototype을 가져와서 message값을 리턴하는 함수
Clazz.prototype.getmsg = function() {
    return this.message;
}

Clazz.prototype.getmsg2 = function() {
    return this.message2;
}

//객체 생성
var myClazz = new Clazz('hyeonuk');

console.log(myClazz.getmsg());

//내부에서 생성된 함수와는 다르게 prototype으로 생성된 함수로는 값을 사용할 수 없다.
console.log(myClazz.getmsg2()); //출력값 = undefined
