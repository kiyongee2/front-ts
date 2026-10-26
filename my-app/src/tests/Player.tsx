
/*type PlayerProps = {
  player: {
    name: string
    age: number
  }
  clickHandler: () => void
}*/

// 플레이어 컴포넌트의 props 타입 정의
interface PlayerProps{
  player: {
    name: string;
    age: number;
  }

  clickHandler: () => void;  // 클릭 이벤트 핸들러 함수
}

const Player = ({player, clickHandler}: PlayerProps) => {

  return(
    <div>
      <h2>Player</h2>
      <p>이름: {player.name}</p>
      <p>나이: {player.age}</p>
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}

export default Player