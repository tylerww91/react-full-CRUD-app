import { useEffect } from 'react';
import { useState } from 'react';
import { getPostDetail } from '../../services/posts.js';

export function usePost(id) {
  const [postDetail, setPostDetail] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await getPostDetail(id);
        setPostDetail(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { postDetail, setPostDetail, loading, setLoading, error, setError };
}
