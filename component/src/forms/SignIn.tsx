
import { useState } from 'react'

// 임시 사용자 데이터
const users = [
  { id: 'user1', password: 'pass1' },
  { id: 'user2', password: 'pass2' },
  { id: 'user3', password: 'pass3' },
]

// 로그인 폼 데이터 타입 정의
type SignInFormData = {
  id: string
  password: string
}

const SignIn = () => {
  // const [id, setId] = useState<string>('')
  // const [password, setPassword] = useState<string>('')
  const [formData, setFormData] = useState<SignInFormData>({ id: '', password: '' })
  const { id, password } = formData
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  // 로그인 처리 함수
  const handleSignIn = () => {
    const user = users.find((user) => user.id === id && user.password === password)
    if (user) {
      alert('로그인 성공')
      setIsLoggedIn(true)
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.')
    }
  }

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // 페이지 새로고침 방지
    handleSignIn()
  }

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="아이디를 입력하세요." 
          value={id} 
          onChange={(e) => setFormData({ ...formData, id: e.target.value })} />
        <input 
          type="password" 
          placeholder="비밀번호를 입력하세요." 
          value={password} 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} />  
        <button type="submit">로그인</button>
      </form>
      {isLoggedIn && <p>로그인 상태입니다.</p>}
    </div>
  )
}

export default SignIn