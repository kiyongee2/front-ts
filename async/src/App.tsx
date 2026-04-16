
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Todos from './placeholder/Todos'
import TodoDetail from './placeholder/TodoDetail'
import AddTodo from './placeholder/AddTodo'

function App() {

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/todos/:id" element={<TodoDetail />} />
            <Route path="/todos/add" element={<AddTodo />} />
          </Routes>
        </BrowserRouter> 
      </section>
    </>
  )
}

export default App
