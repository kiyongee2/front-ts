import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
  const[title, setTitle] = useState<string>('');
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try{
      const response = 
        await axios.post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed: false
        })
        console.log("할 일 생성:", response.data);
        setTitle('');
        navigate('/');
        
    }catch(error){
      alert("할 일 목록을 가져오는 중 오류가 발생했습니다.");
    }finally{
      setIsLoading(false);
    }
  }

  

  return(
    <div>
      <h2>할 일 추가</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? '로딩 중...' : '추가'}
        </button>
      </form>
    </div>
  )

}

export default AddTodo;