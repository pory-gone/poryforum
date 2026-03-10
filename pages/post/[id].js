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
    <div>
      <h1>{post.title}</h1>
      <p>di <strong>{post.author}</strong> - {post.votes} voti</p>
      <hr />
      <p>{post.content}</p>
    </div>
  )
}