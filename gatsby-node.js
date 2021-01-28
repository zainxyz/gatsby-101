const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // const fileNode = getNode(node.parent)
    // console.log("\n", fileNode.relativePath)

    // const filePath = createFilePath({ node, getNode, basePath: "posts" })
    // console.log("\n", filePath)

    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log("result :", result)
  console.log(JSON.stringify(result, null, 4))

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
