function printText(text) {
    const message = text ?? 'text가 비어있습니다.'; //text 인자값이 Null값 일때 우측 문자열을 변수에 저장
    console.log(message); //출력
}

printText('Hello World'); //result = Hello World
printText(null); //result = text가 비어있습니다.
printText(undefined); //result = text가 비어있습니다.