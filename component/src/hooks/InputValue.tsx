
import { useState } from 'react'

const InputValue = () => {
  const [text, setText] = useState<string>('');
  const [num, setNum] = useState<number>(0);

  // 입력값 상태 변경 
  // 이벤트 객체의 타입은 React.ChangeEvent<HTMLInputElement>입니다.
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setText(e.target.value)
  }

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value))
  }

  return (
    <div>
      <h2>입력값 상태 변경</h2>
      <input 
        type="text" 
        value={text}
        onChange={handleTextChange}
        placeholder='글자를 입력하세요'
      />
      <input 
        type="number" 
        value={num}
        onChange={handleNumChange}
        placeholder='숫자를 입력하세요'
      />
      <p>입력된 글자: {text}</p>
      <p>입력된 숫자: {num + 1000}</p>
    </div>
  )
}

export default InputValue