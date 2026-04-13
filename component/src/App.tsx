
import './App.css'
import Player from './components/Player'
import Player2 from './components/Player2'
import EventHandler from './components/EventHandler'
import Greet from './components/Greet'
import InputValue from './hooks/InputValue'
import Todos from './todos/Todos'
import ListTest from './hooks/ListTest'
import Todos2 from './todos/Todos2'
import SignIn from './forms/SignIn'

function App() {
  const playerObj = {
    name: '신유빈',
    age: 22,
  }

  const clickHandler = () => {
    console.log('버튼이 클릭되었습니다.')
  }

  return (
    <>
      <section id="center">
        {/* <Greet name="React" /> */}
        {/* <Player player={playerObj} clickHandler={clickHandler} /> */}
        {/* <Player2 player={playerObj} clickHandler={clickHandler} /> */}
        {/* <EventHandler /> */}
        {/* <InputValue /> */}
        {/* <ListTest /> */}
        {/* <Todos /> */}
        {/* <Todos2 /> */}
        <SignIn />
      </section>
    </>
  )
}

export default App
