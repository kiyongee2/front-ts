import { useEffect, useRef } from "react"

const TextInputWithFocus = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

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