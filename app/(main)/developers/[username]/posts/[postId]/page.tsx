import React from 'react'

const PostPage = async ({params}:{params: Promise<{ username: string; postId: string }> }) => {
    const { username, postId } = await params;
  return (
    <div>
      <h1>Developer Post</h1>
        <h2>Username: {username}</h2>
        <h2>Post ID: {postId}</h2>
    </div>
  )
}

export default PostPage