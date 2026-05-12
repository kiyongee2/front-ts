
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/counterSlice.js";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state: { counter: { value: number } }) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(amount));
        setAmount(0); // 입력 필드 초기화
    };

    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>
              <input 
                type="number" 
                placeholder="Enter amount" 
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <button onClick={handleIncrementByAmount}>Add Amount</button>
            </div>
        </div>
    )
}

export default Counter;