import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <>
      <RulesContainer>
        <p>Click the dice to roll</p>
        <p>If you number is same number as dice number, then your points will be increased according to the number </p>
        <p>If your number isnt same as the dice number, then your total score will be deducted by 2 points</p>
        <p>You can reset the game anytime you want</p>
      </RulesContainer>
    </>
  )
}

export default Rules

const RulesContainer = styled.div`
   margin-top: 40px;
   margin-bottom: 40px;
   padding: 15px;
   background-color: bisque;
   border-radius: 5px;

   p{
    font-size: large;
   }
`
