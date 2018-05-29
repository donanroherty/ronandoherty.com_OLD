module.exports = {
  siteMetadata: {
    title: `Ronan Doherty`,
    tagline: `web and game dev`,
    welcomeMessage: `This is a simple blog template built in Gatsby.`
  },
  plugins: [
    // `gatsby-plugin-remove-trailing-slashes`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`, {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }, {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              sizeByPixelDensity: true
            }
          }, {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          },
          `gatsby-remark-responsive-iframe`
        ]
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: 'content'
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: 'src'
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    }, {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto', 'dosis', 'rubik', 'bungee']
      }
    }
  ]
}
