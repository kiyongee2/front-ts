
import { useReducer } from 'react';

function reducer(state: {count: number}, action: {type: string}) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  
  return (
    <div>
      <h2>Counter</h2>
      <button
        onClick={() => dispatch({type: 'increment'})}
      >+</button>
      <span>{state.count}</span>
      <button 
        onClick={() => dispatch({type: 'decrement'})}
      >-</button>
    </div>
  )
}