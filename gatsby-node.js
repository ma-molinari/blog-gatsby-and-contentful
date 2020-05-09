const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const Post = path.resolve(`./src/templates/detailPost.js`)
  const Categories = path.resolve(`./src/templates/categories.js`)

  const blogPost = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) throw res.errors
    const posts = res.data.allContentfulPost.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/p/${post.node.slug}`,
        component: Post,
        context: {
          slug: post.node.slug,
        },
      })
    })
  })

  const blogCategories = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              category {
                category
                slug
              }
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) throw res.errors
    const categories = res.data.allContentfulPost.edges

    categories.forEach((catg, index) => {
      const previous =
        index === categories.length - 1 ? null : categories[index + 1].node
      const next = index === 0 ? null : categories[index - 1].node

      createPage({
        path: `/categorias/${catg.node.category.slug}`,
        component: Categories,
        context: {
          categoria: catg.node.category.slug,
        },
      })
    })
  })

  return [blogCategories, blogPost]
}
