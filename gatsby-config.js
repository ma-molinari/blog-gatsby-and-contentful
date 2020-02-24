const dotenv = require("dotenv")

dotenv.config()

module.exports = {
  siteMetadata: {
    title: `Blog with gatsby and contentful`,
    description: ``,
    author: `Matheus Molinari`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Categorias`,
        short_name: `Categorias`,
        start_url: `/`,
        background_color: `#f64f76`,
        theme_color: `#f64f76`,
        display: `minimal-ui`,
        icon: `src/assets/images/github.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
