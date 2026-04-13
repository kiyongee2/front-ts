
import { useState } from 'react'

const Counter = () => {
  //<number>은 count가 number 타입임을 명시적으로 지정하는 제네릭 문법입니다.
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h3>Counter</h3>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  )
}

export default Counter

