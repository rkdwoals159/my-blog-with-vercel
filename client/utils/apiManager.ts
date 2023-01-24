export async function getPostingFromPostId(postId: number) {
  const res = await fetch(`http://35.78.181.223:8080/postings/${postId}`)
  const data = await res.json()
  return data
}
