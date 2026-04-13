
import { useState } from 'react'

const DrinkList = () => {
  const [drinks, setDrinks] = useState<string[]>(['콜라', '사이다', '맥주'])

  // 음료 추가
  const addDrink = () => {
    const newDrink = prompt('추가할 음료를 입력하세요.') 
    if (newDrink) {
      setDrinks([...drinks, newDrink])
    }
  }

  return (
    <div>
      <h2>Drink List</h2>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>{drink}</li>
        ))}
      </ul>
      <button onClick={addDrink}>음료 추가</button>
    </div>
  )
}

export default DrinkList

