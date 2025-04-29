import { useState } from 'react'
import './App.css'
import ButtonHover from './components/ButtonHover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ButtonHover/>
    </>
  )
}

export default App
