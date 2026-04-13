
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AxiosGet from './axios-api/AxiosGet'
import AxiosGetById from './axios-api/AxiosGetById'
import Header from './layouts/Header'
import AxiosPost from './axios-api/AxiosPost'

function App() {

  return (
    <>
      <section id="center">
        <Header />
        <Routes>
          <Route path="/" element={<AxiosGet />} />
          <Route path="/todos" element={<AxiosGet />} />
          <Route path="/todos/:id" element={<AxiosGetById />} />
          <Route path="/todos/new" element={<AxiosPost />} />
        </Routes>
      </section>
    </>
  )
}

export default App
