"use strict";
// reduce() 예제
const numbers = [1, 2, 3, 4, 5];
// 배열의 모든 요소를 더하는 reduce() 예제
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15
