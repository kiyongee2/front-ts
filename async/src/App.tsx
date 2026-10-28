
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Posts from './api-server/Post'
import PostDetail from './api-server/PostDetail'
import AddPost from './api-server/AddPost'

function App() {
  
  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path='/posts/add' element={<AddPost />} />
          </Routes>
        </BrowserRouter> 
      </section>
    </>
  )
}

export default App
