
// sort() 예제
const arr: number[] = [5, 2, 9, 1, 5, 6];

// 기본적으로 sort()는 문자열로 요소를 정렬합니다.
arr.sort();
console.log(arr); // [1, 2, 5, 5, 6, 9]

// 숫자를 올바르게 정렬하려면 비교 함수를 제공해야 합니다.
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 5, 5, 6, 9]

// 문자열 배열 정렬 예제
const strArr: string[] = ['banana', 'apple', 'cherry'];
strArr.sort();
console.log(strArr); // ['apple', 'banana', 'cherry']

// 객체 배열 정렬 예제
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);
// [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]