import React from "react"
import styled from "styled-components"
import AuthorQuotes from "./AuthorQuotes"

const PostDetail = props => {
  return (
    <ContentPost>
      <ContentText>{props.content}</ContentText>
      {/* {props.contentQuotes ? (
        <AuthorQuotes
          avatarAuthorQuotes={props.avatarAuthorQuotes}
          authorNameQuotes={props.authorNameQuotes}
          contentQuotes={props.contentQuotes}
        />
      ) : (
        ""
      )} */}
    </ContentPost>
  )
}

export default PostDetail

const ContentText = styled.div`
  p:first-child {
    margin-top: 0;
  }
  p {
    font-size: 19px;
    line-height: 32px;
    letter-spacing: -0.003em;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #585f6b;
    margin-bottom: 2em;
    @media (max-width: 600px) {
      font-size: 18px;
    }
    a {
      text-decoration: none;
      color: #585f6b;
      :hover {
        color: #32ff03;
        text-decoration: underline;
        b {
          font-weight: 200;
          color: #32ff03;
        }
      }
    }
  }

  b {
    margin-top: 2.5em;
    margin-bottom: 2.5em;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #242d3c;
  }

  img {
    margin-top: 0em;
    margin-bottom: 1.5em;
    max-height: 335px;
    width: auto;
    border-radius: 0.3em;
  }
  ol {
    margin-left: 1rem;
    li {
      margin-top: 1em;
      p {
        padding: 0 0.5em;
      }
    }
  }
  blockquote {
    margin-top: 20px;
  }

  h2 {
    a {
      text-decoration: none;
      color: #585f6b;
      :hover {
        color: #32ff03;
      }
    }
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  h1 {
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`

const ContentPost = styled.div`
  grid-area: ContentPost;
  text-align: left;
  max-width: 680px;
  height: 100%;
  margin: 0 auto;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.11;
  letter-spacing: normal;
  color: #585f6b;
`
