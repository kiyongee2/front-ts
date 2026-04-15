import { NavLink, useNavigate } from "react-router-dom"

// Header 컴포넌트 Props 타입 정의
interface HeaderProps {
  isLoggedIn: boolean;
  userId?: string | null; // 로그인한 사용자 ID
  userRole?: string | null; // 로그인한 사용자 권한
  onLogout: () => void;
}

const Header = ({ isLoggedIn, userId, userRole, onLogout }: HeaderProps) => {
  const navigate = useNavigate(); 

  return (
    <header className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">상품 목록</NavLink>
        <NavLink to="/products/add" onClick={(e) => {
          if (userRole !== 'admin') {
            e.preventDefault(); // 기본 링크 이동을 막고 경고 메시지를 표시
            alert('관리자 전용 메뉴입니다.');
          }
        }}>상품 등록</NavLink>
        {isLoggedIn ? (
          <div className="header-user-info">
            <span>{userId}님</span>
            <button 
              onClick={() => {
                onLogout();
                navigate('/');
              }}
              className="logout-btn"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <NavLink to="/signin">로그인</NavLink>
        )}
      </nav>
    </header>
  )
}

export default Header

