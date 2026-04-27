import { useEffect, useState } from "react"
import axios from 'axios'

export interface Todo{
  id: number;
  title: string;
  completed: boolean;
}

const PlaceHolder = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data);
      }catch(error){
        alert("할 일 목록을 가져오는 중 오류가 발생했습니다.")
      }
    }
    fetchTodos();
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