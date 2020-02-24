import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"

import Calendar from "../../assets/images/calendario.svg"

const UserPost = props => {
  return (
    <ContainerUserPost>
      <BoxAuthorPost>
        <AuthorPost>
          <IconPhotoUser src={props.avatar} />
          <span>{props.authorName}</span>
          {/* <span>
            <Link
              style={{ color: props.colorCategory }}
              to={`categorias/${props.linkCategory}`}
            >
              {props.category}
            </Link>
          </span> */}
        </AuthorPost>
        <DatePost>
          <img src={Calendar}/>
          {props.datePost}
        </DatePost>
      </BoxAuthorPost>
    </ContainerUserPost>
  )
}

export default UserPost

const ContainerUserPost = styled.div`
  display: flex;
  margin-top: 2em;
  padding-bottom: 0.8em;
`
const IconPhotoUser = styled.img`
  margin-right: 1em;
  width: 62px;
  height: 65px;
  border-radius: 10em;
  margin-bottom: 0;
`
const BoxAuthorPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:20px;
  align-items:center;
  @media(max-width:600px){
    grid-template-columns:1fr;
  }
`

const AuthorPost = styled.p`
  display: flex;
  align-items:center;
  margin-top: 0.2em;
  color: #585f6b;
  margin-bottom: 0;
  span {
    a {
      text-decoration: none;
      padding: 1em 0;
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    span {
      a {
        text-decoration: none;
        padding: 1em 0.3em;
      }
    }
  }
`
const DatePost = styled.div`
  img{
    margin:0 1em;
    width:30px;
    margin-bottom:0;
  }
  display:flex;
  align-items:center;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #a5a7ab;
  margin: 0;
`
