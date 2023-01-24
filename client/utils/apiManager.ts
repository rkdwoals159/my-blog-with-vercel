export async function getPostingFromPostId(postId: number) {
  const res = await fetch(`http://43.207.19.5:8080/postings/${postId}`)
  const data = await res.json()
  return data
}
