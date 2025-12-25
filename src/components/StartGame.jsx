import React from 'react'
import styled from "styled-components"
import Dices from "../assets/dices.png"

const StartGame = ({toggle}) => {
  return (
    <>
      <Container>
        <div>
        <img src={Dices} alt="" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
    
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
`

const Button = styled.button`
    color:white;
    padding:10px 18px;
    background-color: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid black;
    transition: 0.4s background ease-in;
    cursor: pointer;
    

    &:hover{
        background-color: white;
        color:black;
        transition: 0.3s background ease-in;
        border:1px solid black
    }
    
`
