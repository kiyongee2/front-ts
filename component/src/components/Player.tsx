
/*const Player = (props:{
  player:{name:string, age:number},
  clickHandler:()=>void
}) => {
  return (
    <div>
      <h1>Player</h1>
      <p>이름: {props.player.name}</p>
      <p>나이: {props.player.age}</p>
      <button onClick={props.clickHandler}>클릭</button>
    </div>
  )
}*/

const Player = ({ player, clickHandler }: { 
  player: { name: string; age: number }; 
  clickHandler: () => void
}) => {

  return (
    <div>
      <h1>Player</h1>
      <p>이름: {player.name}</p>
      <p>나이: {player.age}</p>
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}

export default Player