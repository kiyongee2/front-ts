"use strict";
// slice() 예제
const fruits = ['apple', 'banana', 'orange', 'tomato'];
// slice()는 원본 배열을 변경하지 않고 새로운 배열을 반환합니다.
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // ['banana', 'orange', 'tomato']
console.log(fruits); // ['apple', 'banana', 'orange', 'tomato']
// 음수 인덱스를 사용하여 배열의 끝에서부터 요소를 선택할 수도 있습니다.
const lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits); // ['orange', 'tomato']
