import { UserContext} from "./UserContext";
import type { User } from "./UserContext";
import UserChild from "./UserChild";

const UserParent = () => {
  // user 객체는 User 타입
  const user: User = {
    name: "오상식",
    age: 45,
  };

  return (
    <div className="user-parent">
      <h2>UserParent 컴포넌트입니다.</h2>
      {/* value에는 User 타입의 값만 넣을 수 있음 */}
      <UserContext.Provider value={user}>
        {/* props 전달 없음 */}
        <UserChild />
      </UserContext.Provider>
    </div>
  );
};

export default UserParent;