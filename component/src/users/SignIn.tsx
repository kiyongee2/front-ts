
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import users from '../data/users.json'

interface SignInForm{
  username: string;
  password: string;
}

interface SignInProps{
  onLogin: (username: string, role: string) => void;
}

const SignIn = ({onLogin}: SignInProps) => {
  const [formData, setFormData] = useState<SignInForm>({
    username: '',
    password: '',
  })

  //로그인 결과 상태(success/fail)
  const [loginResult, setLoginResult] = useState<string>('')

  const navigate = useNavigate();

  // 입력 필드 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
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
  
    //로그인 일치 여부
    const user = users.find(user => user.username === username && 
        user.password === password)

    if(!user){
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      setLoginResult('fail')
      return;
    }
    console.log("로그인 시도:", formData);
    onLogin(user.username, user.role);

    //로그인 성공시 권한에 따라 페이지 이동
    if(user.role === 'admin'){
      setLoginResult('success');
      navigate('/dashboard', {state: {username: user.username, role: user.role}});
    }
    else{
      setLoginResult('success');
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
      {/* 아직 계정이 없으신가요? 회원가입 링크 추가 가능 */}
      <p className='signup-link'>
        아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </p>

      {loginResult === 'fail' && <p className='error'>로그인 실패, 다시 시도하세요</p>}
    </div>
  )
}

export default SignIn