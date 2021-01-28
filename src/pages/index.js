import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Container from "../components/container"

const Home = props => {
  // Pull in title from the given page query data
  const { data } = props
  const {
    site: {
      siteMetadata: { homeTitle },
    },
  } = data

  return (
    <Container>
      <div style={{ color: "purple" }}>
        <Header title={homeTitle} />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
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
  }
`

export default Home
