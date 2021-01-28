import React, { useMemo } from "react"
import { graphql } from "gatsby"

import Container from "../components/container"
import Header from "../components/header"
import PostsList from "../components/posts-list"

const Home = props => {
  // Pull in title from the given page query data
  const { data } = props
  const {
    site: {
      siteMetadata: { homeTitle },
    },
    allMarkdownRemark,
  } = data

  const { edges: posts, totalCount: totalPosts } = allMarkdownRemark

  const postsList = useMemo(
    () =>
      posts.map(({ node }) => ({
        date: node.frontmatter.date,
        excerpt: node.excerpt,
        id: node.id,
        slug: node.fields.slug,
        title: node.frontmatter.title,
      })),
    [posts]
  )

  return (
    <Container>
      <div style={{ color: "purple" }}>
        <Header title={homeTitle} />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <hr />
        <h5>{totalPosts} Posts</h5>
        <PostsList postsList={postsList} />
      </div>
    </Container>
  )
}

/**
 * PageQuery for pages
 */
export const query = graphql`
  query {
    site {
      siteMetadata {
        homeTitle
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

export default Home
