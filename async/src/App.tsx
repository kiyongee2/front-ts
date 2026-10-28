
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Posts from './api-server/Post'
import PostDetail from './api-server/PostDetail'
import AddPost from './api-server/AddPost'
import Counter from './reducer/Counter'
import UserParent from './context/UserParent'
import Bank from './reducer/Bank'

function App() {
  
  return (
    <>
      <section className="app">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path='/posts/add' element={<AddPost />} />
          </Routes>
        </BrowserRouter>  */}
        {/* <Counter /> */}
        {/* <UserParent /> */}
        <Bank />
      </section>
    </>
  )
}

export default App
