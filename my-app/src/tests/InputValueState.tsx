
import {useState} from 'react'

const InputValueState = () => {
  const [text, setText] = useState<string>('')

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return(
    <div>
      <h2>입력값 상태</h2>
      <input 
        type="text" 
        value={text}
        onChange={handleTextChange}
      />
      <p>입력된 글자: {text}</p>
    </div>
  )
}

export default InputValueState