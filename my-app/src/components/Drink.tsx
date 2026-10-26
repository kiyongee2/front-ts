import { useState } from 'react'
import DrinkList from './DrinkList';

const Drink = () => {
  const [drinks, setDrinks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // 입력값 변경 핸들러
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  // 음료 추가 함수
  const addDrink = () => {
    if(inputValue.trim() === ""){
      alert("음료 이름을 입력하세요.");
      return;
    }
    // 추가한 음료를 기존 배열에 추가
    setDrinks([...drinks, inputValue]);
    setInputValue(""); //입력값 초기화
  }

  return (
    <div>
      <h2>Drink List</h2>
      <input 
        type="text" 
        placeholder='음료 이름을 입력하세요'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={addDrink}>음료 추가</button>
      {/* <p>입력값: {inputValue}</p> */}

      {/* 음료 출력 */}
      <DrinkList drinks={drinks} />

      {/* <ul>
        {drinks.map((drink, index) => (
          <li key={index}>{drink}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Drink

