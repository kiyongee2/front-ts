
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTodo = () => {
  const [title, setTitle] = useState<string>('');
  // 로딩 상태 추가
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(!title.trim()) {
      alert('할 일 제목을 입력하세요.');
      return;
    }

    setIsLoading(true); // 로딩 시작

    try {
      const response = 
        await axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false,
      })
      console.log('할 일 생성됨:', response.data)
      setTitle(''); // 입력 필드 초기화
      alert('할 일이 성공적으로 추가되었습니다!'); // 성공 메시지 표시
      navigate('/'); // 할 일 목록 페이지로 이동
    } catch (error) {
      alert('할 일 추가 중 오류가 발생했습니다.'); 
    } finally {
      setIsLoading(false); // 성공하든 실패하든 로딩 종료
    }
  }

  return (
    <div>
      <h2>할 일 추가</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        {/* isLoading이 true일 때 -> 버튼이 비활성화 (클릭 불가) */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? '로딩 중...' : '추가'}
        </button>
      </form>
    </div>
  )
}

export default AddTodo
