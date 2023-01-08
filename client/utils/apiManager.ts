export async function getPostingFromPostId(postId: number) {
  const res = await fetch(`http://localhost:8080/postings/${postId}`)
  const data = await res.json()
  return data
}
