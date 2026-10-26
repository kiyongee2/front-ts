// 인터페이스(interface) 정의
interface Person{
  name: string,
  age: number
}

// 인터페이스를 활용한 객체 생성
let person1: Person = {
  name: "정윤하",
  age: 35
}

let person2: Person = {
  name: "박재명",
  age: 30
}

// 출력
console.log(`이름: ${person1.name}, 나이: ${person1.age}` );
console.log(`이름: ${person2.name}, 나이: ${person2.age}` );
