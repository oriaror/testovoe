'use client'

import { styled } from "styled-components"

const StyledPortal = styled.div`
  position: fixed;
  top: 0;
`
const StyledBack = styled.div`
  overflow-x: hidden;
  overflow-y: scroll !important;
  position: fixed;
  background-color: #000000;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 111;
  height: 100%;
  opacity: 0.5;
`

const StyledModal = styled.div`
  padding: 1%;
  border-radius: 15px;
  border: 4px solid #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, 0);
  left: 50%;
  top: 5%;
  position: fixed;
  max-width: 500px;
  width: 500px;
  height: 250px;
  background-color: #ffffff;
  z-index: 1111;
  @media (max-width: 900px) {
    width: 350px;
    height: 250px; 
  }
  `

const StyledPargrh = styled.p`
  font-family: "Reem Kufi", sans-serif;
  font-size: 24px;
`
const StyledFail = styled.p`
 font-family: "Reem Kufi", sans-serif;
  color: #ff0000;
  font-size: 24px;
`
const StyledSucc = styled.p`
 font-family: "Reem Kufi", sans-serif;
  color: #008000;
  font-size: 24px;
`

const StyledLoader = styled.div`
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
&::after,
&::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: #FF3D00;
  width: 6px;
  height: 6px;
  transform: translate(150%, 150%);
  border-radius: 50%;
}
&::before {
  left: auto;
  top: auto;
  right: 0;
  bottom: 0;
  transform: translate(-150%, -150%);
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} `

export { StyledBack, StyledPargrh, StyledPortal, StyledModal, StyledLoader, StyledFail, StyledSucc };