import styled from '@emotion/styled/macro'
import { Suspense, useEffect, useState } from 'react'
import tw from 'twin.macro'
import { getPostingFromPostId } from 'utils/apiManager'
import PostingContent from './content'
import PostingTitle from './title'
interface PostingProps {
  postId: number
}
export interface PostingValue {
  postid: number
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
  ${tw`rounded-lg border-4 mb-7`}
  /* margin-bottom : 16px */
`
export default function Posting(props: PostingProps) {
  const [postingValue, setPostinValue] = useState<PostingValue>()
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPostingFromPostId(props.postId)
      setPostinValue(result)
    }
    fetchData()
  }, [])
  return (
    <>
      {console.log('ㅎㅇㅎㅇ2', postingValue, postingValue?.postid)}
      {postingValue && postingValue.postid !== undefined ? (
        <StyledPosting>
          <PostingTitle value={postingValue}></PostingTitle>
          <PostingContent value={postingValue}></PostingContent>
        </StyledPosting>
      ) : (
        <></>
      )}
    </>
  )
}
