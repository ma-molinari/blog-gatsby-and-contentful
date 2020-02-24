import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ModalEmailSuccess from "./ModalEmailSuccess"
import {
  transition,
  cancelTransition,
  styleTransitionDefault,
  validEmail,
} from "../utils/helpers"

const ReceiveNewPosts = props => {
  const [email, setEmail] = useState("")
  const [displayModalEmailSuccess, setDisplayModalEmailSuccess] = useState(
    styleTransitionDefault
  )
  const [emailErrors, setEmailErrors] = useState("")

  const onSuccess = () => {
    setEmail("")
    setEmailErrors("")
    setDisplayModalEmailSuccess(transition)
  }

  const submitValues = event => {
    event.preventDefault()
    const result = validEmail.test(email)
    if (!email) {
      setEmailErrors("Email é obrigatório.")
    }
    if (result === true) {
      onSuccess()
    }
  }

  useEffect(() => {
    const valid = validEmail.test(email)
    if (valid === true) {
      return setEmailErrors("")
    }
  }, [email, emailErrors])

  const validInput = () => {
    const valid = validEmail.test(email)
    if (valid === false) {
      return setEmailErrors("Entre com email válido.")
    }
  }

  const actionCancelTransition = () => {
    setDisplayModalEmailSuccess(cancelTransition)
    setTimeout(
      () => setDisplayModalEmailSuccess({ marginLeft: "-9999px" }),
      300
      )
    setEmailErrors("")
    setEmail("")
  }

  return (
    <ContainerSubmitEmail onSubmit={event => submitValues(event)}>
      <MessageSubmitEmail>
        Receba nossos novos artigos!
      </MessageSubmitEmail>
      <div>
        <div style={{ lineHeight: 1, display: "flex" }}>
          <InputSubmitEmail
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
              if(e.target.value.length > 1){
                validInput()
              }
            }}
          />
          <ButtonSubmitEmail type="submit">Enviar</ButtonSubmitEmail>
        </div>
        {emailErrors.length !== 0 ? (
          <MessageError>{emailErrors}</MessageError>
        ) : (
          <div />
        )}
      </div>
      <ModalEmailSuccess
        displayModalEmailSuccess={displayModalEmailSuccess}
        closeModalSuccess={() => actionCancelTransition()}
        message="Sucesso"
        subMessage="Pode deixar, novos artigos serão enviados."
      />
    </ContainerSubmitEmail>
  )
}

export default ReceiveNewPosts

const ContainerSubmitEmail = styled.form`
  margin-bottom: 3em;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const MessageSubmitEmail = styled.span`
  height: 100%;
  font-size: 30px;
  text-align: center;
  color: #fc67fa;
  margin-bottom: 1em;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

const InputSubmitEmail = styled.input`
  min-width: 400px;
  width: 100%;
  height: 53px;
  border: 1px solid #9c9c9c;
  background-color: #ffffff;
  text-indent: 0.5em;
  margin-right: 0.5em;
  outline-color: #f4c4f3;
  color: #888f98;
  @media (min-width: 240px) and (max-width: 600px) {
    min-width: 100px;
    margin-right: 0;
  }
`

const ButtonSubmitEmail = styled.button`
  width: 6em;
  height: 53.3px;
  border-radius: 2px;
  background:#fc67fa;
  opacity:.9;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    background: #f4c4f3;
    border: 3px solid #f4c4f3;
    transition: 0.5s;
  }
  @media (max-width: 540px) {
    width: 5em;
    border-radius: 0px;
  }
`

const MessageError = styled.div`
  margin-top: 0.5em;
  color: #ff526f;
`
