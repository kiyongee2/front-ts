
// Type Alias - 타입 별칭
// Union Type(유니언 타입)
type MemberRole = "admin" | "user";

type Member = {
  id: number;
  name: string;
  age: number;
  role: MemberRole; // MemberRole 참조
};

const member1: Member = {
  id: 1,
  name: "우영우",
  age: 30,
  role: "user"
};

const member2: Member = {
  id: 2,
  name: "김철수",
  age: 25,
  role: "admin"
};

console.log(`회원1: ${member1.name}, 나이: ${member1.age}, \
권한: ${member1.role}`);

console.log(`회원2: ${member2.name}, 나이: ${member2.age}, \
권한: ${member2.role}`);

/*
  type alias는 인터페이스와 유사하지만, 인터페이스는 객체의 구조를 
  정의하는 데 사용되는 반면, type alias는 원시 타입, 유니언 타입, 튜플 등 
  다양한 타입을 정의할 수 있습니다. 또한, type alias는 인터페이스보다 더 유연하게 사용할 수 있지만, 
  인터페이스는 클래스와 함께 사용될 때 더 강력한 기능을 제공합니다.
*/
// Point와 Circle 타입을 정의하는 예시
// Point 타입은 x와 y 좌표를 나타냅니다.
type Point = {
  x: number;
  y: number;
};

// Circle 타입은 중심점과 반지름을 나타냅니다.
type Circle = {
  center: Point; // Circle의 중심점은 Point 타입입니다.
  radius: number;
};

const circle1: Circle = {
  center: { x: 0, y: 0 },
  radius: 5,
};

console.log(`원의 중심: (${circle1.center.x}, ${circle1.center.y}), 
  반지름: ${circle1.radius}`);




