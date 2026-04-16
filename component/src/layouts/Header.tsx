import { NavLink, useNavigate } from "react-router-dom"

interface HeaderProps{
  isLoggedIn: boolean;
  userId: string | null;
  userRole: string | null;
  onLogout: () => void;
  cartCount: number;
}

const Header = ({isLoggedIn, userId, userRole, onLogout, cartCount}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">상품 목록</NavLink>
        <NavLink 
          to="/products/add"
          onClick={(e) => {
            if(userRole != 'admin'){
              e.preventDefault();
              alert("관리자 전용 메뉴입니다.")
            }
          }}
        >상품 등록
        </NavLink>
        <NavLink to="/cart">장바구니({cartCount})</NavLink>
        {isLoggedIn ? (
          <div className="header-user-info">
            <span>{userId}님</span>
            <button
              onClick={() => {
                onLogout();
                navigate('/')
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

