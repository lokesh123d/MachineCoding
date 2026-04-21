import { useState } from 'react'
import SnakeLayout from './components/snake-game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SnakeLayout cols={10} rows={10}/>
    </>
  )
}

export default App
