import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

export default function PostCard({ title, description, user_id, id }) {
  const { user } = useUser();
  const owner = user.id === user_id;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {owner && (
        <p>
          <Link to={`/posts/edit/${id}`}>Edit</Link>
        </p>
      )}
    </div>
  );
}
