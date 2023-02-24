import React from 'react';
import { useHistory } from 'react-router-dom';
import { createPost } from '../../services/posts.js';
import PostForm from './PostForm.js';

export default function NewPost() {
  const history = useHistory();
  const handleSubmit = async (title, description) => {
    try {
      await createPost(title, description);
      history.push('/posts');
    } catch (e) {
      console.error(e.message);
    }
  };

  return <PostForm submitHandler={handleSubmit} />;
}
