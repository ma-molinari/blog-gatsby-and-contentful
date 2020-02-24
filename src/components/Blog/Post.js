import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"

const Post = props => {
  return (
    <ContainerBox>
      <TitleContent>
        <div>
          <Link
            to={`categorias/${props.linkTo}`}
          >
            {props.category}
          </Link>
        </div>
      </TitleContent>
      <>
        <BoxImagePost>
          <Link to={`p/${props.slug}`}>
            <ImagePost
              srcSet={props.image}
              alt="article-representation-medium"
            />
          </Link>
        </BoxImagePost>
        <TitlePost heightText={props.heightText}>
          <Link to={`p/${props.slug}`}>{props.titlePost}</Link>
        </TitlePost>
        <TextPost>
          <Link to={`p/${props.slug}`}>{props.text}</Link>
        </TextPost>
      </>
    </ContainerBox>
  )
}

export default Post

const ContainerBox = styled.div`
  margin-bottom: 1.5em;
`
const TitleContent = styled.div`
  display: flex;
  align-items: center;
  height: 1em;
  margin-bottom: 1.1em;
  div {
    margin-top: 0.2em;
    a {
      font-size:1rem;
      color:rgba(0, 0, 0, 0.54);
      text-decoration: none;
      padding: 1em 0;
    }
  }
`

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
  border-radius: 0.2em;
  width: 100%;
  height: 12.5em;
  opacity: 1;
  transition: all 0.3s ease;
  backface-visibility: hidden;
  margin-bottom: -7px;
  :hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
`
const TitlePost = styled.div`
  /* min-height: ${props => props.heightText !== undefined ? `${props.heightText}px` : "93px" }; */
  font-size: 1.1rem;
  line-height: 1.45;
  color: #242d3c;
  a {
    text-decoration: none;
    color: #242d3c;
    padding: 1em 0;
    word-break: break-word;
  }
`
const TextPost = styled.div`
  font-size: 16px;
  min-height: 72px;
  line-height: 1.56;
  margin-top: 1em;
  a {
    text-decoration: none;
    padding: 1em 0;
    color: #999;
  }
`
