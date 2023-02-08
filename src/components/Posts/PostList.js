import React from 'react'
import { usePosts } from '../Hooks/UsePosts.js'

export default function PostList() {
  const { loading, error, posts } = usePosts

  return (
    <div>PostList</div>
  )
}
