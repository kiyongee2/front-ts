
import axios from 'axios'
import { useState } from 'react'

const AxiosPost = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      })
      console.log('Todo created:', response.data)
    } catch (error) {
      console.error('Error creating todo:', error)
    }
  }

  return (
    <div>
      <h1>할 일 추가</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
    </div>
  )
}

export default AxiosPost
