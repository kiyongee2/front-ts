
import './App.css'

import Greet from './tests/Greet'
import Player from './tests/Player'
import InputValueState from './tests/InputValueState'

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
        <Greet name="React" />
        <Player player={playerObj} clickHandler={clickHandler} />
        <InputValueState />
      </section>
    </>
  )
}

export default App

