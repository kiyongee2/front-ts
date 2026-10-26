import { useEffect, useRef } from "react"

const TextInputWithFocus = () => {
  // 텍스트 입력에 자동으로 포커스를 설정하는 컴포넌트
  const inputRef = useRef<HTMLInputElement | null>(null);

  // useRef 훅을 사용하여 input 요소에 대한 참조를 생성하고, 이를 통해 포커스를 제어할 수 있음
  useEffect(() => {
    console.log(inputRef);
    inputRef.current?.focus();
  }, [])

  return(
    <div>
      <h2>useRef</h2>
      <input 
        type="text" 
        ref={inputRef}
        placeholder="자동 포커스"
      />
      <button>확인</button>
    </div>
  )
}

export default TextInputWithFocus