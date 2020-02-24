import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header/Header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Container = styled.div`
  font-family: "codePro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  main {
    margin-top: 7.3em;
  }
`
