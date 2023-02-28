import type { PostingValue } from '@/pages/components/posting'
export async function getPostingFromPostId(postId: number) {
  const res = await fetch(`http://43.207.19.5:8080/postings/${postId}`)
  const data: PostingValue = await res.json()
  return data
}

export async function getPostingAll() {
  const res = await fetch(`http://43.207.19.5:8080/postings/`)
  const data: PostingValue[] = await res.json()
  return data
}
