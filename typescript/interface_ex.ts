// 인터페이스 - Interface
// 인터페이스는 객체의 구조를 정의하는 데 사용됩니다. 인터페이스를 사용하면 객체가 특정 속성과 메서드를 가지도록 강제할 수 있습니다.

// 자바스크립트 객체
let person = {
    name: "홍길동",
    age: 25,
};

console.log(person.name, person.age);

// 타입 스크립트의 객체
// 인터페이스 정의
interface Person {
    name: string;
    age: number;
}

let person2: Person = {
    name: "홍길동",
    age: 25, // age 속성이 누락되면 오류 발생
};

let person3: Person = {
    name: "우영우",
    age: 30,
};

// 출력
console.log(`이름: ${person2.name}, 나이: ${person2.age}`);
console.log(`이름: ${person3.name}, 나이: ${person3.age}`);

// readonly 속성은 객체가 생성된 후에는 변경할 수 없는 속성
// 선택적 속성(?은 객체에 있을 수도 있고 없을 수도 있는 속성

interface User {
    readonly id: number;
    name: string;
    age?: number; // age는 선택적 속성
}

let user1: User = {id: 1, name: "김철수"};

let user2: User = {
    id: 2, 
    name: "이영희", 
    age: 28
};

console.log(`이름: ${user1.name}`); 

user2.name = "박상희"; // name 속성은 변경 가능
console.log(`이름: ${user2.name}, 나이: ${user2.age}`);

// user2.id = 3; // 오류: id는 readonly 속성이므로 변경할 수 없습니다.

type ProductCondition = "new" | "used" | "refurbished";

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // 선택적 속성
    condition?: ProductCondition; // 추가적인 속성 허용
}

let product1: Product = {
    id: 1,
    name: "노트북",
    price: 1500000,
    condition: "new"
};

console.log(`상품명: ${product1.name}, 가격: ${product1.price}, 상태: ${product1.condition}`);

