// Union type 정의
type MemberRole = "user" | "admin";

// type 정의
type Member = {
  id: number;
  name: string;
  age?: number;
  role: MemberRole;
}

// 객체 생성
const member1: Member = {
  id: 1,
  name: "Alice",
  role: "user"
};

console.log(`ID: ${member1.id}, Name: ${member1.name}, Role: ${member1.role}`);