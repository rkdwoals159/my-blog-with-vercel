import styled from '@emotion/styled'
import { Suspense, useEffect, useState } from 'react'
import { getPostingFromPostId } from 'utils/apiManager'
import PostingContent from './content'
interface PostingProps {
  postId: number
}
interface PostingValue {
  postId: number
  categoryId: number
  title: String
  viewCount: number
  liked: number
  thumbnailURL: String
  content: String
  completed: Boolean
  createAt: Date
  updatedAt: Date
}
const StyledPosting = styled.div`
  border: solid 1px;
`
export default function Posting(props: PostingProps) {
  const [postingValue, setPostinValue] = useState<Promise<PostingValue>>()
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPostingFromPostId(props.postId)
      setPostinValue(result)
    }
    fetchData()
  }, [])
  return (
    <>
      <StyledPosting>
        {JSON.stringify(postingValue)}
        {/* <PostingContent postId={props.postId}></PostingContent> */}
      </StyledPosting>
    </>
  )
}
