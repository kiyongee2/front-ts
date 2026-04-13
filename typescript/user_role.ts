
// 1. 유니온 타입을 이용한 '권한' 정의 (특정 문자열만 허용)
type UserRole = "admin" | "user";

// 2. 객체 구조 정의 (Type Alias)
type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole; // UserRole 참조
};

// 3. 정의한 타입을 변수에 적용
const newUser: User = {
  id: 1,
  name: "관리자",
  email: "admin@test.com",
  role: "admin"   // 'guest' 사용하면 오류 발생  
};

console.log(`${newUser.name}님, 환영합니다! \
당신의 권한은 ${newUser.role}입니다.`);

