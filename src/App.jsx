import React from 'react'
import StartGame from "./components/StartGame"
import "./App.css"
import { useState } from 'react'
import GamePlay from './components/GamePlay'

const App = () => {
  const [nextPage, setNextPage] = useState(false)

  const toggleNextPage = () =>{
    setNextPage((prev) => !prev)
  }



  return (
    <>
      {nextPage ? <GamePlay/> : <StartGame toggle = {toggleNextPage}/>}
    </>
  )
}

export default App
 