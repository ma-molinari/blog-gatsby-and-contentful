import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"

const Post = props => {
  return (
    <div>
      <BoxImagePost>
        <Link to={`p/${props.slug}`}>
          <ImagePost srcSet={props.image} />
        </Link>
      </BoxImagePost>
      <TitlePost>
        <Link to={`p/${props.slug}`}>{props.title}</Link>
      </TitlePost>
      <Link style={{ textDecoration: "none" }} to={`p/${props.slug}`}>
        <TextPost>{props.text}</TextPost>
      </Link>
    </div>
  )
}

export default Post

const BoxImagePost = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  margin-bottom: 20px;
  text-align: center;
  a {
    display: block;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
`

const ImagePost = styled.img`
  min-height: 210px;
  max-height: 210px;
  border-radius: 0.2em;
  width: 100%;
  opacity: 1;
  transition: all 0.3s ease;
  backface-visibility: hidden;
  margin-bottom: -7px;
  :hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
`

const TitlePost = styled.p`
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: #242d3c;
  a {
    text-decoration: none;
    color: #242d3c;
    padding: 1em 0;
  }
  @media (max-width: 1200px) {
    max-width: 20em;
  }
`

const TextPost = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #999;
  @media (max-width: 1200px) {
    max-width: 25em;
  }
`
