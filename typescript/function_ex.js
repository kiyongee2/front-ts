"use strict";
// return type이 있는 함수
/*function add(x: number, y: number): number {
  return x + y;
}*/
const add = (x, y) => {
    return x + y;
};
const sum = add(5, 10);
console.log(`합: ${sum}`);
// return type이 없는 함수 - void
/*function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}*/
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("TypeScript");
// 객체를 반환하는 함수
/*function createUser(id: number, name: string): { id: number; name: string } {
  return { id, name };
}*/
const createUser = (id, name) => {
    return { id, name };
};
// createUser 함수는 id와 name을 받아서 User 객체를 반환합니다.
const user1 = createUser(1, "Alice");
console.log(`사용자 ID: ${user1.id}, 이름: ${user1.name}`);
const multiply = (a, b) => a * b;
const value1 = multiply(5, 10);
console.log(`곱: ${value1}`);
const divide = (a, b) => a / b;
const value2 = divide(10000, 2.5);
console.log(`나눗셈: ${value2}`);
