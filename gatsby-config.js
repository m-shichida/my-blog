const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `shicchi's portfolio&blog`,
    description: `ポートフォリオ兼技術ブログ`,
    author: `Shichida Masatsugu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ],
}
