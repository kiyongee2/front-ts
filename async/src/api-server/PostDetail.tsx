import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import type {Post} from "./Post"
import axios from "axios";

const PostDetail = () => {
  const {id} = useParams<{id: string}>();
  const [post, setPost] = useState<Post | null>(null)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try{
        const response = 
          await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
      }catch(error){
        alert("게시글 정보를 가져오는 중 오류가 발생했습니다.");
      }
    }
    fetchPost();
  }, [id])

  if(!post)
    return <div>로딩 중...</div>

  // 삭제 함수
  const deletePost = async (id: number) => {
    try{  
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      alert("게시글이 삭제되었습니다.");
      navigate("/");
    }catch(error){
      alert("게시글 삭제 중 오류가 발생했습니다.");
    }
  }

  return(
    <div>
      <h2>게시글 상세 보기</h2>
      <p>번호: {post.id}</p>
      <p>작성자 ID: {post.userId}</p>
      <p>제목: {post.title}</p>
      <p>내용: {post.body}</p>

      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <button onClick={() => deletePost(post.id)}>삭제</button>
    </div>
  )
}

export default PostDetail;