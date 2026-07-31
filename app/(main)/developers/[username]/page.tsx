import React from 'react'

const DevelopersPage = async ({params}:{params: Promise<{ username: string }> }) => {
    const { username } = await params;
  return (
    <div>
      <h1>Developer Profile information</h1>
        <h2>{username}</h2>
    </div>
  )
}

export default DevelopersPage