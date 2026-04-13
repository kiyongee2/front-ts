
const EventHandler = () => {
  // const clickHandler = () => {
  //   alert('버튼이 클릭되었습니다.')
  // }

  const clickHandler = (msg: string) => {
    alert(msg)
  }

  return (
    <div>
      <h1>EventHandler</h1>
      {/* <button onClick={clickHandler}>클릭</button> */}
      {/* 인라인 핸들러의 매개변수 */}
      <button onClick={() => clickHandler('Good Luck!')}>Click Me</button>
    </div>
  )
}

export default EventHandler