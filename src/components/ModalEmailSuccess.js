import React from "react"
import styled from "styled-components"

import Check from "../assets/images/checked.svg"

const ModalEmailSuccess = props => {
  return (
    <ContainerOpacity style={props.displayModalEmailSuccess}>
      <Container>
        <BoxImage>
          <img src={Check} alt="icon-checked" />
        </BoxImage>
        <Message>{props.message}</Message>
        <SubMessage>{props.subMessage}</SubMessage>
        <ContainerButton onClick={props.closeModalSuccess}>OK</ContainerButton>
      </Container>
    </ContainerOpacity>
  )
}

export default ModalEmailSuccess

const ContainerOpacity = styled.div`
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  position: fixed;
  height: 9999px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.4);
  padding: 0 1em;
  @media (max-height: 700px) {
    position: absolute;
    height: 800px;
  }
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8em;
  background: #fff;
  max-width: 480px;
  border-radius: 0.3em;
`
const BoxImage = styled.div`
  margin: 1.5em;
  img {
    width: 88px;
    height: 88px;
    margin-bottom: 0;
  }
`

const Message = styled.div`
  width: 100%;
  padding: 1em;
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
  text-transform: none;
  padding: 13px 16px;
  font-size: 27px;
  line-height: normal;
  margin-bottom: 0;
  margin-bottom: 0.3em;
`
const SubMessage = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: normal;
  vertical-align: top;
  margin-bottom: 0.5em;
  padding: 0 10px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.64);
  max-width: calc(100% - 20px);
  overflow-wrap: break-word;
  box-sizing: border-box;
`
const ContainerButton = styled.button`
  margin: 1em 1em 1.5em 1em;
  background:#32ff03;
  opacity:.9;
  color: #fff;
  border: none;
  box-shadow: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 24px;
  cursor: pointer;
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(43, 114, 165, 0.29);
  }
`
