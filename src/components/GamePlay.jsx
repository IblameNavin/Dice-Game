import {useState} from 'react'
import styled from "styled-components"
import TotalScore from './TotalScore'
import NumberSelector from "./NumberSelector"
import RollDice from './RollDice'

const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1)
   const [numberSelected, setNumberSelected] = useState()
   const [score, setScore] = useState(0)
   const [error, setError] = useState()
   const [reset, setReset] = useState()


     const generateRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min))+ min
  }

    const rollDice = () =>{
      if(!numberSelected) {
        setError("You have not selected any number")
        return
      }
      
    const randomNumber = generateRandomNumber(1, 7)
    setCurrentDice(randomNumber)


    if(numberSelected === randomNumber){
      setScore((prev)=> prev + randomNumber)
    }
    else{
      setScore((prev)=> prev - 2)
    }
    setNumberSelected("")
  }
  
  const resetScore = () =>{
    setScore(0)
    setNumberSelected()
  }

  return (
    <>
       <Main>
        <div className='top_section'>
        <TotalScore score = {score}/>
        <NumberSelector numberSelected = {numberSelected} setNumberSelected={setNumberSelected} error = {error} setError = {setError}/>
        </div>
        <RollDice rollDice = {rollDice} currentDice={currentDice} resetScore = {resetScore}/>
       
       </Main>
    </>
  )
}

export default GamePlay

const Main = styled.div`
   padding-top: 70px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
`