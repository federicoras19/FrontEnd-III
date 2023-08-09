import { useState } from 'react'
import Hijo from './Hijo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        hola mundo
        <Hijo count={count} setCount={setCount} />
      </div>
    </>
  )
}

export default App
