import { useEffect, useState } from "react"
import axios from 'axios'

// JSONPlaceholder에서 할 일 목록을 가져와 표시하는 컴포넌트
export interface Todo{
  id: number;
  title: string;
  completed: boolean;
}

const PlaceHolder = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 컴포넌트가 마운트될 때 JSONPlaceholder에서 할 일 목록을 가져오는 useEffect 훅
  useEffect(() => {
    const fetchTodos = async () => {
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data);
      }catch(error){
        alert("할 일 목록을 가져오는 중 오류가 발생했습니다.")
      }
    }
    fetchTodos();  // 할 일 목록 가져오기 함수 호출
  }, [])

  return(
    <div>
      <h2>PlaceHolder Json</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PlaceHolder