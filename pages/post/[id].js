import styles from '../../styles/Post.module.css'

export async function getServerSideProps({ params }) {
    const { id } = params;
    const res = await fetch(`http://localhost:3000/api/post?id=${id}`)
    if (!res.ok) {
      return {
        notFound: true,
      }
    }
    const post = await res.json()
    return {
      props: { post }
    }
}
export default function PostPage({ post }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>di <strong>{post.author}</strong> - {post.votes} voti</p>
      <p className={styles.body}>{post.content}</p>
    </div>
  )
}