import { checkError, client } from './client.js';

export async function getPosts() {
  const resp = await client.from('posts').select('*');
  return checkError(resp);
}

export async function createPost(title, description) {
  const resp = await client.from('posts').insert({ title, description });
  return checkError(resp);
}

export async function getPostDetail(id) {
  const resp = await client.from('posts').select('*').match({ id }).single();
  return checkError(resp);
}

export async function updatePost(id, title, description) {
  const resp = await client.from('posts').update({ title, description }).match({ id });
  return checkError(resp);
}
