
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* 상품 추가를 위한 폼 데이터 인터페이스입니다.
   interface File은 브라우저에서 제공하는 타입으로, 
   파일 입력에서 사용됩니다.*/
interface FormData {
  name: string
  price: number
  description: string
  image: File | null  
}

const AddProduct = () => {
  // 상품 추가를 위한 폼 데이터를 관리 상태.
  const [formData, setFormData] = useState<FormData>({
    name: '',
    price: 0,
    description: '',
    image: null
  })

  const navigate = useNavigate();

  // 입력값 변경
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    // 파일 입력인 경우, 파일 객체를 상태에 저장합니다.
    // 일반 텍스트 입력인 경우, 해당 값을 상태에 저장합니다.
    if (name === 'image' && files) {
      setFormData({ ...formData, image: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  // 폼 제출
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 입력값 검증
    if (!formData.name || !formData.price || !formData.description) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    if (formData.price <= 0) { //가격 검증
      alert('가격은 0보다 커야 합니다.');
      return;
    }
    
    console.log('상품 등록 시도:', formData)

    navigate('/products');  // 상품 추가 후 목록 페이지로 이동
  }

  return (
    <div className="add-product">
      <h2>상품 등록</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">상품명</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="상품명을 입력하세요."
              value={formData.name}
              onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="price">가격</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="가격을 입력하세요."
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">설명</label>
          <input
            type="text"
            id="description"
            name="description"
          placeholder="설명을 입력하세요."
          value={formData.description}
          onChange={handleChange}
        />
        </div>
        <div>
          <label htmlFor="image">이미지</label>
          <input 
            type="file" 
            id="image"
            name="image"
            onChange={handleChange}
        />
        </div>
        <button type='submit'>등록</button>
      </form>
    </div>
  )
}

export default AddProduct