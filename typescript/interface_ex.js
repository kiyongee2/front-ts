"use strict";
// 인터페이스 - Interface
// 인터페이스는 객체의 구조를 정의하는 데 사용됩니다. 인터페이스를 사용하면 객체가 특정 속성과 메서드를 가지도록 강제할 수 있습니다.
// 자바스크립트 객체
let person = {
    name: "홍길동",
    age: 25,
};
console.log(person.name, person.age);
let person2 = {
    name: "홍길동",
    age: 25, // age 속성이 누락되면 오류 발생
};
let person3 = {
    name: "우영우",
    age: 30,
};
// 출력
console.log(`이름: ${person2.name}, 나이: ${person2.age}`);
console.log(`이름: ${person3.name}, 나이: ${person3.age}`);
let user1 = { id: 1, name: "김철수" };
let user2 = {
    id: 2,
    name: "이영희",
    age: 28
};
console.log(`이름: ${user1.name}`);
user2.name = "박상희"; // name 속성은 변경 가능
console.log(`이름: ${user2.name}, 나이: ${user2.age}`);
let product1 = {
    id: 1,
    name: "노트북",
    price: 1500000,
    condition: "new"
};
console.log(`상품명: ${product1.name}, 가격: ${product1.price}, 상태: ${product1.condition}`);
let student1 = {
    id: 1,
    name: "김선화",
    subjects: [
        { courseId: 101, courseName: "수학", grade: "A" },
        { courseId: 102, courseName: "영어", grade: "B" }, // grade는 선택적이므로 생략 가능
    ]
};
console.log(`학생명: ${student1.name}`);
student1.subjects.forEach(subject => {
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`);
});
