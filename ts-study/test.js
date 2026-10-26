// javascript의 약점
console.log(2 + '3');  // "23"
console.log(typeof (2 + '3'));  // "string"

// Hoisting은 JavaScript 엔진이 코드 실행 전에 함수와 
// 변수 선언을 스코프의 최상단으로 끌어올리는 동작입니다 
console.log(a);  // undefined(에러 아님)
var a = 2;

// 참조 오류 발생
// console.log(b);
let b = 3;

// 함수 선언문은 호이스팅이 발생합니다
add(10, 11);  // 21

function add(x, y) {
    return x + y;
}

