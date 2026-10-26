
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface Todo{
  id: number
  title: string 
  completed: boolean 
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data)
      }catch(error){
        alert("할 일 목록을 가져오는 중 오류가 발생했습니다.");
      }
    }
    fetchTodos()
  }, [])

  return (
    <div>
      <h3>할 일 목록</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos;