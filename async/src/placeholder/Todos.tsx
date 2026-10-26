import axios from 'axios';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// 할 일 목록을 표시하는 컴포넌트
export interface Todo{
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 컴포넌트가 마운트될 때 할 일 목록을 가져오는 useEffect 훅을 사용함
  useEffect(() => {
    // JSONPlaceholder API에서 할 일 목록을 가져옴
    const fetchTodos = async () => {
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data);
      }catch(error){
        alert("오류 발생")
      } 
    }
    fetchTodos();
    
    /*axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          setTodos(response.data); // 가져온 데이터를 상태로 설정함
        })
        .catch(err => console.error(err))*/
  },[])

  return (
    <div>
      <h2>할 일 목록</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {/* 각 할 일 항목에 대한 링크를 표시함 */}
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos

