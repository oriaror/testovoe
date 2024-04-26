'use client'
import { styled } from "styled-components"
import Link from "next/link";

const OperatorImg = styled.img`
  width: 250px;
  height: 250px;
  transition: 250ms;
`

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0px 0px;
  background: rgb(255, 255, 255);
`
const OperatorTitle = styled.p`
  text-decoration: none;
  transition: 250ms;
  display: inline;
`
const FakeBtn = styled.button`
  cursor: pointer;
  color: #ffffff;
  align-self: flex-end;
  position: absolute;
  opacity: 0;
  border: none;
  border-radius: 6px;
  min-width: 114px;
  height: 37px;
  transition: 250ms;
  background: linear-gradient(270.00deg, rgb(202, 0, 217),rgb(255, 0, 0) 100%);
`
const OperatorWraper = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  font-size: 24px;
  font-family: "Reem Kufi", sans-serif;
  box-shadow: 10px 5px 5px rgba(0,0,0,0.4);
  transition: 250ms;
  &:hover ${OperatorImg} {
    transition: 250ms;
    scale: calc(1.1);
  }
  &:hover ${OperatorTitle}{
    transition: 250ms;
    margin-right: 50%;
  }
  &:hover ${FakeBtn}{
    transition: opacity 350ms;
    opacity: 1;
  }
`



export { OperatorWraper, OperatorImg, DescriptionWrapper, OperatorTitle, FakeBtn, StyledLink };