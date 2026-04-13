
import { useState } from 'react'

const Todos = () => {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([
    { id: 1, text: '리액트 공부하기' },
    { id: 2, text: '타입스크립트 배우기' },
  ])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, { id: todos.length + 1, text: inputValue }])
      setInputValue('')
    }
  }

  return (
    <div> 
      <h1>Todo List</h1>
      <input 
        type="text" 
        placeholder="할 일을 입력하세요." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos