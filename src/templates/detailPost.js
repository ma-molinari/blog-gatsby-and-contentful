import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

//components
import Layout from "../components/layout"
import SEO from "../components/seo"
import MorePost from "../components/Blog/Post"
import UserPost from "../components/Detail/UserPost"
import PostDetail from "../components/Detail/PostDetail"
import {
  formatDateToPtBr,
} from "../utils/helpers"

const detailPost = ({ data }) => {
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

  const detail = data.contentfulPost

  const posts = data.allContentfulPost.edges

  const lastPosts = posts.filter(item => {
    if (
      item.node.category.category !==
      detail.category.category
    )
      return item
  })

  const categories = lastPosts.map(
    item => item.node.category.category
  )

  removeCategoriesDuplicates(categories)

  const listCategoriesNoRepeat = [];

  lastPosts.map((item, i) => {
    indexPosts.map(index => {
      if (i === index) {
        listCategoriesNoRepeat.push(item)
      }
    })
  })

  const optionsContent = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        const value = node.content.map(item => item.value)
        return (
          <a
            style={{ textDecoration: "underline" }}
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <img
            src={`${
              !node.data.target.fields
                ? ""
                : node.data.target.fields.file["en-US"].url
            }`}
            alt="blog-images"
          />
        )
      },
      [BLOCKS.PARAGRAPH]: (node, text) => <p>{text}</p>,
    },
    renderMark: {
      [MARKS.BOLD]: text => <b>{text}</b>,
    },
  }

  return (
    <Layout>
      <Container>
        <Box>
          <SEO
            description={detail.title}
            image={!detail.imagePost ? "" : detail.imagePost.fluid.srcSet}
            title={`${detail.title}`}
          />
          <TitlePostDetail>{detail.title}</TitlePostDetail>
          <UserPost
            title={detail.title}
            avatar={detail.author.avatarAuthor.fluid.src}
            authorName={detail.author.authorName}
            category={detail.category.category}
            linkCategory={detail.category.category}
            datePost={`
            ${detail.createdAt.split(" ")[1]}
            ${formatDateToPtBr(detail.createdAt.split(" ")[0])},
            ${detail.createdAt.split(" ")[2]}
            `}
          />
        </Box>
        <BannerPost draggable="false" srcSet={detail.banner.fluid.srcSet} />
        <ContainerContentPost>
          <PostDetail
            imageBanner={!detail.imagePost ? "" : detail.imagePost.fluid.srcSet}
            content={documentToReactComponents(
              detail.content.json,
              optionsContent
            )}
            avatarAuthorQuotes={detail.author.avatarAuthor.fluid.src}
            authorNameQuotes={detail.author.authorName}
          />
        </ContainerContentPost>
        <ContainerMorePosts>
          <BoxMorePosts>
            {listCategoriesNoRepeat.slice(0, 3).map((item, index) => {
              return (
                <div key={index}>
                  <MorePost
                    linkTo={item.node.category.slug}
                    heightText={0}
                    slug={item.node.slug}
                    id={item.node.id}
                    category={item.node.category.category}
                    image={
                      !item.node.imagePost ? "" : item.node.imagePost.resize.src
                    }
                    titlePost={item.node.title}
                    text={item.node.content.json.content[0].content[0].value.length > 110 ?`${item.node.content.json.content[0].content[0].value.substring(
                      0,
                      110
                    )}...` : item.node.content.json.content[0].content[0].value}
                  />
                </div>
              )
            })}
          </BoxMorePosts>
        </ContainerMorePosts>
      </Container>
    </Layout>
  )
}

export default detailPost

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

//Title
const Box = styled.div`
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  @media(max-width:768px){
    padding: 1em;
  }
`
const TitlePostDetail = styled.p`
  margin-top: 0.5em;
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  letter-spacing: normal;
  color: #242d3c;
  @media (max-width: 600px) {
    font-size: 27px;
  }
`
//banner
const BannerPost = styled.img`
  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 450px;
  margin: 1em auto;
`
//ContentPost
const ContainerContentPost = styled.div`
  padding: 1em;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "ContentPost";
  grid-template-columns: 1fr;
  grid-gap: 80px;
  @media (max-width: 1000px) {
    grid-template-columns: 100%;
    max-width: 680px;
  }
`

//More posts
const ContainerMorePosts = styled.div`
  width: 100%;
  padding: 5em 1em 2em 1em;
  background-color: #f9f9f9;
`

const BoxMorePosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 44px;
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const query = graphql`
  query PostDetails($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      type
      slug
      category {
        slug
        category
      }
      title
      slug
      createdAt(formatString: "MMMM D YYYY")
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
      banner {
        fluid {
          src
          srcSet
        }
      }
      imagePost {
        fluid {
          src
          srcSet
        }
      }
    }
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          slug
          title
          category {
            slug
            category
          }
          createdAt(formatString: "MMMM, D, YYYY")
          content {
            json
          }
          imagePost {
            fluid {
              src
              srcSet
            }
            resize(quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`
