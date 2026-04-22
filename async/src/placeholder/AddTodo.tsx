
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTodo = () => {
  const [title, setTitle] = useState<string>('');
  const navigate = useNavigate();

  //로딩 상태 관리
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //폼 제출 핸들러 함수
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!title.trim()){
      alert("할일 입력");
      return;
    }

    setIsLoading(true); //로딩 시작
    
    try{
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      console.log("할 일 생성됨", response.data);
      setTitle('');
      navigate('/');
    }catch(error){
      alert("오류 발생!");
    }finally{
      setIsLoading(false);
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
          placeholder='할일 입력'
        />
        <button type='submit' disabled={isLoading}>
          {isLoading ? '로딩 중' : '추가'}
        </button>
      </form>
    </div>
  )
}

export default AddTodo
