import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './component/Counter.jsx'
import Room from './component/Room.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Room />
    </div>
  )
}

export default App
