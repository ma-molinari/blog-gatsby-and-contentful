import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"

const LinkCategories = props => {
  return (
    <BoxCategory>
      <WrapperTitleAndImage>
        <TitleCategory>
          <Link to={props.to}>{props.title}</Link>
        </TitleCategory>
        <Link to={props.to}>
          <ImageCategory draggable="false" src={props.image} />
        </Link>
        <Divider/>
      </WrapperTitleAndImage>
    </BoxCategory>
  )
}

export default LinkCategories;

const BoxCategory = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  height: 170px;
`

const WrapperTitleAndImage = styled.div`
  width: 100%;
`

const Divider = styled.div`
  background-image:linear-gradient(to right, #f4c4f3 0%, #32ff03 51%, #f4c4f3 100%);
  height:3px;
`

const TitleCategory = styled.h2`
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 1rem;
  letter-spacing: -0.6px;
  a {
    text-decoration: none;
    color: #4a4a4a;
  }
`

const ImageCategory = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 3.6em;
  margin-bottom: 0.3em;
  @media (max-width: 1200px) {
    margin-left: 1.6em;
  }
`