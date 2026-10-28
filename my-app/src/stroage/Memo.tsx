import React, { useEffect, useState } from "react";

// 새로고침해도 메모가 유지되도록 localStorage를 
// 사용하여 메모를 저장하고 불러오는 기능을 구현한 컴포넌트입니다.
const Memo = () => {
  const [memo, setMemo] = useState<string>(() => {
    // getItem(key) 메서드는 localStorage에서 key에 해당하는 값을 가져옵니다.
    // ?? "" 는 null 병합 연산자로, localStorage에 값이 없으면 빈 문자열을 반환합니다.
    return localStorage.getItem("memo") ?? "";
  });

  //메모가 바뀔때 마다 저장
  useEffect(() => {
    //setItem(key, value) 메서드는 localStorage에 key에 해당하는 값을 value로 저장합니다.
    localStorage.setItem("memo", memo);
  }, [memo]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  }

  return(
    <div>
      <h2>메모장</h2>
      <textarea 
        value={memo}
        onChange={handleChange}
        placeholder="메모를 입력하세요"
        rows={4}
        cols={40}
      />
      <p>글자 수: {memo.length}</p>
      <button onClick={() => setMemo("")}>메모 초기화</button>
    </div>
  )
}

export default Memo;