import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/post')
  const post = await res.json()
  return {
    props: { post }
  }
}

export default function Home({ post }) {
  return (
    <div className={styles.main}>
      <ul className={styles.postList}>
        {post.map(item => (
          <li key={item.id}>
            <Link href={`/post/${item.id}`} className={styles.postLink}>
              <strong>{item.title}</strong>
            </Link>
            {" - "} di {item.author} - {item.votes} voti
          </li>
        ))}
      </ul>
    </div>
  )
}