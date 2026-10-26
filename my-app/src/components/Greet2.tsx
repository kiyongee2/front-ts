// Props의 타입 정의
interface GreetProps {
  name: string;
  age: number;
}

// Props의 타입 정의
const Greet2 = ({name, age}: GreetProps) => {
  return <h2>이름: {name}, 나이: {age}</h2>
}

export default Greet2

