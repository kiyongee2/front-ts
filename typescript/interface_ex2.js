"use strict";
// 학생 객체 생성
let student1 = {
    id: 1,
    name: "김선화",
    subjects: [
        { courseId: 101, courseName: "수학", grade: "A" },
        { courseId: 102, courseName: "영어", grade: "B" },
    ]
};
// 학생 정보 출력
console.log(`학생명: ${student1.name}`);
student1.subjects.forEach(subject => {
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`);
});
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius; // 원의 면적 계산
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height; // 사각형의 면적 계산
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(`원의 면적: ${circle.area()}`);
console.log(`사각형의 면적: ${rectangle.area()}`);
const manager1 = {
    id: 1,
    name: "홍길동",
    department: "인사부"
};
console.log(`매니저명: ${manager1.name}, 부서: ${manager1.department}`);
class Tesla {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.make} ${this.model}의 시동을 켭니다.`);
    }
}
const myCar = new Tesla("Tesla", "Model S", 2022);
myCar.start(); // Tesla Model S의 시동을 켭니다.
class ConsoleLogger {
    log(message) {
        console.log(`로그: ${message}`); // 콘솔에 로그 메시지 출력
    }
}
const logger = new ConsoleLogger();
logger.log("인터페이스 구현 예제입니다.");
class AdvancedConsoleLogger {
    log(message) {
        console.log(`로그: ${message}`);
    }
    error(message) {
        console.error(`에러: ${message}`);
    }
}
const advancedLogger = new AdvancedConsoleLogger();
advancedLogger.log("일반 로그 메시지입니다.");
advancedLogger.error("에러 로그 메시지입니다.");
const point1 = { x: 10, y: 20 };
const point2 = { x: 30, y: 40 };
console.log(`Point 인터페이스: (${point1.x}, ${point1.y})`);
console.log(`Point 타입 별칭: (${point2.x}, ${point2.y})`);
