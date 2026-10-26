
import './App.css'
import Drink from './components/Drink'
import Greet from './components/Greet'
import Greet2 from './components/Greet2'
import InputValueState from './components/InputValueState'
import Player from './components/Player'


function App() {
  const playerObj = {
    name: '안세영',
    age: 24,
  }

  const clickHandler = () => {
    alert('버튼이 클릭되었습니다.')
  }

  return (
    <>
      <section className="app">
        {/* <Greet name="도경수" age={33} /> */}
        {/* <Greet2 name="도경수" age={33} /> */}
        {/* <Player 
          player={playerObj} 
          clickHandler={clickHandler} 
        /> */}
        {/* <InputValueState /> */}
        <Drink />
      </section>
    </>
  )
}

export default App

