import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './components/Quiz'
import Button from './components/Button'

function App() {

const handleClick = () => {
  
}

  return (
    <>
      <h1>Javascript Quiz</h1>
      <Button value="Rozpocznik quiz" onClick={handleClick}></Button>
      <Quiz />
    </>
  )
}

export default App
