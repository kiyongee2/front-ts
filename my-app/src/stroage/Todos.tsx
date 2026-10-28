import { useEffect, useState } from "react";

// 새로고침해도 할 일 목록이 유지되도록 localStorage를
// 사용하여 할 일 목록을 저장하고 불러오는 기능을 구현한 컴포넌트입니다.
export type Todo = {
  id:number;
  text: string;
  completed: boolean;
}

// localStorage에서 todos를 불러오는 함수입니다.
const loadTodos = (): Todo[] => {
  try{
    const saved = localStorage.getItem("todos");
    // JSON.parse() 메서드는 JSON 문자열을 JavaScript 객체로 변환합니다.
    // as Todo[] 는 TypeScript의 타입 단언으로, JSON.parse()의 반환값이 Todo[] 타입임을 명시합니다.
    return saved ? (JSON.parse(saved) as Todo[]) : [];
  }catch{
    return [];
  }
}

const Todos = () => {
  // useState() 훅은 컴포넌트의 상태를 관리할 수 있도록 해줍니다.
  // loadTodos() 함수를 초기값으로 사용하여 todos 상태를 초기화합니다.
  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [inputValue, setInputValue] = useState<string>("");

  // todos가 바뀔때 마다 저장
  // useEffect() 훅은 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 해줍니다.
  // JSON.stringify(todos) 메서드는 JavaScript 객체를 JSON 문자열로 변환합니다.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if(!inputValue.trim())
      return;
    setTodos([...todos, {id: Date.now(),text: inputValue,completed: false}]);
    setInputValue("");
  }

  return (
    <div>
      <h2>할 일 목록</h2>
      <input 
        type="text" 
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