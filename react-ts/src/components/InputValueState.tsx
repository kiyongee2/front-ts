import { useState } from "react"

const InputValueState = () => {
  // 입력된 텍스트 상태 
  const [text, setText] = useState<string>("");

  // 입력된 텍스트 상태 변경 이벤트 핸들러
  const handleTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return(
    <div>
      <h3>글자 입력</h3>
      <input 
        type="text" 
        value={text}
        onChange={handleTextChange}
      />
      <h4>입력된 글자: {text}</h4>
    </div>
  )
}

export default InputValueState;