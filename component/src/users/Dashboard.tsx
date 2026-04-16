
import users from "../data/users.json"
import orders from "../data/orders.json"

import { useLocation } from 'react-router-dom'

const DashBoard = () => {

  const location = useLocation();
  const {username, role} = location.state || {}
  
  console.log(username, role); //admin, admin
  
  return (
    <div className="dashboard">
      <h2>관리자 DashBoard</h2>
      {role === 'admin' && (
        <>
          <div>
            <h3>회원 현황</h3>
            <table className='user-table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>아이디</th>
                  <th>권한</th>
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

          <div>
            <h3>상품 주문 현황</h3>
            <table className="order-table">
              <thead>
                <tr>
                  <th>주문 ID</th>
                  <th>상품명</th>
                  <th>주문자</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    {/* order.userId에 해당하는 유저가 존재하지 않을 수 있으므로 
                      optional chaining 연산자 사용, 런타임 에러 방지 */}
                    <td>{users.find(user => user.id === order.userId)?.username}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

    </div>
  )
}

export default DashBoard
 