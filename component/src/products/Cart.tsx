import { Link } from 'react-router-dom'
import { imageMap } from './ProductList'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface CartProps {
  cartItems: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
}

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="cart">
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>장바구니가 비어있습니다.</p>
          <Link to="/products">상품 목록으로 이동</Link>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>이미지</th>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
                <th>소계</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={imageMap[item.image]} alt={item.name} className="cart-image" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()}원</td>
                  <td>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                    <span className="cart-quantity">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </td>
                  <td>{(item.price * item.quantity).toLocaleString()}원</td>
                  <td>
                    <button onClick={() => onRemoveItem(item.id)} className="remove-btn">삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p>총 금액: <strong>{totalPrice.toLocaleString()}원</strong></p>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
