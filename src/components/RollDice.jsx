import React, { useState } from 'react'
import Dice1 from "../assets/dice_1.png"
import Dice2 from "../assets/dice_2.png"
import Dice3 from "../assets/dice_3.png"
import Dice4 from "../assets/dice_4.png"
import Dice5 from "../assets/dice_5.png"
import Dice6 from "../assets/dice_6.png"
import styled from "styled-components"
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const DiceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

const RollDice = ({rollDice, currentDice, resetScore}) => {
const [showRules, setShowRules] = useState(false)
  




  return (
    <>
      <DiceContainer>
        <div onClick={rollDice} className='dice'>
        <img src= {DiceImages[currentDice - 1]} alt="" />
        </div>
        <p>Click on Dice to roll</p>
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide": "Show"} Rules</Button>
          
        </div>
         {showRules && <Rules/>}
      </DiceContainer>
    </>
  )
}

export default RollDice


const DiceContainer = styled.div`
  display: flex ;
  justify-content: center;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 24px;
  }
  .dice{
    cursor: pointer;
  }
  .btns{
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    gap:13px;
  }
`