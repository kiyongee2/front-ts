import { useParams, useNavigate } from 'react-router-dom'
import products from '../data/products.json'
import {imageMap} from './ProductList'
import type { CartItem } from './Cart'

interface ProductInfoProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void
}

const ProductInfo = ({ onAddToCart }: ProductInfoProps) => {
  const { id } = useParams() // URL에서 상품 ID를 가져옵니다.
  const navigate = useNavigate()

  // products 배열에서 해당 ID를 가진 상품을 찾습니다.
  // id는 문자열이므로 Number로 변환하여 비교합니다.
  const product = products.find((p: any) => p.id === Number(id))

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>
  }

  return (
    <div className="product-info">
      <h2>{product.name}</h2>
      <div className='product-details'>
        <img 
          src={imageMap[product.image]} 
          alt={product.name} 
          className="product-image" 
        />
        <div className="product-content">
          <p>{product.description}</p>
          <p className='price'>가격: {product.price}원</p>
          <div className="product-buttons">
            <button 
              className="btn-list" 
              onClick={() => navigate('/products')}
            >
              목록으로
            </button>
            <button className="btn-cart">장바구니에 추가</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

{/* <button className="btn-cart" onClick={() => {
              onAddToCart({ id: product.id, name: product.name, price: product.price, image: product.image })
              alert(`${product.name}이(가) 장바구니에 추가되었습니다.`)
            }}>장바구니에 추가</button> */}