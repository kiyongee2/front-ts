
import { useState, useEffect } from 'react';

/*
  flexDirection이 string으로 추론되어 React의 
  FlexDirection 타입과 호환되지 않는 문제입니다. 
  as const를 추가해 리터럴 타입으로 고정하면 해결됩니다.
*/
const style = {
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'navy',
  },
} as const; // 스타일 객체 정의

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={style.container}>
      <h2 style={style.heading}>Current Time</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;