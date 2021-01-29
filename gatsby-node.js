const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions;

  // console.log('node :', node?.sourceInstanceName);

  // if (node?.sourceInstanceName === 'posts') {
  if (node.internal.type === 'MarkdownRemark') {
    // const fileNode = getNode(node.parent)
    // console.log("\n", fileNode.relativePath)

    // const filePath = createFilePath({ node, getNode, basePath: "posts" })
    // console.log("\n", filePath)

    // Turn Markdown files in `src/posts` into `posts/slug`
    const slug = createFilePath({ node, getNode, basePath: 'posts' });
    // Creates a new query'able field with the name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/post${slug}`,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

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
  `);

  console.log(JSON.stringify(result, null, 2));

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
