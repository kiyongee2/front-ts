import axios from 'axios'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

// 할 일 인터페이스 정의
export interface Todo {
  id: number
  title: string
  completed: boolean
}

const Todos = () => {
  // API에서 할 일 목록을 가져와 상태로 관리
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = 
          await axios.get('https://jsonplaceholder.typicode.com/todos')
        setTodos(response.data) // API 응답에서 데이터를 가져와 상태 업데이트
      } catch (error) {
        alert('할 일 목록을 가져오는 중 오류가 발생했습니다.'); 
      }
    }
    fetchTodos() // 컴포넌트가 마운트될 때 할 일 목록을 가져옴
  }, [])

  return (
    <div>
      <h2>할 일 목록</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos

