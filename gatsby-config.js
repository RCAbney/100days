module.exports = {
  siteMetadata: {
    title: `RCAbney.dev`,
    description: `RCAbney's blog site for the #100daysofgatsby challenge!`,
    author: `@RCAbney`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway\:400,700`, `merriweather\:400,700`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/blogpost.js"),
          posts: require.resolve("./src/components/blogpost.js"),
          portfolio: require.resolve("./src/components/portfolioItem.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1200,
              quality: 100,
              tracedSVG: { color: "#6c8b6b" },
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
          },
        ],
        plugins: [{ resolve: `gatsby-remark-images` }],
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
        icon: `src/images/rcabney-logo.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
