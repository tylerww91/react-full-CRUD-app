import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { createPost } from '../../services/posts.js';

export default function PostForm({ title = '', description = '', submitHandler }) {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  // const handleSubmit = async (title, description) => {
  //   console.log(title);
  //   await createPost(title, description);
  //   return <Redirect to="/posts" />;
  // };

  return (
    <div className="form">
      <TextField
        name="title"
        id="title-input"
        label="Title"
        defaultValue={titleInput}
        helperText=""
        onChange={(e) => setTitleInput(e.target.value)}
      />

      <TextField
        name="description"
        id="description-input"
        label="Description"
        defaultValue={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
      <button
        onClick={() => {
          submitHandler(titleInput, descriptionInput);
        }}
      />
    </div>
  );
}
