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
  formatCategoryText,
} from "../utils/helpers"

//icons
import IconFacebook from "../assets/images/facebook.svg"
import IconLinkedin from "../assets/images/linkedin.svg"
import IconTwitter from "../assets/images/twitter.svg"

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

  const listCategoriesNoRepeat = []

  lastPosts.map((item, i) => {
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

  const getSlugPostsOfUniqueCategory = category => {
    const postOfCategory = []
    lastPosts.map((item, index) => {
      getIndexOfUniqueCategory(category).map(i => {
        if (index === i) {
          postOfCategory.push(item.node)
        }
      })
    })
    return postOfCategory
  }

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

  const handleShare = type => {
    if (!window.navigator.share) {
      switch (type) {
        case "facebook":
          window.open(
            `https://www.facebook.com/sharer?u=${window.location.href}`,
            "_blank"
          )
          break
        case "linkedin":
          window.open(
            `https://www.linkedin.com/shareArticle?mini=true&url=${
              window.location.href
            }`,
            "_blank"
          )
          break
        case "twitter":
          window.open(
            `https://twitter.com/intent/tweet?text=${window.location.href}`,
            "_blank"
          )
          break
      }
    } else {
      window.navigator
        .share({
          title: "blog.com.br",
          text: detail.title,
          url: window.location.href,
        })
        .then(_ => console.log("shared"))
        .catch(_ => console.log("not shared"))
    }
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
        <BannerPost srcSet={detail.banner.fluid.srcSet} />
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
          <ContainerSideIcons>
            <SideIcons
              onClick={() => handleShare("facebook")}
              src={IconFacebook}
            />
            <SideIcons
              onClick={() => handleShare("linkedin")}
              src={IconLinkedin}
            />
            <SideIcons onClick={() => handleShare("twitter")} src={IconTwitter} />
          </ContainerSideIcons>
        </ContainerContentPost>
        <ContainerMorePosts>
          <BoxMorePosts>
            {listCategoriesNoRepeat.slice(0, 3).map((item, index) => {
              return (
                <div key={index}>
                  <MorePost
                    linkTo={item.node.category.category}
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
  width:100%;
  margin: 0 auto;
  @media(max-width:768px){
    padding: 1em;
  }
`
const TitlePostDetail = styled.p`
  margin-top: 0.5em;
  font-size: 2rem;
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
  max-width:680px;
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
    "ContentPost"
    "SideIcons";
  grid-template-columns: 1fr;
  grid-gap: 80px;
  @media (max-width: 1000px) {
    grid-template-areas:
      "ContentPost"
      "SideIcons";
    grid-template-columns: 100%;
    max-width: 680px;
  }
`
const ContainerSideIcons = styled.div`
  grid-area: SideIcons;
  display: flex;
  align-items:center;
  justify-content:space-between;
  flex-direction: row;
`
const SideIcons = styled.img`
  margin-top: 0.6em;
  margin-bottom: 1em;
  width: 48px;
  height: 48px;
  object-fit: contain;
  cursor: pointer;
  @media (max-width: 900px) {
    margin-right: 0.5em;
  }
`

//More posts
const ContainerMorePosts = styled.div`
  margin-top: 2em;
  width: 100%;
  padding: 5em 2em 5em 2em;
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
