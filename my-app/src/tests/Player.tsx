
type PlayerProps = {
  player: {
    name: string
    age: number
  }
  clickHandler: () => void
}

const Player = ({player, clickHandler}: PlayerProps) => {

  return(
    <div>
      <h2>Player</h2>
      <p>이름: {player.name}</p>
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}

export default Player