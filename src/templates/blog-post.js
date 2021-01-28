import React from 'react';
import { graphql } from 'gatsby';

import Container from '../components/container';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Container>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Container>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
