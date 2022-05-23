import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
  const postArray = posts.map((post) => {
    return <Article key={post.id} {...post} />;
  });

  return <main>{postArray}</main>;
}

export default ArticleList;
