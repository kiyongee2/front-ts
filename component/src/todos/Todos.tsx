
import { useState } from 'react'
import TodoList from './TodoList'

// Todo 타입 정의
export type Todo = {
  id: number
  text: string
  completed: boolean
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '리액트 공부하기', completed: false },
    { id: 2, text: '타입스크립트 배우기', completed: false },
  ])
  const [inputValue, setInputValue] = useState('')

  // 할 일 추가 함수
  const addTodo = () => {
    if (!inputValue.trim()) return // 빈 문자열 입력 방지

    setTodos([...todos, { 
      id: Date.now(), // id 중복 방지
      text: inputValue, 
      completed: false 
    }])
    setInputValue('') // 입력 필드 초기화
  }

  // 할 일 완료 토글 함수
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className="todo-container">
      <h2>To-do List</h2>
      <input 
        type="text" 
        placeholder="할 일을 입력하세요." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>

      {/* 할 일 목록 */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}

export default Todos