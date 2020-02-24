import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Categories/Post"
import ContentTitlePage from "../components/Categories/ContentTitle"
import {
  formatCategoryText,
} from "../utils/helpers"

const Category = ({ data }) => {
  const [isFetching, setIsFetching] = useState(false)
  const [perPage, setPerPage] = useState(12)

  const posts = data.allContentfulPost.edges
  const title = posts.slice(0, 1)[0] || "Categorias"
  // const icon = title.node.category.map(item => item.photo.file.url)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    fetchMoreListItems()
  }, [isFetching])

  function handleScroll() {
    const list = document.querySelector("#containerList")
    let componentSizeMinusVerticalScroll =
      list.scrollTop + list.clientHeight - window.scrollY
    if (componentSizeMinusVerticalScroll <= 500) {
      setIsFetching(true)
    }
  }

  const postsPerPage = posts.slice(0, perPage)

  function fetchMoreListItems() {
    setTimeout(() => {
      if (postsPerPage.length < posts.length) {
        setPerPage(perPage + 12)
        setIsFetching(false)
      } else {
        setIsFetching(false)
      }
    }, 500)
  }

  return (
    <Layout>
      <Container>
        <SEO
          // image={icon}
          title={
            title.node.category.category
          }
        />
        <ContentTitlePage
          // categoryIcon={icon}
          titleCategory={title.node.category.category}
        />
        {postsPerPage.length === 0 ? (
          <NotFoundMessage>
            Não há nenhum conteúdo para essa categoria !
          </NotFoundMessage>
        ) : (
          <ContainerPosts id="containerList">
            {postsPerPage.map((item, index) => {
              return (
                <Post
                  slug={item.node.slug}
                  key={index}
                  image={
                    !item.node.imagePost ? "" : item.node.imagePost.fluid.srcSet
                  }
                  title={item.node.title}
                  id={item.node.id}
                  text={item.node.content.json.content[0].content[0].value.length > 110 ?`${item.node.content.json.content[0].content[0].value.substring(
                    0,
                    110
                  )}...` : item.node.content.json.content[0].content[0].value}
                />
              )
            })}
          </ContainerPosts>
        )}
        {isFetching && postsPerPage.length < posts.length ? (
          <LoadingArticles>Carregando mais artigos...</LoadingArticles>
        ) : (
          ""
        )}
      </Container>
    </Layout>
  )
}

export default Category

const Container = styled.div`
  padding: 2em;
  margin: 0 auto;
  max-width: 1300px;
  min-height:100vh;
`

const SubTitlePage = styled.p`
  margin-top: 1em;
  max-width: 500px;
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.61;
  letter-spacing: normal;
  color: #585f6b;
`
//posts
const ContainerPosts = styled.div`
  margin-top: 2.5em;
  display: grid;
  grid-gap: 2.5em;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 320px) {
    margin-top: 4.5em;
  }
`

const NotFoundMessage = styled.h1`
  margin-top: 3em;
  font-size: 2em;
  text-align: center;
`

const LoadingArticles = styled.h2`
  color: #fc5171;
  margin-top: 1em;
  text-align: center;
`

export const query = graphql`
  query Categories($categoria: String!) {
    allContentfulPost(
      filter: { category: { category: { eq: $categoria } } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          title
          slug
          category {
            category
            photo {
              file {
                url
              }
            }
          }
          content {
            json
          }
          imagePost {
            fluid {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
