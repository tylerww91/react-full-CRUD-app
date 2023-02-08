import { checkError, client } from "./client.js";

export async function getPosts() {
  const resp = await client.from('posts').select('*');
  return checkError(resp);
}