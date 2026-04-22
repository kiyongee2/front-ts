
// reduce() 예제
const numbers = [1, 2, 3, 4, 5];

// 배열의 모든 요소를 더하는 reduce() 예제
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 15

// 배열의 모든 요소를 곱하는 reduce() 예제
const product = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

console.log(product); // 120

// 배열의 최대값을 찾는 reduce() 예제
const max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, Number.NEGATIVE_INFINITY);

console.log(max); // 5