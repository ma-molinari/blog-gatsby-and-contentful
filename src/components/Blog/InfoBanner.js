import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"

const InfoBanner = props => {
  return (
    <>
      <TitleInfoBanner>
        <Link to={`p/${props.slug}`}>{props.title}</Link>
      </TitleInfoBanner>
      <Link style={{ textDecoration: "none" }} to={`p/${props.slug}`}>
        <TextInfoBanner
          dangerouslySetInnerHTML={{ __html: props.contentPost }}
        />
      </Link>
      <ContainerAuthorInfoBanner>
        <IconPhotoUser src={props.avatar} alt="avatar" />
        <NameUser>
          {props.authorName}{" "}
          <span>
            <Link
              to={`categorias/${props.linkCategory}`}
              style={{ color: props.colorCategory }}
            >
              {" "}
              {props.category}
            </Link>
          </span>
        </NameUser>
      </ContainerAuthorInfoBanner>
    </>
  )
}

export default InfoBanner

const TitleInfoBanner = styled.div`
  margin-bottom: 0.5em;
  font-size: 28px;
  color: #242d3c;
  a {
    text-decoration: none;
    color: #242d3c;
    padding: 1em 0em;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 19px;
    margin-bottom: 2em;
  }
  @media (min-width: 240px) and (max-width: 375px) {
    font-size: 15px;
    margin-bottom: 1em;
  }
`

const TextInfoBanner = styled.div`
  font-size: 17px;
  line-height: 1.44;
  color: #585f6b;
  margin-bottom: 1.5em;
  padding: 0.5em 0;
  @media (min-width: 240px) and (max-width: 1000px) {
    font-size: 14px;
  }
  @media (min-width: 240px) and (max-width: 600px) {
    display: none;
  }
`

const ContainerAuthorInfoBanner = styled.div`
  display: flex;
`

const IconPhotoUser = styled.img`
  margin-top: -8px;
  margin-right: 1em;
  margin-bottom: 0;
  width: 45px;
  height: 45px;
  border-radius: 5em;
  @media (min-width: 240px) and (max-width: 375px) {
    width: 23px;
    height: 22.5px;
    margin-top: -2px;
  }
`
const NameUser = styled.div`
  font-size: 18px;
  line-height: 1.61;
  color: #585f6b;
  span {
    a {
      text-decoration: none;
      padding: 1em 0em;
    }
  }
  @media (min-width: 240px) and (max-width: 375px) {
    font-size: 13px;
  }
`
