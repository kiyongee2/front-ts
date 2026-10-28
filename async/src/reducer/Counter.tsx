import { useReducer } from "react"

// 카운터 상태를 관리하는 리듀서와 액션 타입을 정의함
// 상태 타입을 정의함
interface CounterState{
  count: number;
}

// 액션 타입을 정의함
type CounterAction = 
  {type: "INCREMENT"} | 
  {type: "DECREMENT"} | 
  {type: "SET", value: number}

  // 리듀서 함수를 정의함
function counterReducer(state: CounterState, action: CounterAction) : CounterState{
  switch(action.type){
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "SET":
      return { count: action.value };
    default:
      return state;
  }
}

const Counter = () => {
  // useReducer 훅을 사용하여 상태와 디스패치 함수를 가져옴
  const [state, dispatch] = useReducer(counterReducer, {count: 0});

  return(
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+1</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-1</button>
      <button onClick={() => dispatch({type: "SET", value: 0})}>0으로</button>
    </div>
  )
}

export default Counter;