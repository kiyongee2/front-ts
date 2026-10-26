
// Props의 타입 정의
const Greet = ({name, age}: {name: string, age: number}) => {
  return <h2>이름: {name}, 나이: {age}</h2>
}

export default Greet

