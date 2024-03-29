/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [`gatsby-plugin-typescript`, `gatsby-plugin-styled-components`, {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Roboto', 'Nunito']
      }
    }
  }],
}
