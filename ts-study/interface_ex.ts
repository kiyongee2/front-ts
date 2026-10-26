
interface Person{
  name: string;
  age: number;
}

let person: Person = {
  name: "장그래",
  age: 30
};
console.log(`이름: ${person.name}, 나이: ${person.age}`);

let person2: Person = {
  name: "박대리",
  age: 28
};
console.log(`이름: ${person2.name}, 나이: ${person2.age}`);

interface User{
  readonly id: number;
  name: string;
  age?: number; 
}

let user1: User = {
  id: 1,
  name: "홍길동"
};
console.log(`사용자1 - ID: ${user1.id}, 이름: ${user1.name}`);

let user2: User = {
  id: 2,
  name: "김철수",
  age: 25
};
console.log(`사용자2 - ID: ${user2.id}, 이름: ${user2.name}, 나이: ${user2.age}`);

user2.name = "김영희"; // name 속성은 변경 가능
console.log(`사용자2 - ID: ${user2.id}, 이름: ${user2.name}, 나이: ${user2.age}`);

user1.id = 3; // 오류: readonly 속성은 변경할 수 없음 