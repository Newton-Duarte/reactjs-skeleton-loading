import React, { useEffect, useState } from 'react';
import api from '../api/jsonplaceholder';
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articles = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await api.get('posts');
      setPosts(response.data);
    }, 5000);
  }, [])

  return (
    <div className="articles">
      <h2>Article</h2>

      {posts && posts.map(post => (
        <div className="article" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      {!posts && [1, 2, 3, 4, 5].map(n => <SkeletonArticle key={n} theme="dark" />)}
    </div>
  );
}

export default Articles;