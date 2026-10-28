import UserGrandChild from "./UserGrandChild";

// 중간 컴포넌트: user를 사용하지도, props로 넘기지도 않음
const UserChild = () => {
  return (
    <div className="user-child">
      <h3>UserChild 컴포넌트입니다.</h3>
      <p>(user 데이터를 전달하지 않음)</p>
      <UserGrandChild />
    </div>
  );
};

export default UserChild;