import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type {Todo} from "./Todos"
import axios from "axios";

const TodoDetail = () => {
  const {id} = useParams();
  const [todo, setTodo] = useState<Todo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try{
        const response = 
          await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
          setTodo(response.data);
      }catch(error){
        alert("할 일 목록을 가져오는 중 오류가 발생했습니다.");
      }
    }
    fetchTodo();
  }, [id])

  if(!todo){
    return <div>로딩 중... </div>
  }

  return(
    <div>
      <h3>할 일 상세정보</h3>
      <p>ID: {todo.id}</p>
      <p>제목: {todo.title}</p>
      <p>완료 여부: {todo.completed ? '완료' : '미완료'}</p>

      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>

  )
}

export default TodoDetail;