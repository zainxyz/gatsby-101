import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

const Post = ({ date, excerpt, id, slug, title }) => {
  return (
    <div key={id}>
      <Link to={slug} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h4 style={{ marginBottom: `${rhythm(1 / 4)}` }}>
          {title} <span style={{ color: '#bbb' }}>- {date}</span>
        </h4>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};

export default Post;
