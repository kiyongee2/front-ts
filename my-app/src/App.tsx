
import './App.css'
import Counter from './components/Counter'
import DrinkList from './components/DrinkList'
import Greet from './components/Greet'
import InputValueState from './components/InputValueState'
import InputValue from './components/InputValueState'
import Player from './components/Player'
import Player2 from './components/Player2'


function App() {
  const playerObj = {
    name: '신유빈',
    age: 22,
  }

  const clickHandler = () => {
    alert('버튼이 클릭되었습니다.')
  }

  return (
    <>
      <section id="center">
        <h2>TypeScript 기반 React 프로젝트</h2>
        {/* <Greet name="React" /> */}
        {/* <Player player={playerObj} clickHandler={clickHandler} /> */}
        {/* <Counter /> */}
        {/* <DrinkList /> */}
        <InputValueState />
      </section>
    </>
  )
}

export default App

