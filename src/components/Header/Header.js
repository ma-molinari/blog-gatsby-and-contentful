import { Link } from "@reach/router"
import PropTypes from "prop-types"
import React, { useState, useEffect, useLayoutEffect } from "react"
import styled from "styled-components"
import {
  transition,
  cancelTransition,
  styleTransitionDefault,
} from "../../utils/helpers"

import MenuOpenIcon from "../../assets/icons/menu-icon.svg"
import MenuCloseIcon from "../../assets/icons/close-menu-mobile.svg"
import ArrowDownIcon from "../../assets/icons/arrow-down.svg"
import Github from "../../assets/images/github.svg"


import MenuMobile from "../MenuMobile"
import ContainerCategoriesList from "./WindowContainerCategoriesList"

const Header = () => {
  const [displayTransition, setDisplayTransition] = useState(
    styleTransitionDefault
  )

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

  let timer = null
  useEffect(() => {
    return () => {
      !timer ? clearTimeout(timer) : console.log(timer)
    }
  }, [])
  const initialTimer = () =>
    (timer = setTimeout(() => {
      setDisplayTransition(transition)
    }, 500))

  const clearTimer = () => clearTimeout(timer)

  const [menuMobile, setMenuMobile] = useState(false)

  const actionCancelTransition = () => {
    setDisplayTransition(cancelTransition)
  }

  let timeoutExist = null

  useEffect(() => {
    return () => clearTimeout(timeoutExist)
  }, [])

  let titlePost

  if (typeof window !== "undefined") {
    titlePost = window.location.pathname.split("/p/")[1]
  }

  useLayoutEffect(() => {
    if (window.location.pathname === `/p/${titlePost}`) {
      window.onscroll = myScrolling
    }
  }, [])

  function myScrolling() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    let scrolled = (winScroll / height) * 100
    document.getElementById("myBar").style.width = scrolled + "%"
  }

  return (
    <HeaderNav>
      <BackgroundNav
        onMouseOver={() => {
          if (!timeoutExist) {
            timeoutExist = setTimeout(() => {
              actionCancelTransition()
              setDisplayTransition(styleTransitionDefault)
            }, 300)
          }
        }}
      >
        <div style={{ margin: "0 auto", maxWidth: "1300px" }}>
          <ContainerInteraction>
            <ContainerMenuAndLogo>
              <MenuButton
                src={SwitchIconMenu(menuMobile)}
                onClick={() => {
                  setMenuMobile("true")
                }}
                alt="menu-button"
              />
              <Link to="/">
                <h2>Blog</h2>
              </Link>
            </ContainerMenuAndLogo>
            <ContainerFlex>
              <WrapperLink>
                <ContainerIcon
                  onMouseOver={() => {
                    initialTimer()
                  }}
                  onMouseOut={() => clearTimer()}
                  style={{ paddingRight: "1em" }}
                  >
                    <div
                      style={{paddingBottom:"2em"}}
                    >
                      Categorias
                    </div>
                  <IconArrowDown src={ArrowDownIcon} style={{paddingBottom:"2em"}}/>
                </ContainerIcon>
              </WrapperLink>
              <div>
                <div style={{ fontSize: "16px", display: "flex" }}>
                  <ContainerIcon>
                    <a
                      href="https://github.com/ma-molinari"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon src={Github}/>
                    </a>
                  </ContainerIcon>
                </div>
              </div>
            </ContainerFlex>
          </ContainerInteraction>
        </div>
        {typeof window !== "undefined" ? (
          window.location.pathname === `/p/${titlePost}` ? (
            <ProgressContainer className="progress-container">
              <ProgressBar className="progress-bar" id="myBar" />
            </ProgressContainer>
          ) : (
              <ProgressContainer className="progress-container">
                <ProgressBar
                  className="progress-bar"
                  id="myBar"
                  style={{ background: "transparent" }}
                />
              </ProgressContainer>
            )
        ) : (
            console.log("window is undefined")
          )}
      </BackgroundNav>
      {menuMobile ? (
        <MenuMobile
          closeMenu={() => {
            setMenuMobile(false)
          }}
        />
      ) : (
          <></>
        )}
      <WindowCategories id="catgWindow" style={displayTransition}>
        <ContainerCategoriesList
          onMouseOverShadow={() => {
            actionCancelTransition()
            setTimeout(() => setDisplayTransition(styleTransitionDefault), 300)
          }}
          shadowTransition={displayTransition}
        />
      </WindowCategories>
    </HeaderNav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const ProgressContainer = styled.div`
  z-index: 9999;
  width: 100%;
  margin-top: -21px;
  @media (max-width: 600px) {
    margin-top: -22px;
  }
`

const ProgressBar = styled.div`
  height: 4px;
  background-image: linear-gradient(to right, #f4c4f3 0%, #fc67fa 51%, #f4c4f3 100%);
  width: 0%;
`

const HeaderNav = styled.div`
  font-family: codePro, sans-serif !important;
  height: 100%;
  width: 100%;
`

const BackgroundNav = styled.div`
  height: 80px;
  background-color:#333333;
  background-size: 100% 120px;
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100%;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
`

const ContainerInteraction = styled.div`
  display: flex;
  padding-left: 3%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
const ContainerMenuAndLogo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items:center;
  height: 75px;
  h2{
    color:#fff;
    margin: 0;
    width:100px;
  }
  a{
    text-decoration:none;
  }
`

const Logo = styled.img`
  margin: 0px 0px 0px -15px;
  object-fit: contain;
  width: 240px;
  height: 75px;
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 180px;
    /* height: 45px; */
    /* margin: 3px 0px 0px -5px; */
  }
`

const ContainerFlex = styled.div`
  font-size: 16px;
  color: #fff;
  margin-bottom: 0;
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #fff;
  }
`

const MenuButton = styled.img`
  height: 1em;
  color: white;
  width: 1.5em;
  margin: 0em 2em 0 0;
  cursor: pointer;
  @media (min-width: 1000px) {
    display: none;
  }
  @media (max-width: 600px) {
    margin: 0em 1em 0 0;
  }
`

const ContainerIcon = styled.div`
  display:flex;
  align-items:center;  
  cursor: pointer;
  @media (max-width: 1000px) {
    display: none;
  }
`

const IconArrowDown = styled.img`
  width: 15px;
  margin-left: 0.3em;
  margin-bottom: 0px;
`
const IconArrowRight = styled.img`
  width: 15px;
  margin-left: 0.3em;
  margin-bottom: 0px;
  transform: rotate(270deg);
`

const WrapperLink = styled.div`
  display: flex;
  padding: 0.1em 1em 1em 0em;
  @media (max-width: 1000px) {
    display: none;
  }
  span {
    padding: 1em 2em 2em 2em;
  }
`
//modal

const WindowCategories = styled.div`
  opacity: 0;
  transition: opacity 0.3s linear;
  text-align: left;
  z-index: 9999;
  top: 80px;
  left: 0px;
  max-width: 100%;
  background-color: white;
  border-radius: 0px;
  position: absolute;
  display:flex;
  align-items:center;
  width: 100%;
  height: 260px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
  @media (max-width: 1000px) {
    display: none;
  }
`

const GithubIcon = styled.img`
  height:40px;
  width:40px;
  background:white;
  border-radius:10em;
`