import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio.tauhoo.dev`,
    siteUrl: `https://portfolio.tauhoo.dev`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tauhoo.dev',
        short_name: 'tauhoo.dev',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        orientation: 'landscape',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter`],
        display: 'swap',
      },
    },
  ],
}

export default config
