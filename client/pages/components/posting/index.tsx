import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import PostingContent from './content'
import PostingTitle from './title'

export interface PostingValue {
  postid: number
  categoryId: number
  title: string
  viewCount: number
  liked: number
  thumbnailURL: string
  content: string
  completed: boolean
  createdAt: string
  updatedAt: string
}
interface PostingProps {
  post: PostingValue
}
const StyledPosting = styled.div`
  ${tw`rounded-lg border-4 mb-7`}/* margin-bottom : 16px */
`
export default function Posting(props: PostingProps) {
  const postingValue = props.post
  return (
    <>
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
