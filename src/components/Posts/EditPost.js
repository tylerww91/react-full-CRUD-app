import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { updatePost } from '../../services/posts.js';
import { usePost } from '../Hooks/UsePost.js';
import PostForm from './PostForm.js';

export default function EditPost() {
  const { id } = useParams();
  const history = useHistory();
  const { postDetail, loading, setLoading, error, setError } = usePost(id);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const handleSubmit = async (title, description) => {
    setLoading(true);
    try {
      await updatePost(postDetail.id, title, description);
      history.push('/posts');
    } catch (e) {
      setError(e.message);
    }
  };
  return <PostForm {...postDetail} submitHandler={handleSubmit} />;
}
