export async function getServerSideProps({ params }) {
    const { id } = params;
    const post = {
        id: Number(id),
        title: `Post numero ${id}`,
        body: "contenuto del post",
        votes: 10,
        author: "alice"
    }
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
      <p>{post.body}</p>
    </div>
  )
}