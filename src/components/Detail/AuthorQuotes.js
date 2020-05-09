import React from "react"
import styled from "styled-components"

const AuthorQuotes = props => {
  return (
    <ContainerAuthorQuotes>
      <BoxAuthorQuotes>
        <IconPhotoQuotes draggable="false" src={props.avatarAuthorQuotes} />
        <TitleAuthorQuotes>{props.authorNameQuotes}</TitleAuthorQuotes>
        <ContentQuotes>{props.contentQuotes}</ContentQuotes>
      </BoxAuthorQuotes>
    </ContainerAuthorQuotes>
  )
}

export default AuthorQuotes

const ContainerAuthorQuotes = styled.div`
  margin-top: 5em;
  border-top: 1px solid #ccc;
  margin-bottom: 2em;
  border-bottom: 1px solid #ccc;
`
const BoxAuthorQuotes = styled.div`
  margin: 1.5em 0 1.5em 0;
  display: grid;
  grid-template-areas:
    "iconPhotoQuotes titleQuotes"
    "iconPhotoQuotes contentQuotes";
  @media (max-width: 500px) {
    grid-template-areas:
      "iconPhotoQuotes titleQuotes"
      "contentQuotes contentQuotes";
    grid-template-columns: 80px 1fr;
    align-items: center;
  }
`

const IconPhotoQuotes = styled.img`
  margin-top: 0.1em;
  grid-area: iconPhotoQuotes;
  margin-right: 1.5em;
  width: 62px;
  height: 64px;
  border-radius: 5em;
`

const TitleAuthorQuotes = styled.p`
  grid-area: titleQuotes;
  margin-bottom: 0.3em;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.07;
  letter-spacing: normal;
  color: #242d3c;
`

const ContentQuotes = styled.div`
  text-align: left;
  grid-area: contentQuotes;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.86;
  letter-spacing: normal;
  color: #585f6b;
  margin: 0;
  blockquote {
    margin: 0;
  }
`
