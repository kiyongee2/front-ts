
// 학점 정의
type Grade = "A" | "B" | "C" | "D" | "F";

// 과목 정의
interface Course {  
    courseId: number;
    courseName: string;
    grade?: Grade; // 선택적 속성
}

// 학생 정의
interface Student {
    id: number;
    name: string;
    subjects: Course[]; // 학생이 수강하는 과목 목록
}

// 학생 객체 생성
let student1: Student = {
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

// implement 구현
interface Shape {
    area(): number; // 면적 계산 메서드
}

class Circle implements Shape {
    constructor(public radius: number) {}
    area(): number {
        return Math.PI * this.radius * this.radius; // 원의 면적 계산
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
    area(): number {
        return this.width * this.height; // 사각형의 면적 계산
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(`원의 면적: ${circle.area()}`);
console.log(`사각형의 면적: ${rectangle.area()}`);

// 인터페이스 확장
interface Employee {
    id: number;
    name: string;
}

interface Manager extends Employee {
    department: string; // 부서 정보 추가
}

const manager1: Manager = {
    id: 1,
    name: "홍길동",
    department: "인사부"
};

console.log(`매니저명: ${manager1.name}, 부서: ${manager1.department}`);

// implements 키워드를 사용하여 인터페이스 구현
interface Car{
    make: string;
    model: string;
    year: number;
    start(): void; // 시동 걸기 메서드
}

class Tesla implements Car {
    constructor(public make: string, public model: string, public year: number) {}
    start(): void {
        console.log(`${this.make} ${this.model}의 시동을 켭니다.`);
    }
}

const myCar = new Tesla("Tesla", "Model S", 2022);
myCar.start(); // Tesla Model S의 시동을 켭니다.

interface Logger {
    log(message: string): void; // 로그 메시지 출력 메서드
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`로그: ${message}`); // 콘솔에 로그 메시지 출력
    } 
}

const logger = new ConsoleLogger();
logger.log("인터페이스 구현 예제입니다.");

interface AdvancedLogger extends Logger {
    error(message: string): void; // 에러 메시지 출력 메서드 추가
}

class AdvancedConsoleLogger implements AdvancedLogger {
    log(message: string): void {
        console.log(`로그: ${message}`);
    }
    error(message: string): void {
        console.error(`에러: ${message}`);
    }
}

const advancedLogger = new AdvancedConsoleLogger();
advancedLogger.log("일반 로그 메시지입니다.");
advancedLogger.error("에러 로그 메시지입니다.");

// 인터페이스와 타입 별칭의 차이점
interface Point {
    x: number;
    y: number;
}

type PointType = {
    x: number;
    y: number;
};

const point1: Point = { x: 10, y: 20 };
const point2: PointType = { x: 30, y: 40 };

console.log(`Point 인터페이스: (${point1.x}, ${point1.y})`);
console.log(`Point 타입 별칭: (${point2.x}, ${point2.y})`);

