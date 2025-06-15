import { useState } from 'react'
import './App.css'
import ButtonHover from './components/ButtonHover'
import CardsHover from './components/CardsHover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ButtonHover/>
     <CardsHover/>
    </>
  )
}

export default App
