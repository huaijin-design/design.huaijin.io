/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allMarkdownRemark {
        totalCount
        nodes {
          frontmatter {
            title
            chinese
            english
            order
            desc
          }
          rawMarkdownBody
          html
          fileAbsolutePath
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    const { fileAbsolutePath } = node
    const component = fileAbsolutePath.match(/docs\/(\S+)\/\S+\.md$/)[1]
    const regex = `/docs/${component}//`
    actions.createPage({
      path: `/components/${component}`,
      component: require.resolve(`./src/template/index.js`),
      context: { regex },
    })
  })
}
