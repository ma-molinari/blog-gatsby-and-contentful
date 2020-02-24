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
          <ImageCategory src={props.image} />
        </Link>
        <Divider/>
      </WrapperTitleAndImage>
      {/* <AllPostsCategory>
        <Link to={props.to}>Tudo sobre {props.title}</Link>
      </AllPostsCategory> */}
    </BoxCategory>
  )
}

export default LinkCategories

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
  /* background-image: linear-gradient(to right, #A770EF 0%, #CF8BF3 51%, #A770EF 100%); */
  background-image:linear-gradient(to right, #f4c4f3 0%, #fc67fa 51%, #f4c4f3 100%);
  height:3px
`

const TitleCategory = styled.h2`
  /* width: 150px; */
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

const AllPostsCategory = styled.span`
  /* margin-top: 0.3em; */
  margin-bottom: 0;
  padding: 0.5em 0;
  font-size: 15px;
  text-align: left;
  :hover {
    opacity: 0.7;
  }
  a {
    font-size: 14px;

    color: #333;
    text-decoration: none;
  }
`
