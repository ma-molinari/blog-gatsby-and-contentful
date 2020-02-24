import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "@reach/router"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Blog/Post"
import ReceiveNewPosts from "../components/ReceiveNewPosts"
import {
  formatCategoryText,
} from "../utils/helpers"

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges
  const principalPost = posts.find(item => {
    return item.node.type === "feature1"
  })

  const normalPost = posts.filter(item => {
    return item.node.type === "normal"
  })

  const indexPosts = []
  function removeCategoriesDuplicates(arr) {
    let unique = []
    for (let i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) === -1) {
        indexPosts.push(i)
        unique.push(arr[i])
      }
    }
    return unique
  }

  const categories = normalPost.map(
    item => item.node.category.category
  )

  removeCategoriesDuplicates(categories)

  const listCategoriesNoRepeat = []

  normalPost.map((item, i) => {
    indexPosts.map(index => {
      if (i === index) {
        listCategoriesNoRepeat.push(item)
      }
    })
  })

  const getIndexOfUniqueCategory = category => {
    const catgs = []
    categories.filter((item, index) => {
      if (item === category) {
        catgs.push(index)
      }
    })
    return catgs
  }

  // const getSlugPostsOfUniqueCategory = category => {
  //   const postOfCategory = []
  //   normalPost.map((item, index) => {
  //     getIndexOfUniqueCategory(category).map(i => {
  //       if (index === i) {
  //         postOfCategory.push(item.node)
  //       }
  //     })
  //   })
  //   return postOfCategory
  // }

  // const optionsContent = {
  //   renderNode: {
  //     [INLINES.HYPERLINK]: node => {
  //       const value = node.content.map(item => item.value)
  //       return (
  //         <a
  //           style={{ textDecoration: "underline" }}
  //           href={node.data.uri}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           {value}
  //         </a>
  //       )
  //     },
  //     [BLOCKS.EMBEDDED_ASSET]: node => {
  //       return (
  //         <img
  //           src={`${
  //             !node.data.target.fields
  //               ? ""
  //               : node.data.target.fields.file["pt-BR"].url
  //           }`}
  //           alt="blog-images"
  //         />
  //       )
  //     },
  //     [BLOCKS.PARAGRAPH]: (node, text) => <p>{text}</p>,
  //   },
  //   renderMark: {
  //     [MARKS.BOLD]: text => <b>{text}</b>,
  //   },
  // }

  return (
    <Layout>
      <Container>
        <SEO
          title="Blog with gatsby and contentful"
        />
        <ContainerSection>
          <div>
            <Link to={`p/${principalPost.node.slug}`}>
              <ImageFeature
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
          {listCategoriesNoRepeat.map((item, index) => {
            if (item.node) {
              return (
                <Post
                  linkTo={item.node.category.category}
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
        {/* <ContainerReceiveNewPost>
          <ReceiveNewPosts />
        </ContainerReceiveNewPost> */}
      </Container>
    </Layout>
  )
}

export default IndexPage

const Container = styled.div`
  padding: 2em;
  margin: 0 auto;
  max-width: 1300px;
`

const ContainerSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr .4fr;
  align-items:center;
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
  @media (max-width: 600px) {
    /* margin-top: 3em; */
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

const ContainerReceiveNewPost = styled.div`
  margin-top: 9em;
  @media (min-width: 240px) and (max-width: 600px) {
    margin-top: 11em;
  }
`

const ContainerFirstPost = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`

const TitlePost = styled(Link)`
  font-size:1.8rem;
  line-height: 1;
  font-weight:600;
  color:#000;
  margin-bottom:.3em;
  text-decoration:none;
  @media(max-width:600px){
    font-size:1.2rem;
  }
`

const ReadPost = styled(Link)`
  font-size:1rem;
  color:#999;
  text-decoration:none;
  @media(max-width:600px){
    font-size:.8rem;
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
