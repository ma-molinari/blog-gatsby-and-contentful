import { Link, useLocation } from "@reach/router"
import PropTypes from "prop-types"
import React, { useState,useEffect } from "react"
import styled from "styled-components"

import MenuOpenIcon from "../../assets/icons/menu-icon.svg"
import MenuCloseIcon from "../../assets/icons/close-menu-mobile.svg"
import Github from "../../assets/images/github.svg"

import MenuMobile from "../MenuMobile"
import GridLinks from "./GridLinks"
import ContainerCategoriesList from "./WindowContainerCategoriesList"

import background from "../../assets/images/bg2.png"

const Header = () => {

  const SwitchIconMenu = param => {
    switch (param) {
      case false:
        return MenuOpenIcon
      case true:
        return MenuCloseIcon
      default:
        return MenuOpenIcon
    }
  }

  const location = useLocation();

  let myWindow = location.pathname;

  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <Container 
      deskHeight={myWindow && window.location.pathname === "/" ? "800px" : "75px"}
      mediumHeight={myWindow && window.location.pathname === "/" ? "500px" : "75px"}
      mobileHeight={ myWindow && window.location.pathname === "/" ? "400px" : "75px"}
      style={{
        backgroundImage:  myWindow && window.location.pathname === "/" ? `url(${background})` : "",
        backgroundColor:  myWindow && window.location.pathname === "/" ? "transparent" : "#000",
      }}
    >
      <HeaderNav>
        <ContainerMenuAndLogo>
          <MenuButton
            draggable="false"
            src={SwitchIconMenu(menuMobile)}
            onClick={() => {
              setMenuMobile("true")
            }}
            alt="menu-button"
          />
          {
            myWindow && window.location.pathname === "/" && (
              <Home to="/">HOME</Home>
            )
          }
          {
            myWindow && window.location.pathname !== "/" && (
              <WrapLinks>
                <Home to="/">HOME</Home>
                <MyLink className="head-link" to="/categorias/html5-css3">
                  html5 e css3
                </MyLink>
                <MyLink className="head-link" to="/categorias/react">
                  React
                </MyLink>
                <MyLink className="head-link" to="/categorias/react-native">
                  React Native
                </MyLink>
                <MyLink className="head-link" to="/categorias/flutter">
                  Flutter
                </MyLink>
              </WrapLinks>
            )
          }
          <ContainerIcon>
            <a
              href="https://github.com/ma-molinari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon src={Github}/>
            </a>
          </ContainerIcon>
        </ContainerMenuAndLogo>
        {menuMobile && (
          <MenuMobile
            closeMenu={() => {
              setMenuMobile(false)
            }}
          />
        )}
      </HeaderNav>
      {
        myWindow && window.location.pathname === "/" && (
          <ContainerContentHeader>
            <BoxTitleHeader>
              <TextHeader>Front End</TextHeader>
              <SmallTextHedader>Confira conteúdos sobre Front End, HTML5, CSS3, React, React Native e Flutter.</SmallTextHedader>
            </BoxTitleHeader>
            <GridLinks/>
          </ContainerContentHeader>
        )
      }
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: ${props => props.deskHeight} !important;
  @media(min-width:1400px){
    background-position-y: center;
  }
  @media(max-width:768px){
    height: ${props => props.mediumHeight} !important;
  }
  @media(max-width: 440px){
    height: ${props => props.mobileHeight} !important;
  }
`

const HeaderNav = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`

const ContainerMenuAndLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  h2{
    color:#fff;
    margin: 0;
  }
  a{
    text-decoration:none;
  }
  @media (max-width: 1300px) {
    padding: 0 2em;
  }
  @media (max-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }
  @media (max-width: 440px) {
    padding: 0 1em;
  }
`

const MenuButton = styled.img`
  height: 1em;
  width: 1.5em;
  background: #333;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`

const Home = styled(Link)`
  font-family: inter;
  font-weight: 500;
  font-size: 18px;
  margin-right:2rem;
  color: #fff;
  cursor: pointer;
  :hover{
    opacity:.8;
  }
`

const WrapLinks = styled.div`
  display: flex;
  align-items: center;
  @media(max-width:768px){
    .head-link {
      display: none;
    } 
  }
`

const MyLink = styled(Link)`
  font-family: inter;
  text-decoration: none;
  color: #B1AEAE;
  text-transform: uppercase;
  font-size: 16px;
  margin: 0 1rem;
  :hover{
    opacity:.8;
  }
`

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;  
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`

const GithubIcon = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10em;
  :hover{
    opacity:.7;
    transition:.3s;
  }
`

const ContainerContentHeader = styled.div`
  max-width: 1300px;
  margin: 2rem auto 0 auto;
  @media(max-width: 1300px){
    padding: 0 2em;
  }
  @media(max-width: 768px){
    padding: 0 1em;
  }
`

const BoxTitleHeader = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width: 1024px){
    height: 350px;
  }
  @media(max-width: 440px){
    height: 240px;
  }
`

const TextHeader = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 5rem;
  text-transform: uppercase;
  opacity:.8;
  @media(max-width:440px){
    font-size: 3rem;
  }
`

const SmallTextHedader = styled.h3`
  width: 400px;
  margin: 1rem 0 0 .2rem;
  line-height:25px;
  padding: 0;
  color: #fff;
  font-size: .8rem;
  opacity:.7;
  @media(max-width:440px){
    width: 300px;
  }
`