
//return이 있는 함수
/*function sub(x: number, y: number): number {
  return x - y;
}*/

// 익명 함수
/*const sub = function (x: number, y: number): number {
  return x - y;
};*/

// 화살표 함수
const sub = (x: number, y: number): number => {
  return x - y;
};

const result = sub(10, 5);
console.log(`10 - 5 = ${result}`);

// return이 없는 함수
/*function greet(name: string): void{
  console.log(`Hello, ${name}`);
}*/

const greet = (name: string): void => {
  console.log(`Hello, ${name}`);
}

greet('TypeScript');

//객체를 반환하는 함수
/*function createUser(id:number, name:string):{id: number; name: string}{
  return {id, name};
}*/

const createUser = (id:number, name:string): 
    {id: number; name: string} => {
  return {id, name};
}

const user_kim = createUser(1, "김기용");
console.log(`사용자 ID: ${user_kim.id}, 이름: ${user_kim.name}`);


