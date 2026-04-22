
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export interface Todo{
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          setTodos(response.data);
        })
        .catch(err => console.error(err))
  },[])

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

