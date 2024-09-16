import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Dashboard } from './pages/Dashboard'
import Users from './pages/Users'
import Posts from './pages/Posts'
import Todos from './pages/Todos'
import Albums from './pages/Albums'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/users' element={<Users />}></Route>
      <Route path='/posts' element={<Posts />}></Route>
      <Route path='todos' element={<Todos />}></Route>
      <Route path='/albums' element={<Albums />}></Route>
      {/* <Dashboard /> */}
    </Routes>
  )
}

export default App
