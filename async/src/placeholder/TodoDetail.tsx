import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Todo } from './Todos'; // Todos.tsx에서 Todo 인터페이스 가져오기

// 특정 할 일 항목의 상세 정보를 표시하는 컴포넌트
const TodoDetail = () => {
  const {id} = useParams<{id:string}>();
  const [todo, setTodo] = useState<Todo | null>(null);
  const navigate = useNavigate();

  // 컴포넌트가 마운트될 때 해당 할 일 항목의 상세 정보를 가져오는 useEffect 훅을 사용함
  useEffect(() => {
    // 비동기 함수 fetchTodo를 정의함
    const fetchTodo = async () => {
      try{
        // JSONPlaceholder API에서 해당 할 일 항목의 상세 정보를 가져옴
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        setTodo(response.data)
      }catch(error){
        alert("오류 발생")
      }
    }
    fetchTodo();
    /*axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => {
        setTodo(response.data)
      })
      .catch(err => console.log(err));*/
  }, [id]);

  if(!todo) {
    return <div>로딩중...</div>
  }
    
  return (
    <div>
      <h3>할 일 상세 정보</h3>
      <p>ID: {todo.id}</p>
      <p>제목: {todo.title}</p>
      <p>완료 여부: {todo.completed ? '완료' : '미완료'}</p>

      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default TodoDetail;

