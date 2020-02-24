import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"
import { StaticQuery, graphql } from "gatsby"
import Github from "../assets/images/github.svg"

import MenuCloseIcon from "../assets/icons/close-modal.svg"

const MenuMobile = props => {
  return (
    <StaticQuery
      query={graphql`
        query CategoriesMenuMobile {
          allContentfulCategory(sort: { fields: [createdAt], order: ASC }) {
            edges {
              node {
                category
                photo {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <ModalMenu>
          <Header>
            <div></div>
            <img
              src={MenuCloseIcon}
              onClick={props.closeMenu}
              alt="close-menu-icon"
            />
          </Header>
          <ContainerScroll>
            <ModalListLinks>
              {data.allContentfulCategory.edges.map((item, index) => (
                <ModalLinks key={index}>
                  <Link to={`categorias/${item.node.category}`}>
                    <ContainerCategory>
                      <p>{item.node.category}</p>
                    </ContainerCategory>
                  </Link>
                </ModalLinks>
              ))}
            </ModalListLinks>
            <MoreInfo>
              <a
                href="https://www.github.com/ma-molinari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ModalLinks>
                  <GithubIcon src={Github}/>
                </ModalLinks>
              </a>
            </MoreInfo>
          </ContainerScroll>
        </ModalMenu>
      )}
    />
  )
}

export default MenuMobile

const ModalMenu = styled.div`
  text-align: left;
  top: 0;
  margin: 0;
  width: 100%;
  height: 9999px;
  background: #333;
  position: fixed;
  z-index: 9999;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
  @media (min-width: 1200px) {
    display: none;
  }
  @media (max-height: 700px) {
    height: 700px;
    overflow-y: scroll;
  }
`

const ContainerScroll = styled.div`
  height: 800px !important;
  overflow-y: scroll !important;
  @media (orientation: landscape) and (max-width: 900px) {
    height: 1100px !important;
    overflow-y: scroll !important;
  }
`

const Header = styled.div`
  color: #666;
  padding: 2em 1em 0em 1em;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #666;
  }
  img {
    min-height: 50px;
    max-width: 200px;
    margin-bottom: 0em;
  }
  @media (max-width: 600px) {
    img {
      max-width: 140px;
      min-height: 40px;
      margin-bottom: 0;
    }
  }
`

const ModalListLinks = styled.ul`
  max-width: 475px;
  margin: 0em auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 0em 1em;
  @media (max-width: 600px) {
    width: 270px;
  }
`
const ModalLinks = styled.li`
  max-width: 310px;
  margin: 0px auto;
  list-style: none;
  a {
    text-decoration: none;
    color: #fff;
  }
  div:hover {
    color: #fc67fa;
    cursor: pointer;
    transition: 0.3s;
  }
  :first-child {
    text-align: center;
  }
  p {
    margin: 0.36em 0;
    @media (max-width: 600px) {
      margin: 0.4em 0;
    }
  }
`
const ContainerCategory = styled.div`
  font-size: 1.5rem;
  padding: 0.6em;
  display: flex;
  align-items:center;
  text-align:center;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

const MoreInfo = styled.div`
  display: flex;
  margin: 1em auto;
  justify-content: center;
  a,
  span {
    padding-bottom: 0.7em;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    :hover {
      color: #fc67fa;
      transition: 0.3s;
    }
  }
`

const GithubIcon = styled.img`
  height:40px;
  width:40px;
  background:white;
  border-radius:10em;
`