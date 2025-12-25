import styled from "styled-components"

export const Button = styled.button`
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

export const OutlineButton = styled.button`
    color:black;
    padding:10px 18px;
    background-color: white;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid black;
    
    cursor: pointer;
    
`