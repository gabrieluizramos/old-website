module.exports = {
  siteMetadata: {
    title: `Gabriel Ramos`,
    description: ``,
    author: `@gabrieluizramos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gabriel ramos`,
        short_name: `gabrieluizramos`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-105850294-1",
      },
    },
    `gatsby-plugin-styled-components`,
    ...require('@gabrieluizramos/preferences/gatsby/config')
  ],
}
