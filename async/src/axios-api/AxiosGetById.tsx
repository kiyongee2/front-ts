
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AxiosGetById = () => {
  const [todo, setTodo] = useState<any>(null)
  const { id } = useParams() // URL에서 id 파라미터를 가져옴

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)    
        setTodo(response.data) // API 응답에서 데이터를 가져와 상태 업데이트
      } catch (error) {
        console.error('Error fetching todo:', error)
      }
    }
    fetchTodo()
  }, [id])

  return (
    <div>
      <h1>AxiosGetById</h1>
      {todo && (
        <div>
          <p>ID: {todo.id}</p>
          <p>Title: {todo.title}</p>
        </div>
      )}
    </div>
  )
}

export default AxiosGetById