
// 기본 타입
// string - 문자열
let message: string = "Hello, TypeScript!";
console.log(message);

// number - 숫자
let age: number = 30;
console.log(`나이: ${age}`);

// boolean - 불리언(참/거짓)
let isStudent: boolean = true;
console.log(`학생인가요? ${isStudent}`);

// 배열 - Array
let carts: string[] = ["사과", "바나나", "오렌지"];
console.log(`장바구니: ${carts.join(", ")}`);

let carts2: Array<string> = ["사과", "바나나", "오렌지"];
console.log(`장바구니 2: ${carts2.join(", ")}`);


