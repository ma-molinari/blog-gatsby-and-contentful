import React from "react"
import styled from "styled-components"

//icons
import IconFacebook from "../../assets/images/facebook.svg"
import IconLinkedin from "../../assets/images/linkedin-black.svg"
import IconTwitter from "../../assets/images/twitter.svg"

import Calendar from "../../assets/images/calendario.svg"

const UserPost = props => {

  const handleShare = type => {
    if (typeof window !== "undefined" && !window.navigator.share) {
      switch (type) {
        case "facebook":
          window.open(
            `https://www.facebook.com/sharer?u=${window.location.href}`,
            "_blank"
          )
          break
        case "linkedin":
          window.open(
            `https://www.linkedin.com/shareArticle?mini=true&url=${
              window.location.href
            }`,
            "_blank"
          )
          break
        case "twitter":
          window.open(
            `https://twitter.com/intent/tweet?text=${window.location.href}`,
            "_blank"
          )
          break
      }
    } else {
      typeof window !== "undefined" &&  window.navigator
        .share({
          title: "blog.com.br",
          text: props.title,
          url: window.location.href,
        })
        .then(_ => console.log("shared"))
        .catch(_ => console.log("not shared"))
    }
  }

  return (
    <ContainerUserPost>
      <BoxAuthorPost>
        <AuthorPost>
          <IconPhotoUser draggable="false" src={props.avatar} />
          <span>{props.authorName}</span>
        </AuthorPost>
        <DatePost>
          <img src={Calendar}/>
          <div>{props.datePost}</div>
        </DatePost>
        <ContainerShare>
          <IconShare draggable="false" onClick={() => handleShare("facebook")} src={IconFacebook} alt="facebook"/>
          <IconShare draggable="false" onClick={() => handleShare("linkedin")} src={IconLinkedin} alt="linkedin"/>
          <IconShare draggable="false" onClick={() => handleShare("twitter")} src={IconTwitter} alt="twitter"/>
        </ContainerShare>
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
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items:center;
  @media(max-width:600px){
    grid-template-columns:1fr;
  }
`

const AuthorPost = styled.p`
  display: flex;
  align-items: center;
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
    margin: 0 1em 0 0;
    width: 30px;
  }
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #a5a7ab;
  margin: 0;
  @media(max-width: 440px){
    margin-top: .7em;
    img{
      margin: 0em 1em 0 .5em;
    }
  }
`

const ContainerShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 440px){
    margin-top:1em;
    justify-content: flex-start;
  }
`

const IconShare = styled.img`
  width: 30px;
  height: 30px;
  margin-left: .5em;
  cursor: pointer;
  :hover {
    opacity:.7;
    transition:.3s;
  }
`