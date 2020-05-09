import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import LinkCategory from "./LinkCategories"

const WindowContainerCategoriesList = props => {
  return (
    <StaticQuery
      query={graphql`
        query ListCategories {
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
        <>
          <ContainerListCategories>
            {data.allContentfulCategory.edges.map((item, index) => {
              return (
              <LinkCategory
                key={index}
                image={item.node.photo.file.url}
                title={item.node.category}
                to={`categorias/${item.node.category}`}
              />
            )})}
            <ContainerOpacity
              style={props.shadowTransition}
              id="containerShadow"
              onMouseMove={props.onMouseOverShadow}
            />
          </ContainerListCategories>
        </>
      )}
    />
  )
}

export default WindowContainerCategoriesList

const ContainerOpacity = styled.div`
  cursor: pointer;
  opacity: 0;
  top: 18.9em;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 9999px;
  position: absolute;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: hidden !important;
  min-width: 500px;
`

const ContainerListCategories = styled.div`
  padding: 1em 2em;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  &::after {
    transform: rotate(45deg);
    position: absolute;
    top: -8px;
    content: "";
    width: 0;
    height: 0;
    border: 9px solid;
    border-color: #fff #fff #fff #fff;
    margin-left: 210px;
  }
`
