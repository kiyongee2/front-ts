import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Todo } from './Todos'; // Todos.tsx에서 Todo 인터페이스 가져오기

const TodoDetail = () => {
  const {id} = useParams<{id:string}>();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try{
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

