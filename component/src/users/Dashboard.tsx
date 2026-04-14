import { useNavigate, useLocation } from 'react-router-dom'
import users from '../data/users.json'

const Dashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { username, role } = location.state || {}

  if (!username) {
    navigate('/signin')
    return null
  }

  const handleLogout = () => {
    navigate('/signin')
  }

  return (
    <div className="dashboard">
      <h2>관리자 대시보드</h2>
      <p>{username}님, 환영합니다. ({role})</p>

      {role === 'admin' ? (
        <div>
          <h3>회원 목록</h3>
          <table border={1} cellPadding={8}>
            <thead>
              <tr>
                <th>ID</th>
                <th>아이디</th>
                <th>역할</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>관리자 권한이 필요합니다.</p>
      )}

      <button onClick={handleLogout}>로그아웃</button>
    </div>
  )
}

export default Dashboard
