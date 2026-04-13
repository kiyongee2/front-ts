import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/todos">할일 목록</NavLink>
        <NavLink to="/todos/new">할일 추가</NavLink>
      </nav>
    </header>
  )
}

export default Header