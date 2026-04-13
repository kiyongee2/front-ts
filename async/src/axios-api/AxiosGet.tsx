import axios from 'axios'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const AxiosGet = () => {
  const [todos, setTodos] = useState<any[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setTodos(response.data) // API 응답에서 데이터를 가져와 상태 업데이트
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }
    fetchTodos()
  }, [])


  return (
    <div>
      <h1>할 일 목록</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AxiosGet