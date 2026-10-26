import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import DrinkList from './components/DrinkList'
import Greet from './components/Greet'
import InputValueState from './components/InputValueState'
import Player from './components/Player'
import Todos from './placeholder/Todos'
import TodoDetail from './placeholder/TodoDetail'
import AddTodo from './placeholder/AddTodo'

function App() {
  const playerObj = {
    name: "신유빈",
    age: 22
  }

  const clickHandler = () => {
    alert("버튼이 클릭되었습니다!");
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Todos />} />
            <Route path='/todos/:id' element={<TodoDetail />} />
            <Route path='/todos/add' element={<AddTodo />} />
          </Routes>
        </BrowserRouter>
        {/* <Greet name="React" /> */}
        {/* <Player player={playerObj} clickHandler={clickHandler} /> */}
        {/* <Counter /> */}
        {/* <InputValueState /> */}
        {/* <DrinkList /> */}
      </section>
    </>
  )
}

export default App
