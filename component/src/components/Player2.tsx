
// interface - 객체의 구조를 정의하는 타입
/*interface PlayerProps {
  player: {
    name: string
    age: number
  }
  clickHandler: () => void
}*/

// type - 객체의 구조를 정의하는 타입
type PlayerProps = {
  player: {
    name: string  
    age: number
  }
  clickHandler: () => void
}

const Player2 = ({ player, clickHandler }: PlayerProps) => {
  return (
    <div>
      <h1>Player2</h1>
      <p>이름: {player.name}</p>
      <p>나이: {player.age}</p>
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}

export default Player2