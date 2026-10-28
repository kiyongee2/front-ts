
import './App.css'
import Box from './children/Box'
import Card from './children/Card'
import Memo from './stroage/Memo'
import Todos from './stroage/Todos'


function App() {
  const playerObj = {
    name: '안세영',
    age: 24,
  }

  const clickHandler = () => {
    alert('버튼이 클릭되었습니다.')
  }

  return (
    <>
      <section className="app">
        {/* <Card title="공지사항">
          <p>내일은 단풍 구경을 갑니다.</p>
        </Card>

        <Card title='오늘의 할 일'>
          <ul>
            <li>Props 타입 복습</li>
            <li>children 예제 실습</li>
          </ul>
          <button>확인</button>
        </Card> */}
        <Memo />
        <Todos />
      </section>
    </>
  )
}

export default App

