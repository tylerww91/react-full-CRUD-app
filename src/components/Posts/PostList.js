import React from 'react';
import { usePosts } from '../Hooks/UsePosts.js';
import PostCard from './PostCard.js';

export default function PostList() {
  const { loading, error, posts } = usePosts();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
