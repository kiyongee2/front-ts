import { useContext } from "react";
import { UserContext } from "./UserContext";


// 손자 컴포넌트: Context에서 직접 user를 받음
const UserGrandChild = () => {
  // user의 타입이 User로 자동 추론 → user.name, user.age 자동완성
  const user = useContext(UserContext);

  return (
    <div className="user-grandchild">
      <h4>UserGrandChild 컴포넌트입니다.</h4>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
    </div>
  );
};

export default UserGrandChild;