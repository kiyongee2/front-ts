
type Todo = {
  id: number
  text: string
  completed?: boolean
}

type TodoItemProps = {
  todos: Todo[]
  toggleTodo: (id: number) => void
}

const TodoItem = ({ todos, toggleTodo }: TodoItemProps) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id} 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItem