import React from 'react';

import Post from './post';

const PostsList = ({ postsList }) => {
  return (
    <div>
      {postsList.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
