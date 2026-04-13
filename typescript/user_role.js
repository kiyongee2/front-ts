"use strict";
// 3. 정의한 타입을 변수에 적용
const newUser = {
    id: 1,
    name: "관리자",
    email: "admin@test.com",
    role: "admin" // 'guest'와 같은 다른 문자열을 사용하면 오류 발생  
};
console.log(`${newUser.name}님, 환영합니다! \
당신의 권한은 ${newUser.role}입니다.`);
