module.exports = {
  siteMetadata: {
    title: `Gabriel Ramos`,
    description: ``,
    author: `@gabrieluizramos`,
    siteUrl: 'https://gabrieluizramos.com.br'
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
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-105850294-1",
      },
    },
    `gatsby-plugin-styled-components`,
    ...require('@gabrieluizramos/preferences/gatsby/config'),
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        additionalSitemaps: [
          {
            name: 'blog',
            url: 'https://gabrieluizramos.com.br/blog/sitemap.xml'
          }
        ]
      }
    }
  ],
}
