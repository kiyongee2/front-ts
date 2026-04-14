
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import users from '../data/users.json'

interface SignInForm {
  username: string
  password: string
}

const SignIn = () => {
  const [formData, setFormData] = useState<SignInForm>({
    username: '',
    password: '',
  })

  const navigate = useNavigate();

  // 입력 필드 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  }

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 입력값 추출
    const { username, password } = formData 

    // 간단한 유효성 검사
    if (!username || !password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.')
      return
    }

    // 로그인 일치 여부
    const user = users.find(user => 
      user.username === username && user.password === password)
    if (!user) {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.')
      return
    }
    console.log('로그인 시도:', formData)

    if (user.role === 'admin') {
      // 관리자 로그인 시 대시보드로 이동하면서 사용자 정보 전달
      navigate('/dashboard', { state: { username: user.username, role: user.role } })
    } else {
      navigate('/products')
    }
  }

  return (
    <div className='signin'>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">아이디</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="아이디를 입력하세요." 
            value={formData.username}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="비밀번호를 입력하세요." 
            value={formData.password}
            onChange={handleChange} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}

export default SignIn