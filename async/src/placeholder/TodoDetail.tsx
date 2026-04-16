import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Todo } from './Todos'; // Todos.tsx에서 Todo 인터페이스 가져오기

const TodoDetail = () => {
  // /todos/2 => id = "2"(string)
  const { id } = useParams<{ id: string }>(); // URL에서 id 파라미터 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 hook
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = 
            await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        setTodo(response.data); // API 응답에서 데이터를 가져와 상태 업데이트
      } catch (error) {
        alert('할 일 정보를 가져오는 중 오류가 발생했습니다.'); // 오류 메시지 표시
      }
    }
    fetchTodo();
  }, [id]);

  // todo가 아직 로딩되지 않았을 때 로딩 메시지 표시
  if (!todo) return <div>로딩 중...</div>;

  return (
    <div>
      <h3>할 일 상세 정보</h3>
      <p>ID: {todo.id}</p>
      <p>제목: {todo.title}</p>
      <p>완료 여부: {todo.completed ? '완료' : '미완료'}</p>
      
      {/* useNavigate를 이용한 뒤로가기 버튼 */}
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default TodoDetail;

