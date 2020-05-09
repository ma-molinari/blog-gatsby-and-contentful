import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Blog/Post"

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges
  const principalPost = posts.find(item => {
    return item.node.type === "feature1"
  })

  const normalPost = posts.filter(item => {
    return item.node.type === "normal"
  })

  return (
    <Layout>
      <Container>
        <SEO
          keywords=""
          title="Blog with gatsby and contentful"
        />
        <ContainerSection>
          <div>
            <Link to={`p/${principalPost.node.slug}`}>
              <ImageFeature
                draggable="false"
                src={principalPost.node.imagePost.fluid.src}
                srcSet={principalPost.node.imagePost.fluid.srcSet}
                alt="principal-post-banner"
              />
            </Link>
          </div>
          <ContainerFirstPost>
            <TitlePost to={`p/${principalPost.node.slug}`}>{principalPost.node.title}</TitlePost>
            <ReadPost  to={`p/${principalPost.node.slug}`}>{
               principalPost.node.content.json.content[0].content[0].value.length > 110 ? `${principalPost.node.content.json.content[0].content[0].value.substring(
                0,
                85
              )}...` : principalPost.node.content.json.content[0].content[0].value
            }
            </ReadPost>
          </ContainerFirstPost>
        </ContainerSection>
        <ContainerPosts>
          {normalPost.slice(0,6).map((item, index) => {
            if (item.node) {
              return (
                <Post
                  linkTo={item.node.category.slug}
                  slug={item.node.slug}
                  key={index}
                  category={
                    item.node.category.category
                  }
                  image={
                    !item.node.imagePost ? "" : item.node.imagePost.fluid.srcSet
                  }
                  titlePost={item.node.title}
                  text={item.node.content.json.content[0].content[0].value.length > 110 ?`${item.node.content.json.content[0].content[0].value.substring(
                    0,
                    110
                  )}...` : item.node.content.json.content[0].content[0].value}
                />
              )
            }
          })}
        </ContainerPosts>
      </Container>
    </Layout>
  )
}

export default IndexPage

const Container = styled.div`
  padding: 2em;
  margin: 0 auto;
  max-width: 1300px;
  @media (max-width: 440px) {
    padding: 1em;
  }
`

const ContainerSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr .4fr;
  align-items:flex-start;
  grid-gap: 44px;
  @media (max-width: 1200px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
  div > link > picture > source {
    max-height: 260px;
  }
`

const ContainerPosts = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 2em;
  @media (max-width: 1200px) {
    margin-top: 4.5em;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
  @media (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`

const ImageFeature = styled.img`
  max-height: 400px;
  width: 100%;
  @media (min-resolution: 2dppx), (min-device-pixel-ratio: 2) {
    width: 100%;
    height: 100%;
    max-height: 400px;
  }
`

const ContainerFirstPost = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`

const TitlePost = styled(Link)`
  font-size: 1.7rem;
  line-height: 40px;
  font-weight: 500;
  color: #000;
  margin-bottom:.3em;
  text-decoration: none;
  @media(max-width: 440px){
    line-height: 35px;
    font-size: 1.4rem;
    text-align:center;
  }
`

const ReadPost = styled(Link)`
  font-size:1rem;
  color:#999;
  text-decoration:none;
  @media(max-width: 440px){
    text-align:center;
    font-style: italic;
  }
`

export const pageQuery = graphql`
  query ContentfulAllBlogPosts {
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          type
          title
          slug
          category {
            slug
            category
          }
          content {
            json
          }
          author {
            authorName
            avatarAuthor {
              fluid {
                src
              }
            }
          }
          imagePost {
            fluid {
              srcSet
              src
            }
          }
          createdAt(formatString: "MMMM D")
        }
      }
    }
  }
`
