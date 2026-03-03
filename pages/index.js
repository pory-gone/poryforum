import React from 'react'
import Link from 'next/link'

export async function getServerSideProps() {
  const post = [
    { id: 1, title: 'Primo post', content: 'Contenuto del primo post', votes: 42, author: 'Mario' },
    { id: 2, title: 'Secondo post', content: 'Contenuto del secondo post', votes: 27, author: 'Luigi' },
    { id: 3, title: 'Terzo post', content: 'Contenuto del terzo post', votes: 15, author: 'Peach' },
  ]

  return {
    props: {
      post
    }
  }
}

export default function Home({ post }) {
  return (
    <div>
      <h1>PoryForum</h1>
      <ul>
        {post.map(item => (
          <li key={item.id}>
            <Link href={`/post/${item.id}`}>
              <strong>{item.title}</strong>
            </Link>
            {" - "} di {item.author} - {item.votes} voti
          </li>
        ))}
      </ul>
    </div>
  )
}