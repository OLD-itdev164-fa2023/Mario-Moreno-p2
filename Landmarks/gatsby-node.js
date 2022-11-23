/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allContentfulLandmark {
        edges {
          node {
            name
            id
            slug
          }
        }
      }
    }
  `)
  result.data.allContentfulLandmark.edges.forEach(edge => {
    createPage({
      path: `/landmark/${edge.node.slug}`,
      component: require.resolve("./src/templates/LandmarkDetails.js"),
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
      defer: true,
    })
  })
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
