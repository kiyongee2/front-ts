
import { Link } from 'react-router-dom'
import products from '../data/products.json'
import mouse from '../assets/mouse.png'
import keyboard from '../assets/keyboard.png'
import monitor from '../assets/monitor.png'
import usb from '../assets/usb.png'

// 이미지 파일과 상품 데이터의 매핑을 위한 객체입니다.
const imageMap: Record<string, string> = {
  'mouse.png': mouse,
  'keyboard.png': keyboard,
  'monitor.png': monitor,
  'usb.png': usb,
}

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>상품 목록</h2>
      <div className='card-container'>
        {products.map((product: any) => (
            <Link to={`/products/${product.id}`}>
              <div key={product.id} className="card">
                <img 
                  src={imageMap[product.image]} 
                  alt={product.name} 
                  className="product-image" 
                />
                <div className='card-body'>
                  <h3 className='card-title'>{product.name}</h3>
                  <p className='card-text'>가격: {product.price}원</p>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductList